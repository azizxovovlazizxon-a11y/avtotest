const fs = require('fs');

// Load the extracted data
const data = require('./questions.json');

console.log('Processing data for TypeScript...');

// Group answers by question_id
const answersByQuestion = {};
data.answers.forEach(answer => {
  if (!answersByQuestion[answer.question_id]) {
    answersByQuestion[answer.question_id] = [];
  }
  answersByQuestion[answer.question_id].push(answer);
});

// Sort answers by order_number
Object.keys(answersByQuestion).forEach(qId => {
  answersByQuestion[qId].sort((a, b) => a.order_number - b.order_number);
});

// Sort questions by order_number
const sortedQuestions = [...data.questions].sort((a, b) => a.order_number - b.order_number);

// Create questions in our app format
const QUESTIONS_PER_BILET = 10;
const allQuestions = [];

// Function to clean text (fix any encoding issues)
function cleanText(text) {
  if (!text) return text;
  // Replace problematic characters
  return text
    .replace(/ʻ/g, "'")  // Replace Uzbek modifier letter turned comma with apostrophe
    .replace(/ʼ/g, "'")  // Replace modifier letter apostrophe
    .replace(/'/g, "'")  // Replace curly apostrophe
    .replace(/'/g, "'")  // Replace another curly apostrophe
    .replace(/«/g, '"')  // Replace guillemets
    .replace(/»/g, '"');
}

sortedQuestions.forEach((q, index) => {
  const biletNumber = Math.floor(index / QUESTIONS_PER_BILET) + 1;
  const answers = answersByQuestion[q.id] || [];
  const correctIndex = answers.findIndex(a => a.is_correct === 1);
  
  // Get category name
  let category = "Umumiy qoidalar";
  const qc = data.question_categories.find(qc => qc.question_id === q.id);
  if (qc) {
    const cat = data.categories.find(c => c.id === qc.category_id);
    if (cat) {
      category = cleanText(cat.name_uz_latn) || cleanText(cat.name_ru);
    }
  }
  
  const question = {
    id: q.id,
    biletId: biletNumber,
    text: cleanText(q.text_uz_latn) || cleanText(q.text_ru),
    options: answers.map(a => cleanText(a.text_uz_latn) || cleanText(a.text_ru)),
    correctAnswer: correctIndex >= 0 ? correctIndex : 0,
    category: category
  };
  
  // Only add imageUrl if has image
  if (q.has_image && q.image_uz_latn) {
    question.imageUrl = `/images/questions/${q.image_uz_latn}`;
  }
  
  // Only add explanation if exists
  const explanation = cleanText(q.comment_uz_latn) || cleanText(q.comment_ru);
  if (explanation) {
    question.explanation = explanation;
  }
  
  allQuestions.push(question);
});

// Generate TypeScript code
let tsCode = `import type { Question } from '../types'

// Real questions extracted from Avto Test PRO database
// Total: ${allQuestions.length} questions in ${Math.ceil(allQuestions.length / QUESTIONS_PER_BILET)} bilets

export const questions: Question[] = `;

// Write JSON with proper formatting
tsCode += JSON.stringify(allQuestions, null, 2);

tsCode += `

// Get total number of bilets
export const getTotalBilets = (): number => {
  const biletIds = new Set(questions.map(q => q.biletId))
  return biletIds.size
}

// Get questions for a specific bilet
export const getBiletQuestions = (biletId: number): Question[] => {
  return questions.filter(q => q.biletId === biletId)
}

// Get random questions for exam
export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

// Get questions by category
export const getQuestionsByCategory = (category: string): Question[] => {
  return questions.filter(q => q.category === category)
}

// Get all unique categories
export const getCategories = (): string[] => {
  const categories = new Set(questions.map(q => q.category).filter(Boolean))
  return Array.from(categories) as string[]
}
`;

fs.writeFileSync('src/data/questions.ts', tsCode, 'utf8');
console.log(`Generated src/data/questions.ts with ${allQuestions.length} questions`);

// Statistics
console.log('\n=== Statistics ===');
console.log(`Total questions: ${allQuestions.length}`);
console.log(`Total bilets: ${Math.ceil(allQuestions.length / QUESTIONS_PER_BILET)}`);
console.log(`Questions with images: ${allQuestions.filter(q => q.imageUrl).length}`);
console.log(`Questions with explanations: ${allQuestions.filter(q => q.explanation).length}`);

// Show first question
console.log('\n=== First Question ===');
console.log(JSON.stringify(allQuestions[0], null, 2));

const fs = require('fs');
const path = require('path');

// Load the extracted data
const data = require('./questions.json');

console.log('Processing data...');
console.log(`Questions: ${data.questions.length}`);
console.log(`Answers: ${data.answers.length}`);
console.log(`Categories: ${data.categories.length}`);

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

// Create bilet structure (10 questions per bilet = 111 bilets for 1110 questions)
const QUESTIONS_PER_BILET = 10;
const bilets = [];

// Sort questions by order_number
const sortedQuestions = [...data.questions].sort((a, b) => a.order_number - b.order_number);

for (let i = 0; i < sortedQuestions.length; i += QUESTIONS_PER_BILET) {
  const biletQuestions = sortedQuestions.slice(i, i + QUESTIONS_PER_BILET);
  const biletNumber = Math.floor(i / QUESTIONS_PER_BILET) + 1;
  
  const formattedQuestions = biletQuestions.map((q, idx) => {
    const answers = answersByQuestion[q.id] || [];
    const correctIndex = answers.findIndex(a => a.is_correct === 1);
    
    return {
      id: q.id,
      questionNumber: idx + 1,
      // Use Latin Uzbek text as primary, fallback to Russian
      text: q.text_uz_latn || q.text_ru,
      textUzCyrl: q.text_uz_cyrl,
      textRu: q.text_ru,
      options: answers.map(a => a.text_uz_latn || a.text_ru),
      optionsUzCyrl: answers.map(a => a.text_uz_cyrl),
      optionsRu: answers.map(a => a.text_ru),
      correctAnswer: correctIndex >= 0 ? correctIndex : 0,
      explanation: q.comment_uz_latn || q.comment_ru || '',
      explanationUzCyrl: q.comment_uz_cyrl || '',
      explanationRu: q.comment_ru || '',
      image: q.has_image ? q.image_uz_latn : null,
      category: getCategoryName(q.id)
    };
  });
  
  bilets.push({
    biletNumber,
    questions: formattedQuestions
  });
}

// Get category name for a question
function getCategoryName(questionId) {
  const qc = data.question_categories.find(qc => qc.question_id === questionId);
  if (qc) {
    const cat = data.categories.find(c => c.id === qc.category_id);
    if (cat) {
      return cat.name_uz_latn || cat.name_ru;
    }
  }
  return "Umumiy";
}

console.log(`Created ${bilets.length} bilets`);

// Save the formatted data
fs.writeFileSync('bilets-formatted.json', JSON.stringify(bilets, null, 2));
console.log('Saved to bilets-formatted.json');

// Create a flat list of all questions for our app
const allQuestions = [];
bilets.forEach(bilet => {
  bilet.questions.forEach(q => {
    allQuestions.push({
      id: q.id,
      bilet: bilet.biletNumber,
      questionNumber: q.questionNumber,
      text: q.text,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      image: q.image,
      category: q.category
    });
  });
});

fs.writeFileSync('all-questions.json', JSON.stringify(allQuestions, null, 2));
console.log(`Saved ${allQuestions.length} questions to all-questions.json`);

// Generate TypeScript code for questions.ts
const tsCode = `// Auto-generated from Avto Test PRO database
// Total: ${allQuestions.length} questions in ${bilets.length} bilets

export interface Question {
  id: number;
  bilet: number;
  questionNumber: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  image: string | null;
  category: string;
}

export const questions: Question[] = ${JSON.stringify(allQuestions, null, 2)};

export const getBiletQuestions = (biletNumber: number): Question[] => {
  return questions.filter(q => q.bilet === biletNumber);
};

export const getTotalBilets = (): number => ${bilets.length};

export const getRandomQuestions = (count: number): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
`;

fs.writeFileSync('generated-questions.ts', tsCode);
console.log('Generated TypeScript file: generated-questions.ts');

// Show some statistics
console.log('\n=== Statistics ===');
console.log(`Total questions: ${allQuestions.length}`);
console.log(`Total bilets: ${bilets.length}`);
console.log(`Questions with images: ${allQuestions.filter(q => q.image).length}`);
console.log(`Questions with explanations: ${allQuestions.filter(q => q.explanation).length}`);

// Show sample
console.log('\n=== Sample Question ===');
console.log(JSON.stringify(allQuestions[0], null, 2));

const fs = require('fs');

const content = fs.readFileSync('src/data/questions.ts', 'utf8');
const lines = content.split('\n');

// Keep lines 0-698 (questions 1-50, bilets 1-5)
const cutLine = 699;
const header = lines.slice(0, cutLine).join('\n');

const footer = `]

// Total bilets available (premium bilets served from API)
const TOTAL_BILETS = 111

// Free bilets that are stored locally
const FREE_BILETS = [1, 2, 3, 4, 5]

// Get total number of bilets
export const getTotalBilets = (): number => {
  return TOTAL_BILETS
}

// Get questions for a specific bilet (only free bilets available locally)
export const getBiletQuestions = (biletId: number): Question[] => {
  return questions.filter(q => q.biletId === biletId)
}

// Get random questions for exam (from free bilets only)
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

// Bilet info interface
export interface BiletInfo {
  id: number
  number: number
  questionsCount: number
  isFree: boolean
}

// Get bilet information for all bilets
export const getBiletInfo = (): BiletInfo[] => {
  const biletInfos: BiletInfo[] = []
  
  for (let i = 1; i <= TOTAL_BILETS; i++) {
    biletInfos.push({
      id: i,
      number: i,
      questionsCount: 10,
      isFree: FREE_BILETS.includes(i),
    })
  }
  
  return biletInfos
}
`;

fs.writeFileSync('src/data/questions.ts', header + footer);
console.log('Done! Questions file truncated to keep only free bilets (1-5)');
console.log('Premium questions (bilets 6-111) removed from client code');

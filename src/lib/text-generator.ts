
// Simple word lists for different difficulties
const easyWords = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me"];
const mediumWords = ["people", "time", "year", "way", "day", "thing", "man", "world", "life", "hand", "part", "child", "eye", "woman", "place", "work", "week", "case", "point", "government", "company", "number", "group", "problem", "fact", "system", "program", "question", "during", "without", "again", "never", "always", "something", "important", "however", "another", "become", "between", "develop", "example", "general", "national", "present", "provide", "service", "student", "support", "through", "understand"];
const hardWords = ["aberration", "benevolent", "cacophony", "deleterious", "ebullient", "fastidious", "gregarious", "hegemony", "iconoclast", "juxtaposition", "kowtow", "labyrinthine", "magnanimous", "nefarious", "obfuscate", "paradigm", "quixotic", "recalcitrant", "sagacious", "taciturn", "ubiquitous", "vacillate", "wanton", "xenophobia", "zeitgeist", "acquiesce", "bilk", "circumlocution", "demagogue", "ephemeral", "fatuous", "garrulous", "harangue", "impetuous", "jejune", "knell", "legerdemain", "maudlin", "nadir", "ostensible", "paucity", "querulous", "rancorous", "serendipity", "truculent", "umbrage", "vicissitude", "winsome", "yoke"];

export type Difficulty = 'easy' | 'medium' | 'hard';

/**
 * Generates a random text snippet.
 * @param wordCount The number of words to generate.
 * @param difficulty The difficulty level ('easy', 'medium', 'hard').
 * @returns A string of random words separated by spaces.
 */
export function generateRandomText(wordCount: number = 50, difficulty: Difficulty = 'medium'): string {
  let wordList: string[];

  switch (difficulty) {
    case 'easy':
      wordList = easyWords;
      break;
    case 'medium':
      wordList = mediumWords;
      break;
    case 'hard':
      wordList = hardWords;
      break;
    default:
      wordList = mediumWords;
  }

  let text = '';
  for (let i = 0; i < wordCount; i++) {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    text += wordList[randomIndex] + (i === wordCount - 1 ? '' : ' ');
  }
  return text;
}

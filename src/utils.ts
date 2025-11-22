import { converter, formatHex } from "culori";

export const WORDS_PER_TEST = 25;

export function getRandomWords(count: number): string[] {
  const words = [
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
    "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
    "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
    "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
    "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
    "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
    "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
    "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
    "even", "new", "want", "because", "any", "these", "give", "day", "most", "us",
    "is", "was", "are", "been", "has", "had", "were", "said", "did", "having",
    "may", "should", "does", "being", "might", "must", "shall", "could", "would", "can",
    "call", "find", "found", "long", "down", "side", "been", "now", "find", "head",
    "stand", "own", "page", "should", "country", "found", "answer", "school", "grow", "study",
    "still", "learn", "plant", "cover", "food", "sun", "four", "between", "state", "keep",
    "eye", "never", "last", "let", "thought", "city", "tree", "cross", "farm", "hard",
    "start", "might", "story", "saw", "far", "sea", "draw", "left", "late", "run",
    "while", "press", "close", "night", "real", "life", "few", "north", "open", "seem",
    "together", "next", "white", "children", "begin", "got", "walk", "example", "ease", "paper",
    "group", "always", "music", "those", "both", "mark", "often", "letter", "until", "mile",
    "river", "car", "feet", "care", "second", "book", "carry", "took", "science", "eat",
    "room", "friend", "began", "idea", "fish", "mountain", "stop", "once", "base", "hear",
    "horse", "cut", "sure", "watch", "color", "face", "wood", "main", "enough", "plain",
    "girl", "usual", "young", "ready", "above", "ever", "red", "list", "though", "feel",
    "talk", "bird", "soon", "body", "dog", "family", "direct", "pose", "leave", "song",
    "measure", "door", "product", "black", "short", "numeral", "class", "wind", "question", "happen",
    "complete", "ship", "area", "half", "rock", "order", "fire", "south", "problem", "piece",
    "told", "knew", "pass", "since", "top", "whole", "king", "space", "heard", "best",
    "hour", "better", "true", "during", "hundred", "five", "remember", "step", "early", "hold",
    "west", "ground", "interest", "reach", "fast", "verb", "sing", "listen", "six", "table",
    "travel", "less", "morning", "ten", "simple", "several", "vowel", "toward", "war", "lay",
    "against", "pattern", "slow", "center", "love", "person", "money", "serve", "appear", "road",
    "map", "rain", "rule", "govern", "pull", "cold", "notice", "voice", "unit", "power",
    "town", "fine", "certain", "fly", "fall", "lead", "cry", "dark", "machine", "note",
    "wait", "plan", "figure", "star", "box", "noun", "field", "rest", "correct", "able",
    "pound", "done", "beauty", "drive", "stood", "contain", "front", "teach", "week", "final",
    "gave", "green", "oh", "quick", "develop", "ocean", "warm", "free", "minute", "strong",
    "special", "mind", "behind", "clear", "tail", "produce", "fact", "street", "inch", "multiply",
    "nothing", "course", "stay", "wheel", "full", "force", "blue", "object", "decide", "surface",
    "deep", "moon", "island", "foot", "system", "busy", "test", "record", "boat", "common",
    "gold", "possible", "plane", "stead", "dry", "wonder", "laugh", "thousand", "ago", "ran",
    "check", "game", "shape", "equate", "hot", "miss", "brought", "heat", "snow", "tire",
    "bring", "yes", "distant", "fill", "east", "paint", "language", "among", "grand", "ball",
    "yet", "wave", "drop", "heart", "am", "present", "heavy", "dance", "engine", "position",
    "arm", "wide", "sail", "material", "size", "vary", "settle", "speak", "weight", "general",
    "ice", "matter", "circle", "pair", "include", "divide", "syllable", "felt", "perhaps", "pick",
    "sudden", "count", "square", "reason", "length", "represent", "art", "subject", "region", "energy",
    "hunt", "probable", "bed", "brother", "egg", "ride", "cell", "believe", "fraction", "forest",
    "sit", "race", "window", "store", "summer", "train", "sleep", "prove", "lone", "leg",
    "exercise", "wall", "catch", "mount", "wish", "sky", "board", "joy", "winter", "sat",
    "written", "wild", "instrument", "kept", "glass", "grass", "cow", "job", "edge", "sign",
    "visit", "past", "soft", "fun", "bright", "gas", "weather", "month", "million", "bear",
    "finish", "happy", "hope", "flower", "clothe", "strange", "gone", "jump", "baby", "eight",
    "village", "meet", "root", "buy", "raise", "solve", "metal", "whether", "push", "seven",
    "paragraph", "third", "shall", "held", "hair", "describe", "cook", "floor", "either", "result",
    "burn", "hill", "safe", "cat", "century", "consider", "type", "law", "bit", "coast",
    "copy", "phrase", "silent", "tall", "sand", "soil", "roll", "temperature", "finger", "industry",
    "value", "fight", "lie", "beat", "excite", "natural", "view", "sense", "ear", "else",
    "quite", "broke", "case", "middle", "kill", "son", "lake", "moment", "scale", "loud",
    "spring", "observe", "child", "straight", "consonant", "nation", "dictionary", "milk", "speed", "method",
    "organ", "pay", "age", "section", "dress", "cloud", "surprise", "quiet", "stone", "tiny",
    "climb", "cool", "design", "poor", "lot", "experiment", "bottom", "key", "iron", "single",
    "stick", "flat", "twenty", "skin", "smile", "crease", "hole", "trade", "melody", "trip",
    "office", "receive", "row", "mouth", "exact", "symbol", "die", "least", "trouble", "shout",
    "except", "wrote", "seed", "tone", "join", "suggest", "clean", "break", "lady", "yard",
    "rise", "bad", "blow", "oil", "blood", "touch", "grew", "cent", "mix", "team",
    "wire", "cost", "lost", "brown", "wear", "garden", "equal", "sent", "choose", "fell",
    "fit", "flow", "fair", "bank", "collect", "save", "control", "decimal", "gentle", "woman",
    "captain", "practice", "separate", "difficult", "doctor", "please", "protect", "noon", "whose", "locate",
    "ring", "character", "insect", "caught", "period", "indicate", "radio", "spoke", "atom", "human",
    "history", "effect", "electric", "expect", "crop", "modern", "element", "hit", "student", "corner",
    "party", "supply", "bone", "rail", "imagine", "provide", "agree", "thus", "capital", "won",
    "chair", "danger", "fruit", "rich", "thick", "soldier", "process", "operate", "guess", "necessary",
    "sharp", "wing", "create", "neighbor", "wash", "bat", "rather", "crowd", "corn", "compare",
    "poem", "string", "bell", "depend", "meat", "rub", "tube", "famous", "dollar", "stream",
    "fear", "sight", "thin", "triangle", "planet", "hurry", "chief", "colony", "clock", "mine",
    "tie", "enter", "major", "fresh", "search", "send", "yellow", "gun", "allow", "print",
    "dead", "spot", "desert", "suit", "current", "lift", "rose", "continue", "block", "chart",
    "hat", "sell", "success", "company", "subtract", "event", "particular", "deal", "swim", "term",
    "opposite", "wife", "shoe", "shoulder", "spread", "arrange", "camp", "invent", "cotton", "born",
    "determine", "quart", "nine", "truck", "noise", "level", "chance", "gather", "shop", "stretch",
    "throw", "shine", "property", "column", "molecule", "select", "wrong", "gray", "repeat", "require",
    "broad", "prepare", "salt", "nose", "plural", "anger", "claim", "continent", "oxygen", "sugar",
    "death", "pretty", "skill", "women", "season", "solution", "magnet", "silver", "thank", "branch",
    "match", "suffix", "especially", "fig", "afraid", "huge", "sister", "steel", "discuss", "forward",
    "similar", "guide", "experience", "score", "apple", "bought", "led", "pitch", "coat", "mass",
    "card", "band", "rope", "slip", "win", "dream", "evening", "condition", "feed", "tool",
    "total", "basic", "smell", "valley", "nor", "double", "seat", "arrive", "master", "track",
    "parent", "shore", "division", "sheet", "substance", "favor", "connect", "post", "spend", "chord",
    "fat", "glad", "original", "share", "station", "dad", "bread", "charge", "proper", "bar",
    "offer", "segment", "slave", "duck", "instant", "market", "degree", "populate", "chick", "dear",
    "enemy", "reply", "drink", "occur", "support", "speech", "nature", "range", "steam", "motion",
    "path", "liquid", "log", "meant", "quotient", "teeth", "shell", "neck"
  ];

  const result: string[] = [];
  for (let i = 0; i < count; i++) {
    const word = words[Math.floor(Math.random() * words.length)];
    if (word) {
      result.push(word);
    }
  }
  return result;
}

export function calculateWPM(correctChars: number, timeInSeconds: number): number {
  if (timeInSeconds === 0) return 0;
  // Standard WPM calculation: (characters / 5) / minutes
  return Math.round((correctChars / 5) / (timeInSeconds / 60));
}

export function calculateAccuracy(correctChars: number, totalChars: number): number {
  if (totalChars === 0) return 100;
  return Math.round((correctChars / totalChars) * 100);
}

export function splitIntoWordGroups(text: string, wordsPerGroup: number): string[][] {
  // Remove emojis and other non-ASCII characters (except basic punctuation)
  // This regex removes emojis, symbols, and other special Unicode characters
  const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{FE00}-\u{FE0F}]|[\u{1F200}-\u{1F251}]|[\u{00A9}\u{00AE}\u{203C}\u{2049}\u{2122}\u{2139}\u{2194}-\u{2199}\u{21A9}-\u{21AA}\u{231A}-\u{231B}\u{2328}\u{23CF}\u{23E9}-\u{23F3}\u{23F8}-\u{23FA}\u{24C2}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}\u{2600}-\u{2604}\u{260E}\u{2611}\u{2614}-\u{2615}\u{2618}\u{261D}\u{2620}\u{2622}-\u{2623}\u{2626}\u{262A}\u{262E}-\u{262F}\u{2638}-\u{263A}\u{2640}\u{2642}\u{2648}-\u{2653}\u{265F}-\u{2660}\u{2663}\u{2665}-\u{2666}\u{2668}\u{267B}\u{267E}-\u{267F}\u{2692}-\u{2697}\u{2699}\u{269B}-\u{269C}\u{26A0}-\u{26A1}\u{26A7}\u{26AA}-\u{26AB}\u{26B0}-\u{26B1}\u{26BD}-\u{26BE}\u{26C4}-\u{26C5}\u{26C8}\u{26CE}-\u{26CF}\u{26D1}\u{26D3}-\u{26D4}\u{26E9}-\u{26EA}\u{26F0}-\u{26F5}\u{26F7}-\u{26FA}\u{26FD}\u{2702}\u{2705}\u{2708}-\u{270D}\u{270F}\u{2712}\u{2714}\u{2716}\u{271D}\u{2721}\u{2728}\u{2733}-\u{2734}\u{2744}\u{2747}\u{274C}\u{274E}\u{2753}-\u{2755}\u{2757}\u{2763}-\u{2764}\u{2795}-\u{2797}\u{27A1}\u{27B0}\u{27BF}\u{2934}-\u{2935}\u{2B05}-\u{2B07}\u{2B1B}-\u{2B1C}\u{2B50}\u{2B55}\u{3030}\u{303D}\u{3297}\u{3299}]/gu;

  let cleanedText = text.replace(emojiRegex, '');

  // Normalize whitespace: replace all whitespace (newlines, tabs, multiple spaces) with single spaces
  cleanedText = cleanedText.replace(/\s+/g, ' ').trim();

  // Split by space and filter out empty strings
  const words = cleanedText.split(' ').filter(word => word.length > 0);

  const groups: string[][] = [];
  for (let i = 0; i < words.length; i += wordsPerGroup) {
    groups.push(words.slice(i, i + wordsPerGroup));
  }

  return groups.filter(group => group.length > 0);
}

export function adjustColorOpacity(hexColor: string, opacity: number): string {
  // Convert to HSL for saturation manipulation
  const toHsl = converter('hsl');
  const colorInHsl = toHsl(hexColor);

  if (!colorInHsl) {
    // Fallback if conversion fails
    return hexColor;
  }

  // Reduce saturation (desaturate by 40% - multiply by 0.6)
  const newSaturation = (colorInHsl.s || 0) * opacity;

  // Reduce lightness to simulate opacity on black background
  const newLightness = (colorInHsl.l || 0) * opacity;

  // Create new HSL color with adjusted values
  const adjustedColor = {
    mode: 'hsl' as const,
    h: colorInHsl.h || 0,
    s: newSaturation,
    l: newLightness
  };

  // Convert back to hex
  return formatHex(adjustedColor);
}

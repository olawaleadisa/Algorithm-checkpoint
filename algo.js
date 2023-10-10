function analyzeSentence(sentence) {
    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
  
    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
      const currentChar = sentence[i];
  
      // Increment the sentence length counter for each character
      sentenceLength++;
  
      // Check if the current character is a letter and the next character is a space or it's the last character (a point)
      if (
        (currentChar >= 'a' && currentChar <= 'z') ||
        (currentChar >= 'A' && currentChar <= 'Z')
      ) {
        // Check if the next character is a space or it's the last character (a point)
        if (
          sentence[i + 1] === ' ' ||
          sentence[i + 1] === '.' ||
          sentence[i + 1] === undefined
        ) {
          // Increment word count when a word is found
          wordCount++;
        }
      }
  
      // Check if the current character is a vowel (case-insensitive)
      if (
        currentChar === 'a' ||
        currentChar === 'e' ||
        currentChar === 'i' ||
        currentChar === 'o' ||
        currentChar === 'u' ||
        currentChar === 'A' ||
        currentChar === 'E' ||
        currentChar === 'I' ||
        currentChar === 'O' ||
        currentChar === 'U'
      ) {
        vowelCount++;
      }
    }
  
    // Output the results
    console.log(`Length of the sentence: ${sentenceLength} characters`);
    console.log(`Number of words in the sentence: ${wordCount}`);
    console.log(`Number of vowels in the sentence: ${vowelCount}`);
  }
  
  // Example usage:
  const inputSentence = "This is a sample sentence.";
  analyzeSentence(inputSentence);
  
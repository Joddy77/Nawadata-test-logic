let words = "Sample Case";

const sortCharacter = (w) => {
  let vowel = "aiueoAIUEO";
  let isVowel = "";
  let consonant = "";

  for (let i = 0; i < w.length; i++) {
    if (vowel.includes(w[i])) {
      isVowel += w[i];
    } else if (/[a-zA-Z]/.test(w[i])) {
      consonant += w[i];
    }
  }

  return ` Vowel Characters: \n ${isVowel.toLocaleLowerCase()} \n Consonant Characters: \n ${consonant.toLocaleLowerCase()}`;
};

console.log(sortCharacter(words));

words = "Next Case";
console.log(sortCharacter(words));

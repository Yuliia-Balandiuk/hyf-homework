//Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function getShortestWord() {
  let shortestWord = danishWords[0];
  for (let i = 1; i < danishWords.length; i++) {
    if (danishWords[i].length < danishWords[i + 1].length) {
      shortestWord = danishWords[i];
      return shortestWord;
    }
  }
}
console.log(getShortestWord(danishWords));

//Find and count the Danish letters
function getQuantityDanishLetters(text) {
  const strToArr = text.split(' ');
  const result = { total: 0, æ: 0, ø: 0, å: 0 };

  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].includes('å')) {
      result['å'] += 1;
    }
    if (strToArr[i].includes('æ')) {
      result.æ += 1;
    }
    if (strToArr[i].includes('ø')) {
      result.ø += 1;
    }
  }
  result.total = result.å + result.æ + result.ø;
  for (const key in result) {
    if (result[key] === 0) {
      delete result[key];
    }
  }
  return result;
}

const danishString = 'Jeg har en blå bil';
console.log(getQuantityDanishLetters(danishString));

const danishString2 = 'Blå grød med røde bær';
console.log(getQuantityDanishLetters(danishString2));

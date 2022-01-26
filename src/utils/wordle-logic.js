export function check(wordArr, answer, obj) {
    let word =
      wordArr[0][0] +
      wordArr[1][0] +
      wordArr[2][0] +
      wordArr[3][0] +
      wordArr[4][0];
    console.log(word);
  
    const counts = answer.split('').reduce((acc,curr) => {
      acc[curr] = ++acc[curr] || 1;
      return acc;
    },{});
   
    for (let i = 0; i < word.length; i++) {
      if (word[i] === answer[i]) {
        wordArr[i][1] = "equal";
        obj[word[i]] = "equal";
        counts[word[i]] -= 1;
      } else if (answer.includes(word[i]) && counts[word[i]] > 0) {
        wordArr[i][1] = "exist";
        obj[word[i]] =  obj[word[i]] === 'equal'? obj[word[i]] : "exist";
        counts[word[i]] -= 1;
      } else {
        wordArr[i][1] = "no";
        obj[word[i]] =  obj[word[i]] === 'equal'|| obj[word[i]] === 'exist' ? obj[word[i]] : 'no';
      }
    }
    return wordArr;
  }
  
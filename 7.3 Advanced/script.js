function wordPattern(word) {

  let toArray = word.toLowerCase().split("");

  const mySet = new Set(toArray);
  const setToArray = [...mySet];
  let brandNewArray = [];

  toArray.forEach(letter => {
    brandNewArray.push(setToArray.indexOf(letter));
  });

  // for (let i = 0; i < word.length; i++) {
  //     brandNewArray.push(setToArray.indexOf(toArray[i]));
  // }

  return brandNewArray.join(".");
}

console.log(wordPattern("lol")); // should log 0.1.0
console.log(wordPattern("ll")); // should log 0.0
console.log(wordPattern("hello")); // should log 0.1.2.2.3
console.log(wordPattern("Hippopotomonstrosesquippedaliophobia"));
// should log 0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13
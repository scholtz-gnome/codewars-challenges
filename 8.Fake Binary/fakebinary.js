const fakeBin = x => x.toString().split('').map(number => number < 5 ? 0 : 1).join('');

console.log(fakeBin(93059282395842598269580));
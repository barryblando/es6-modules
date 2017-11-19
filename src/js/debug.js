const posts = [
  { title: 'I love Javascript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Barry Blando', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

console.log(posts.map(el => ({ id: el.id })));

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

// Test Setup
const testArr = [1, 2, 3, 4, 5];

// Display Code
console.log(`Before: ${JSON.stringify(testArr)}`);
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log(`Before: ${JSON.stringify(testArr)}`);

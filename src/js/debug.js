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


const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

// concat arrays using spread
const pizzas = [...featured, 'veg', ...specialty];
const fridayPizzas = [...pizzas]; // doesn't affect pizzas array 'cause spread will just concatenate whatever data added
// const fridayPizzas = pizzas; // affects pizzas array
fridayPizzas[0] = 'Pie';

console.log(fridayPizzas);
console.log(pizzas);

function spanWrap(word) {
  // each one will be wrap in a span and return but we don't want an array result we want a string so we just call join on the end
  return [...word].map(letter => `<span>${letter}</span>`).join('');
}

const heading = 'MERRY';
// get the text content of h2, wrap each letter on a span, and inject it back inside h2
console.log(spanWrap(heading));


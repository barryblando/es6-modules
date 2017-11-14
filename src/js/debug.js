const posts = [
  { title: 'I love Javascript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Barry Blando', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

console.log(posts.map(el => ({ id: el.id })));

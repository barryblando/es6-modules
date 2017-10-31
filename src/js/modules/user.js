import slug from 'slug';
import base64 from 'base-64';
import { url } from './config';

// create Username
export default function User(name, email, website) {
  return { name, email, website };
}

export function createURL(name) {
  // slug replace spaces(or unicode) with - separator e.g 'Wes Bos' => 'Wes-Bos'
  return `${url}/users/${slug(name)}`;
}

// you can get a user's avatar when you their email
export function gravatar(email) {
  const hash = base64.encode(email);
  const photoURL = `https://www.gravatar.com/avatar/${hash}`;
  return photoURL;
}

// --- Promises ---

// Promises are often used when you're fetching a JSON API and doing some AJAX work.
// Promise is a something that will happen between now and the end of time.
// Something that will happen in the future but probably not immediately.

export function rejectedPromise() {
  return new Promise((resolve, reject) => {
    console.log('I promise!');
    reject(Error('You lied to me!!'));
  });
}

const posts = [
  { title: 'I love Javascript', author: 'Wes Bos', id: 1 },
  { title: 'CSS!', author: 'Barry Blando', id: 2 },
  { title: 'Dev tools tricks', author: 'Addy Osmani', id: 3 },
];

const authors = [
  { name: 'Wes Bos', twitter: '@wesbos', bio: 'Canadian Developer' },
  { name: 'Barry Blando', twitter: '@Retr0_0x315', bio: 'Filipino Developer' },
  { name: 'Addy Osmani', twitter: '@addyosmani', bio: 'Googler' },
];

function getPostById(id) {
  // create new promise
  return new Promise(((resolve, reject) => {
    // using a set timeout to just mimic a database
    setTimeout(() => {
      // find the post we want
      // .find returns object in an array by one of its properties { title: #, author: #, id: # }
      const pst = posts.find(post => post.id === id);
      if (pst) {
        resolve(pst); // send the post back
      } else {
        reject(Error('No post was found!'));
      }
    });
  }));
}

// going to take in the Post and hydrate
function hydrateAuthor(post) {
  // create new promise
  return new Promise((resolve, reject) => {
    // find the author
    const authorDetails = authors.find(person => person.name === post.author);
    if (authorDetails) {
      // "hydrate" the post object with the author object
      post.author = authorDetails;
      resolve(post); // send the post back
    } else {
      reject(Error('Can\'t find the author.'));
    }
  });
}

export { getPostById, hydrateAuthor };

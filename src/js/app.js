/**
 * /<reference https://mdn-mixmix.hashbase.io/en-US/docs/Web/JavaScript/Reference/Statements/import.html
 * when apiKey is named Export you gotta use curly braces in import, while default export doesn't have curly braces
 * you can rename it too using 'as'
 */
import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
// import { apiKey as key, url, sayHi, old, dog } from './modules/config';
import User, { createURL, gravatar, rejectedPromise, getPostById, hydrateAuthor } from './modules/user';
import Animal from './modules/animal';
import Dog from './modules/dog';
import MovieCollection from './modules/movie-collection';
import '../scss/app.scss';

// get unique number using lodash uniq
// console.log(uniq(ages));

/**
 * Animal & Dog Modules
 */

const rhino = new Animal('Rhiny');
console.log(rhino);

const snickers = new Dog('Snickers', 'King Charles');
console.log(snickers);

/**
 * User Module
 */

const barry = new User('Barry Blando', 'barryblandos@gmail.com', 'barryblando.com');
const profile = createURL(barry.name);
const image = gravatar(barry.email);
console.log(barry);
console.log(profile);
console.log(image);

// .then will only run when the promise/data successfully comes back and then function will give us the data

rejectedPromise()
  .then(() => {
    console.log('I made it!');
  })
  .catch((err) => {
    console.log('How dare you?');
    console.log(err);
  });

getPostById(2)
  .then((post) => { // once the post(pst) come back in this first one right here we're gonna call hydrateAuthor and pass it the post
    console.log(post);
    return hydrateAuthor(post); // this function is going to return a Promise itself
  })
  .then((post) => { // receive the hydrated post from hydrateAuthor
    console.log(post);
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * Movie Collection Module
 */

const movies = new MovieCollection(
  'Barry\'s Fav Movies',
  { name: 'Star Wars', stars: 10 },
  { name: 'Star Trek', stars: 9 },
  { name: 'Stranger Things', stars: 8 },
  { name: 'IT', stars: 8 }
);

/* eslint-disable */
for (const movie of movies) {
  console.log(movie);
}

/* eslint-enable */

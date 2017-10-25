/**
 * /<reference https://mdn-mixmix.hashbase.io/en-US/docs/Web/JavaScript/Reference/Statements/import.html
 * when apiKey is named Export you gotta use curly braces in import, while default export doesn't have curly braces
 * you can rename it too using 'as'
 */
import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './modules/config';
import User, { createURL, gravatar } from './modules/user';

// get unique number using lodash uniq
// console.log(uniq(ages));

const barry = new User('Barry Blando', 'barryblandos@gmail.com', 'barryblando.com');
const profile = createURL(barry.name);
const image = gravatar(barry.email);
console.log(barry);
console.log(profile);
console.log(image);


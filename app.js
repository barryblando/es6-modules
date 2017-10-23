/**
 * /<reference https://mdn-mixmix.hashbase.io/en-US/docs/Web/JavaScript/Reference/Statements/import.html
 * when apiKey is named Export you gotta use curly braces in import, while default export doesn't have curly braces
 * you can rename it too using 'as'
 */
import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog } from './src/config';

console.log(key, url, old, dog);
sayHi('Bar');

const ages = [1, 1, 4, 52, 12, 4];
// get unique number using lodash uniq
console.log(uniq(ages));

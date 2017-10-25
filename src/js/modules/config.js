/**
 * </reference https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 * in order to make this apiKey available outside of this module we need to export it
 * Two types of exporting:
 * Default Export - allow you to export it as the default, when you import you can import it with different name. Every Module can only have one default export.
 * Named Export - when you export it you export it as that variable name, when someone imports it they  must know the name of the thing
 * that they are importing, Name export is used for methods and variables, something you need to pluck off. Named Export can have multiple export
 * you can rename it too using 'as'
 */

// Named Export
export const apiKey = 'abc123';
export const url = 'http://abec.com';

// default export
// export default apiKey;

// exporting function
export function sayHi(name) {
  console.log(`Hello there, ${name}`);
}

// exporting multiple variable
const age = 100;
const dog = 'snickers';

export { age as old, dog };


/**
 * Proxy allows overwrite default behavior of an operation or existing properties in an object
 * </reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
 * Proxy takes two things, target which an object would you like to proxy and handler where you specify all of the operations which you wish to rewrite
 * when you overwrite default operations or each thing inside the handle those things are called 'traps', what it does is it sits between you and the object.
 */

const person = { name: 'Barry', age: 100 };
const personProxy = new Proxy(person, {
  // What if you don't someone to change the value of person.name property, you could trap that from happening
  // target is the object and name is a key in an object
  get(target, name) {
    console.log('Someone is asking for', target, name);
    return target[name].toUpperCase();
  },
  // store value for new key:value pair
  set(target, name, value) {
    if (typeof value === 'string') {
      target[name] = value.trim();
    }
  }
});

console.log(personProxy.name);

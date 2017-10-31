import Animal from './animal';

export default class Dog extends Animal {
  constructor(name, breed) {
    super(name); // call Animal
    this.breed = breed;
  }

  bark() {
    console.log(`Bark Bark I'm a dog ${this.name}`);
  }
}

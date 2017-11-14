// Extending Class w/ Array
export default class MovieCollection extends Array {
  // we're gonna use rest to get the array
  constructor(name, ...items) {
    /**
     * super in a class is like calling "new className()", we're gonna use spread in our super 'cause we don't want an array in an array
     * we want to put each item in array
     */
    super(...items);
    this.name = name;
  }

  add(movie) {
    this.push(movie);
  }

  topRated(limit = 10) {
    return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit);
  }
}

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

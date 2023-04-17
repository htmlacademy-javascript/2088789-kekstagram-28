import { getData } from './fetch.js';
import { modifiedPhotoList } from './photo-render.js';

// Массив постов
let posts = [];

getData().then((response) => {
  modifiedPhotoList(response);
  posts = response;
});

export { posts };

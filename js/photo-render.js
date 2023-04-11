import { onBigPictureOpen } from './big-picture.js';
// Создаем функцию создания поста
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const photoContainer = document.querySelector('.pictures');

const createPostElement = (post) => {
  const newPhotoElement = templatePicture.cloneNode(true);
  // Обращаемся к элементам DOM
  newPhotoElement.querySelector('.picture__img').src = post.url;
  newPhotoElement.querySelector('.picture__comments').textContent = post.comments.length;
  newPhotoElement.querySelector('.picture__likes').textContent = post.likes;
  // Клик на фото
  newPhotoElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    onBigPictureOpen(post);
  });
  // Функция возвращает новый элемент
  return newPhotoElement;
};
// Создание фрагмента который будет содержать все элементы DOM
const modifiedPhotoList = (posts) => {
  const fragmentPicture = document.createDocumentFragment();
  posts.forEach((post) => {
    fragmentPicture.appendChild(createPostElement(post));
  });
  // Создаем переменную общего контейнера
  photoContainer.appendChild(fragmentPicture);
};

export { modifiedPhotoList };

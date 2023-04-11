import { createComments } from './data.js';

const bigPicture = document.querySelector('.big-picture');
// const pageBody = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');
const comments = bigPicture.querySelector('.social__comments');

const onBigPictureOpen = (post) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = post.url;
};
//Функция закрытия попапа
const closePopup = () => {
  bigPicture.classList.add('hidden');
};
// Close for esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
});
// Закрытие по кнопке
cancelButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closePopup();
});
// Создаем фуннкцию генерации коммента
const createComment = (comment) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  // Создаем картинку с параметрами
  const newImage = document.createElement('img');
  newImage.classList.add('social__picture');
  newImage.src = comment.avatar;
  newImage.alt = comment.name;
  newImage.width = 35;
  newImage.height = 35;
  // eslint-disable-next-line no-console
  console.log(newImage);
  // Добавляем изображение в li
  newComment.appendChild(newImage);
  // добавляем текст
  const textComment = document.createElement('p');
  textComment.classList.add('social__text');
  textComment.textContent = comment.message;
  // Вставляем текст
  newComment.appendChild(textComment);

  return newComment;
};

// Добавляем текст и прячем элементы
const bigPictureInfo = (photo) => {
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  // Удаляем первый коммент
  while (comments.firstChild) {
    comments.removeChild(comments.firstChild);
  }

  photo.comments.forEach((element) => {
    comments.appendChild(createComments(element));
  });
};
// Генерация поста по длинне массива
const generatedPosts = () => Array.from({ length: createComment }, createComment);

export { bigPictureInfo };
export { onBigPictureOpen };
export { createComment };
export { generatedPosts };

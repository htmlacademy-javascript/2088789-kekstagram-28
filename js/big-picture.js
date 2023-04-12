/* eslint-disable no-console */


const bigPicture = document.querySelector('.big-picture');
const cancelButton = document.querySelector('.big-picture__cancel');
// Общий контейнер
const commentsList = bigPicture.querySelector('.social__comments');
// li комментария
const commentElement = commentsList.querySelector('.social__comment');
// Открытие поста
const onBigPictureOpen = (post) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = post.url;
  // Скрываем комменты
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
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
const createCommentElement = (comment) => {
  const newCommentElement = commentElement.cloneNode(true);
  // Обращение к дом элементам
  newCommentElement.querySelector('.social__picture').src = comment.avatar;
  newCommentElement.querySelector('.social__picture').alt = comment.name;
  newCommentElement.querySelector('.social__picture').width = 35;
  newCommentElement.querySelector('.social__picture').height = 35;
  newCommentElement.querySelector('.social__text').textContent = comment.message;

  return newCommentElement;
};
// Создание фрагмента
const modifiedCommentList = (comments) => {
  const fragmentComment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragmentComment.appendChild(createCommentElement(comment));
  });
  // Создаем переменную общего контейнера
  commentsList.appendChild(fragmentComment);
};

export { onBigPictureOpen };
export { modifiedCommentList };

const bigPicture = document.querySelector('.big-picture');
const pageBody = document.querySelector('body');
// Событие добавления класса по кнопке
bigPicture.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (bigPicture.classList.contain('hidden')) {
    bigPicture.classList.remove('hidden');
  } else {
    // Добавляем body класс
    pageBody.classList.add('modal-open');
  }
});
// Закрытие попапа
const closePopup = () => {
  bigPicture.classList.add('hidden');
  pageBody.classList.remove('modal-open');
};

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
});
// Создаем фуннкцию генерации коммента
const createComment = (count) => {
  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  // Создаем картинку с параметрами
  const newImage = document.createElement('img');
  newImage.classList.add('social__picture');
  newImage.src = count.avatar;
  newImage.alt = count.name;
  newImage.width = 35;
  newImage.height = 35;
  // Добавляем изображение в li
  newComment.appendChild(newImage);
  // добавляем текст
  const textComment = document.createElement('p');
  textComment.classList.add('social__text');
  // Вставляем текст
  newComment.appendChild(textComment);
};
createComment();
// Добавляем текст и прячем элементы
const bigPictureInfo = (photo) => {
  bigPicture.document.querySelector('social__caption').textContent = photo.description;
  bigPicture.document.querySelector('social__comment-count').classList.add('hidden');
  bigPicture.document.querySelector('comments-loader').classList.add('hidden');
};
bigPictureInfo();


import { onBigPictureOpen } from './big-picture.js';
import { posts } from './data.js';
import { resetEffects } from './add-image.js';
// выбираем все ссылки
const pictureElements = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
// Кнопка закрытия
const cancelButton = document.querySelector('.big-picture__cancel');
// Приводим к массиву
const picture = Array.from(pictureElements);
// Открытие попапа
const openPopup = (evt) => {
  // Возвращаем ближайший родительский элемент
  const miniPhoto = evt.target.closest('.picture');
  // Если не найдено
  if (!miniPhoto) {
    return;
  }
  // Индексируем фотографии
  const pictureIndex = picture.indexOf(miniPhoto);
  // Если индекс > 0 - значение приходит в массив постов
  if (pictureIndex >= 0) {
    onBigPictureOpen(posts[pictureIndex]);
  }
};
// Событие открытия
document.querySelector('.pictures').addEventListener('click', openPopup);
//Функция закрытия попапа
const closePopup = () => {
  bigPicture.classList.add('hidden');
  resetEffects();
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

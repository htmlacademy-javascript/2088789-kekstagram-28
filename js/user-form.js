import { resetEffects } from './add-image.js';
import { sendData } from './fetch.js';
import { showError, showSuccess } from './message.js';

const body = document.querySelector('body');
// Форма с фильтрами
const form = document.querySelector('.img-filters__form');
// Загрузка изображения
const imageUpload = body.querySelector('.img-upload__overlay');
// Поле хэщтега
const hashtagField = document.querySelector('.text__hashtags');
// Поле коммента
const commentField = document.querySelector('.text__description');
// Текст ошибки
const ERROR_TEXT = 'Неправильно заполнены хештеги';
// Кнопка отправки
const uploadButton = document.querySelector('#upload-submit');
// Регулярное выражение валидного хэштега
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
// Максимальное значение
const MAX_HASHTAG_COUNT = 5;
// Проверка длинны тега
const hashtagValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;
// Проверка на валидность
const isValidTag = (tag) => VALID_HASHTAG.test(tag);
// Оверлей загрузки
const imgUpload = body.querySelector('.img-upload__overlay');
// Превью изображения
const imgUploadPreview = body.querySelector('.img-upload__preview img');
// Сама валидация
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});
// В фокусе ли текстовое поле
const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;
// Закрытие попапа
const closeDownloadPopup = () => {
  form.reset();
  pristine.reset();
  imageUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  resetEffects();
};
// Закрытие по esc
const closeByEsc = (evt) => {
  if (evt.key === 'Escape' && !isTextFieldFocused()) {
    evt.preventDefault();
    closeDownloadPopup();
    document.removeEventListener('keydown', closeByEsc);
  }
};
// Добавление закрытия по клику
document.querySelector('#upload-cancel').addEventListener('click', closeDownloadPopup);
// Открытие попапа
const openDownloadPopup = (evt) => {
  imgUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', closeByEsc);
  // Чтение файлов
  const reader = new FileReader();
  // Загрузка изображения
  reader.readAsDataURL(evt.target.files[0]);
  reader.addEventListener('load', () => {
    imgUploadPreview.src = reader.result;
  });
};
// Обработчик на изменение
document.querySelector('#upload-file').addEventListener('change', openDownloadPopup);
// проверка уникальности хэштега
const uniqueTags = (tags) => {
  // Приведение к лоуэркйсу
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());

  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};
// Валидация пользовательского хэштега
const validateTags = (value) => {
  const tags = value
    // Избавляемся от пробелов
    .trim()
    // Разбиваем строки на подсткору с помощью разделителя (пробела) и возвращаем новый массив
    .split(' ')
    // фильтрация и создание новых элементов масива без пробелов и длинной больше нуля
    .filter((tag) => tag.trim().length);
  // Проверка на соблюдение всех условий, т.е. валидность, уникальность у каждого тега
  return hashtagValidCount(tags) && uniqueTags(tags) && tags.every(isValidTag);
};
// // Валидация формы по клику
// uploadButton.addEventListener('click', (evt) => {
//   // Проверяем валидность хэштега
//   // Поле
//   const value = hashtagField.value;
//   // Валиден ли
//   const isValid = validateTags(value);
//   // Если хэштег невалиден, отменяем отправку формы
//   if (!isValid) {
//     evt.preventDefault();
//     pristine.addError(hashtagField, ERROR_TEXT);
//   }
//   // Если строка пустая
//   if (!isValid || value.trim() === '') {
//     evt.preventDefault();
//     pristine.addError(hashtagField, ERROR_TEXT);
//   }

// return isValid;
// });
// Действия с отправленной формой
const onFormSubmit = (evt) => {
  evt.preventDefault();
  sendData(new FormData(form))
    .then(() => {
      closeDownloadPopup();
      showSuccess();
    })
    .catch(() => {
      showError();
    });
};
form.addEventListener('submit', onFormSubmit);
// Создаем валидатор
pristine.addValidator(
  hashtagField,
  validateTags,
  ERROR_TEXT,
);
// Проверка поля
hashtagField.addEventListener('input', () => {
  if (pristine.validate()) {
    uploadButton.removeAttribute('disabled');
  } else {
    uploadButton.setAttribute('disabled', 'disabled');
  }
});

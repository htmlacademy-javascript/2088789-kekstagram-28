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
// Регулярное выражение валидного хэштега
const VALID_HASHTAG = /^#[a-zа-яё0-9]{1,19}$/i;
// Максимальное значение
const MAX_HASHTAG_COUNT = 5;
// Проверка длинны тега
const hashtagValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;
// Проверка на валидность
const isValidTag = (tag) => VALID_HASHTAG.test(tag);
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
const openDownloadPopup = () => {
  imageUpload.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', closeByEsc);
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
// Валидация формы
pristine.addValidator(
  hashtagField,
  validateTags,
  ERROR_TEXT,
);
// eslint-disable-next-line no-console


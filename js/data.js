import { getRandomNumber } from './util.js';
import { getRandomArrayElement } from './util.js';

const PHOTO_DESC = [
  'На фотографии изображены красоты чего бы то ни было',
  'Моя любимая фотография',
  'Здесь был Кекс',
];

const USER_NAME = [
  'Костя',
  'Коля',
  'Игорь',
  'Даня',
];

const USER_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENTS_COUNT = 25;

// Создание массива фото URL
// const photoUrlgenerator = (i) => i + 1;
// const photoUrlArray = Array.from({ length: 25 }, (_, i) => photoUrlgenerator(i));

// Создание массива Id фото профиля
// const avatarIdGenerator = (i) => i + 1;
// avatarIdGenerator();
// const avatarID = Array.from({ length: 6 }, (_, i) => photoUrlgenerator(i));

// Функция генерации комментария
const createComment = (index) => ({
  commentId: index + 1,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: getRandomArrayElement(USER_COMMENTS),
  name: getRandomArrayElement(USER_NAME),
});
// Созданиен массива комментариев
const createComments = () => Array.from({ length: getRandomNumber(1, 10) }, (_, key) =>
  createComment(key));
// Функция генерации фото инфо
const createPhotoInfo = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(PHOTO_DESC),
  likes: getRandomNumber(15, 200),
  comments: createComments(),
});

const createPhotoInform = () => Array.from({ length: COMMENTS_COUNT }, (_, key) => createPhotoInfo(key));

export { createPhotoInform };
export { createComment };
export { createComments };



import { getRandomNumber } from './util';
import { getRandomArrayElement } from './util';

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
// Создание массива фото URL
const photoUrlgenerator = (i) => i + 1;
const photoUrlArray = Array.from({ length: 25 }, (_, i) => photoUrlgenerator(i));

// Создание массива Id фото профиля
const avatarIdGenerator = (i) => i + 1;
avatarIdGenerator();
const avatarID = Array.from({ length: 6 }, (_, i) => photoUrlgenerator(i));

// Функция генерации комментария
const createComment = () => {
  const gerRandomUserName = getRandomNumber(0, USER_NAME.length - 1);
  const getRandomUserComment = getRandomNumber(0, USER_COMMENTS.length - 1);
  return {
    commentId: getRandomArrayElement(avatarID),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: USER_COMMENTS[getRandomUserComment],
    name: USER_NAME[gerRandomUserName],
  };
};
// Функция генерации фото инфо
const createPhotoInfo = () => {
  const getRandomPhotoDesc = getRandomNumber(0, PHOTO_DESC.length - 1);
  return {
    id: getRandomNumber(1, 25),
    url: getRandomArrayElement(photoUrlArray),
    description: PHOTO_DESC[getRandomPhotoDesc],
    likes: getRandomNumber(15, 200),
    comments: createComment(),
  };
};
createPhotoInfo();

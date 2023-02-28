const photoDesc = [
  'На фотографии изображены красоты чего бы то ни было',
  'Моя любимая фотография',
  'Здесь был Кекс',
];

const userName = [
  'Костя',
  'Коля',
  'Игорь',
  'Даня',
];

const userComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// Функция нахождения рандомного числа
const getRandomNumber = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция генерации Photo ID
const photoIdGenerator = (id) => ({
  id: id + 1
});

const generatedPhotoId = Array.from({ length: 26 }, (_, id) => photoIdGenerator(id));
// Функция генерации UID
const UidGenerator = (id) => ({
  id: id + 1
});

const generatedUid = Array.from({ length: 26 }, (_, id) => UidGenerator(id));

// Функция генерации URL к фото
const photoUrlGenenerator = (i) => ({
  i: i + 1
});

const generatedPhotoUrl = Array.from({ length: 26 }, (_, i) => photoUrlGenenerator(i));

// Функция генерации аватаров пользователя
const avatarUrlGenenerator = (i) => ({
  i: i + 1
});

const generatedAvatarUrl = Array.from({ length: 7 }, (_, i) => avatarUrlGenenerator(i));

// Функция генерации лайков
const likesGenenerator = (i) => ({
  i: i + 15
});

const generatedLikes = Array.from({ length: 186 }, (_, i) => likesGenenerator(i));

// Функция генерации фото инфо
const createPhotoInfo = () => {
  const getRandomPhotoId = getRandomNumber(0, generatedPhotoId.length - 1);
  const getRandomPhotoUrl = getRandomNumber(0, generatedPhotoUrl.length - 1);
  const getRandomPhotoDesc = getRandomNumber(0, photoDesc.length - 1);
  const getRandomLikes = getRandomNumber(0, generatedLikes.legth - 1);

  return {
    id: generatedPhotoId[getRandomPhotoId],
    url: generatedPhotoUrl[getRandomPhotoUrl],
    description: photoDesc[getRandomPhotoDesc],
    likes: generatedLikes[getRandomLikes],
  }
};
createPhotoInfo();
// Функция генерации комментов
const createComment = () => {
  const getRandomUid = getRandomNumber(0, generatedUid.length - 1);
  const getRandomAvatar = getRandomNumber(0, generatedAvatarUrl.length - 1);
  const gerRandomUserName = getRandomNumber(0, userName.length - 1);
  const getRandomUserComment = getRandomNumber(0, userComments.length - 1);

  return {
    id: generatedUid[getRandomUid],
    avatar: `img/avatar-${getRandomAvatar}.svg`,
    message: userComments[getRandomUserComment],
    name: userName[gerRandomUserName],
  };
};
createComment();

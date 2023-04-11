// Создаем функцию создания поста
const templatePicture = document.querySelector('#picture').content;

const createPostElement = (post) => {
  const newPhotoElement = templatePicture.cloneNode(true);
  // eslint-disable-next-line no-console
  console.log(createPostElement());
  // Обращаемся к элементам DOM
  newPhotoElement.querySelector('.picture__img').src = post.url;
  newPhotoElement.querySelector('.picture__comments').textContent = post.comments.length;
  newPhotoElement.querySelector('.picture__likes').textContent = post.likes;
  // Функция возвращает новый элемент
  return newPhotoElement;
};
// Создание фрагмента который будет содержать все элементы DOM
export const modifiedPhotoList = (posts) => {
  const fragmentPicture = document.createDocumentFragment();
  posts.forEach((post) => {
    fragmentPicture.appendChild(createPostElement(post));
  });
  // Создаем переменную общего контейнера
  const photoContainer = document.querySelector('.pictures');
  photoContainer.appendChild(fragmentPicture);
};

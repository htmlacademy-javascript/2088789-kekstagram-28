// Создаем функцию создания поста
const createPostElement = (post) => {
  const templatePicture = document.querySelector('#picture').content;
  const newPhotoElement = templatePicture.cloneNode(true);
  // Обращаемся к элементам DOM
  newPhotoElement.querySelector('.picture__img').src = post.url;
  newPhotoElement.textContent = post.comments.length;
  newPhotoElement.textContent = post.likes;
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

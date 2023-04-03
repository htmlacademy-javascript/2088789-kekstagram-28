// Создаем функцию создания поста
const createPostElement = (post) => {
  const templatePicture = document.getElementById('picture').content;
  const NewPhotoElement = templatePicture.cloneNode(true);
  // Обращаемся к элементам DOM
  NewPhotoElement.querySelector('NewPhotoElement').url = post.url;
  NewPhotoElement.querySelector('NewPhotoElement').textContent = post.comments.length;
  NewPhotoElement.querySelector('NewPhotoElement').textContent = post.likes;
  // Функция возвращает новый элемент
  return NewPhotoElement;
};
// Создание фрагмента который будет содержать все элементы DOM
export const modifiedPhotoList = (posts) => {
  const fragmentPicture = document.createDocumentFragment();
  posts.array.forEach((post) => {
    fragmentPicture.appendChild(createPostElement(post));
  });
  // Создаем переменную общего контейнера
  const photoContainer = document.getElementById('picture');
  photoContainer.appendChild(fragmentPicture);
};

const bigPicture = document.querySelector('.big-picture');
// Общий контейнер
const commentList = bigPicture.querySelector('.social__comments');
// li комментария
const commentElement = commentList.querySelector('.social__comment');
// Колличество комментариев
const COMMENTS_TO_SHOW = 5;
// Счетчик комментов
const commentCountElement = bigPicture.querySelector('.social__comment-count');

// Создаем фуннкцию генерации коммента
const createCommentElement = (comment) => {
  const newCommentElement = commentElement.cloneNode(true);
  // Обращение к дом элементам
  newCommentElement.querySelector('.social__picture').src = comment.avatar;
  newCommentElement.querySelector('.social__picture').alt = comment.name;
  newCommentElement.querySelector('.social__picture').width = 35;
  newCommentElement.querySelector('.social__picture').height = 35;
  newCommentElement.querySelector('.social__text').textContent = comment.message;

  return newCommentElement;
};
// Скрытие комментариев
const hideComments = () => {
  const commentElements = commentList.querySelectorAll('.social__comment');
  commentElements.forEach((currentCommentElement, index) => {
    if (index >= COMMENTS_TO_SHOW) {
      currentCommentElement.classList.add('hidden');
    }
  });
  const postCommentCount = commentElements.length;
  commentCountElement.innerHTML = `${COMMENTS_TO_SHOW} из <span class="comments-count">${postCommentCount}</span> комментариев`;
};
// Создание фрагмента
const modifiedCommentList = (comments) => {
  const fragmentComment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragmentComment.appendChild(createCommentElement(comment));
  });
  // Добавляем комментарий
  commentList.appendChild(fragmentComment);
  hideComments();
};
// Открытие поста
const onBigPictureOpen = (post) => {
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = post.url;
  bigPicture.querySelector('.likes-count').textContent = post.likes;
  bigPicture.querySelector('.social__caption').textContent = post.description;
  // Добавляем показ комментариев 5 шт
  const postCommentCount = post.comments.length;
  const commentsToShowCount = Math.min(COMMENTS_TO_SHOW, postCommentCount);

  commentCountElement.innerHTML = `${commentsToShowCount} из <span class="comments-count"> ${postCommentCount}</span> комментариев`;

  modifiedCommentList(post.comments);
};
// Показываем кнопку и колличество фото
const socialCommentsCount = document.querySelector('.social__comment-count');
socialCommentsCount.classList.remove('hidden');
const commentsLoad = document.querySelector('.comments-loader');
commentsLoad.classList.remove('hidden');
// Показываем комментарии по 5 шт
commentsLoad.addEventListener('click', () => {
  const hiddenCommentElements = commentList.querySelectorAll('.social__comment.hidden');
  for (let i = 0; i < COMMENTS_TO_SHOW && i < hiddenCommentElements.length; i++) {
    hiddenCommentElements[i].classList.remove('hidden');
  }
  const visibleCommentCount = commentList.querySelectorAll('.social__comment:not(.hidden)').length;
  commentCountElement.innerHTML = `${visibleCommentCount} из <span class="comments-count">${commentList.children.length}</span> комментариев`;
});

export { onBigPictureOpen };
export { modifiedCommentList };

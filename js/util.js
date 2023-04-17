const ALERT_SHOW_TIME = 5000;

// Функция рандомизации в массиве
function getRandomNumber(a, b) {
  const randomDigit = a + Math.random() * (b + 1 - a);
  return Math.floor(randomDigit);
}

// Поиск рандомного элемента массива
function getRandomArrayElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomValue = arr[randomIndex];
  return randomValue;
}

// Аллерт
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = 0;
  alertContainer.style.left = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'pink';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getRandomArrayElement };
export { getRandomNumber };
export { showAlert };

// Функция рандомизации в массиве
function getRandomNumber(a, b) {
  const randomDigit = a + Math.random() * (b + 1 - a);
  return Math.floor(randomDigit);
}
export { getRandomNumber };

// Поиск рандомного элемента массива
function getRandomArrayElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const randomValue = arr[randomIndex];
  return randomValue;
}
export { getRandomArrayElement };

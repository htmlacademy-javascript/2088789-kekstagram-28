// Функция для проверки длинны строки
const currentString = 'Какой-то текст';
const minLenght = 10;
function stringMath() {
  return currentString.length >= minLenght;
}
stringMath();
// Проверка
// if (stringMath(currentString, minLenght)) {
//   console.log('Строка проходит по длинне');
// } else {
//   console.log('Строка не проходит по длинне');
//  }

// Проверка на полиндром
function isPalindrome(activeString) {
  activeString = activeString.toLowerCase().replace(/\s/g, '');
  // Проверка, является ли перевернутая строка равной исходной
  return activeString === activeString.split('').reverse().join('');
}
isPalindrome();
// Проверка
// console.log(isPalindrome('Im a text in this test'));

// Возвращение целых чисел в строку
function extractDigits(string) {
  const digits = string.match(/\d/g);
  const results = parseInt(digits.join(''), 10);
  if (digits === null) {
    // console.log(NaN);
    return NaN;
  }
  // console.log(results);
  return results;
}
extractDigits();
// Проверка
// console.log(extractDigits('text1p2p1w1'));

// Функция формирования адресов
function adresStart(string, targetLength, adresString) {
  const repeatCount = Math.ceil((targetLength - string.length) / adresString.length);
  const padding = adresString.repeat(repeatCount).substring(0, targetLength - string.length);
  if (string.length >= targetLength) {
    return string;
  }
  return padding + string;
}
adresStart();
// Проверка
// console.log(adresStart('hellowrld', 10, 'abc'));

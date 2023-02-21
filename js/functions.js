// Функция для проверки длинны строки
function stringMath(currentString, minLength) {
  return currentString.length >= minLength;
}
stringMath('Какой-то текст', 10);
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
isPalindrome('someword');
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
extractDigits('text1p2p1w1');
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
adresStart('hellowrld', 10, 'abc');
// Проверка
// console.log(adresStart('hellowrld', 10, 'abc'));

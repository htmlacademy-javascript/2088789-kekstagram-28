import { showAlert } from './util.js';

const SERVER_URL = 'https://28.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};


const load = (route, errorText = '', method = Method.GET, body = null) =>
  fetch(`${SERVER_URL}${route}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    })
    .catch(() => {
      if (errorText) {
        showAlert(errorText);
      }
      throw new Error(errorText);
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);
const sendData = (body) => load(Route.SEND_DATA, '', Method.POST, body);
export { getData, sendData };
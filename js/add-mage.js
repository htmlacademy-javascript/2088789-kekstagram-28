// спосок фильтров
const FILTERS = [{
  name: 'chrome',
  min: 0,
  max: 1,
  current: 1,
  step: 0.1,
  filter: (value) => `grayscale(${value})`,
},
{
  name: 'sepia',
  min: 0,
  max: 1,
  current: 1,
  step: 0.1,
  filter: (value) => `sepia(${value})`,
},
{
  name: 'marvin',
  min: 0,
  max: 100,
  current: 100,
  step: 1,
  filter: (value) => `invert(${value}%)`,
},
{
  name: 'phobos',
  min: 0,
  max: 3,
  current: 3,
  step: 0.1,
  filter: (value) => `blur(${value}px)`,
},
{
  name: 'heat',
  min: 0,
  max: 3,
  current: 3,
  step: 0.1,
  filter: (value) => `brightness(${value})`,
}];
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const imgEffectLevel = document.querySelector('.img-upload__effect-level');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const effects = document.querySelector('.effects');
// Выбранный эффект
const ACTIVE_EFFECT = FILTERS[0];
// eslint-disable-next-line prefer-const
let chosenEffect = ACTIVE_EFFECT;
//
const isDefault = () => chosenEffect === ACTIVE_EFFECT;
//
// показываем слайдер
const showSlider = () => {
  imgEffectLevel.classList.remove('hidden');
};
// Скрываем
const hideSlider = () => {
  imgEffectLevel.classList.add('hidden');
};
// Обновление слайдера
const updateSlider = () => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });
  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};
// Обновление превью с изменением эффекта
const onChangeEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = chosenEffect = FILTERS.find((effect) => effect.name === evt.target.getAttribute('value'));
  // imgUploadPreview.className = `effects__preview--${chosenEffect.name}`;
  imgUploadPreview.classList.replace(imgUploadPreview.classList.item(1), `effects__preview--${chosenEffect.name}`);
  updateSlider();
};
// Обновление стиля
const onSliderUpdate = () => {
  const sliderValue = effectLevelSlider.noUiSlider.get();
  if (isDefault()) {
    imgUploadPreview.style.filter = ACTIVE_EFFECT.style;
  } else {
    imgUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }
  effectLevelValue.value = sliderValue;
};
// Изменение эффекта
// const changeEffects = () => {
//   chosenEffect = ACTIVE_EFFECT;
//   updateSlider();
// };

noUiSlider.create(effectLevelSlider, {
  // range: {
  //   min: ACTIVE_EFFECT.min,
  //   max: ACTIVE_EFFECT.max,
  // },
  // start: ACTIVE_EFFECT.max,
  // step: ACTIVE_EFFECT.step,
  // connect: 'lower',
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

hideSlider();
// Лист. на изменение
effects.addEventListener('change', onChangeEffect);
// На обновление
effectLevelSlider.noUiSlider.on('update', onSliderUpdate);

export { onChangeEffect };

const effects = [
  {
    name: 'none',
    style: 'none',
    range: [0, 100],
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    range: [0, 1],
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    range: [0, 1],
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    range: [0, 100],
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    range: [0, 3],
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    range: [1, 3],
    step: 0.1,
    unit: '',
  }
];

const STANDARD_EFFECT = effects[0];
const body = document.querySelector('body');
const effectsElement = body.querySelector('.effects');
const effectLevelSlider = body.querySelector('.effect-level__slider');
const effectLevelValue = body.querySelector('.effect-level__value');
const imageUploadEffectLevel = body.querySelector('.img-upload__effect-level');
const imgUploadPreview = body.querySelector('.img-upload__preview img');

let chosenEffect = STANDARD_EFFECT;

const isDefault = () => chosenEffect === STANDARD_EFFECT;

const showSlider = () => {
  imageUploadEffectLevel.classList.remove('hidden');
};

const hideSlider = () => {
  imageUploadEffectLevel.classList.add('hidden');
};

const updateSlider = () => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.range[0],
      max: chosenEffect.range[1],
    },
    start: chosenEffect.range[1],
    step: chosenEffect.step,
  });
  if (isDefault()) {
    hideSlider();
  } else {
    showSlider();
  }
};

const onChangeEffect = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = effects.find((effect) => effect.name === evt.target.value);
  imgUploadPreview.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () => {
  const sliderValue = effectLevelSlider.noUiSlider.get();
  if (isDefault()) {
    imgUploadPreview.style.filter = STANDARD_EFFECT.style;
  } else {
    imgUploadPreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  }
  effectLevelValue.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = STANDARD_EFFECT;
  updateSlider();
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: STANDARD_EFFECT.range[0],
    max: STANDARD_EFFECT.range[1],
  },
  start: STANDARD_EFFECT.range[1],
  step: STANDARD_EFFECT.step,
  connect: 'lower',
});

hideSlider();

effectsElement.addEventListener('change', onChangeEffect);
effectLevelSlider.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };

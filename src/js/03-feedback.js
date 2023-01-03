import throttle from 'lodash.throttle';
import localStorageService from './localStorage.js';
const { setInLocalStorage, getFromLocalStorage, removeFromLocalStorage } = localStorageService;

const feedbackFormEl = document.querySelector('.feedback-form');
const userInfoFeedback = {};

const fillFeedbackFormFields = () => {
  const feedbackInfoFromLS = getFromLocalStorage('userFeedback');

  if (feedbackInfoFromLS === undefined) {
    return;
  }

  for (const prop in feedbackInfoFromLS) {
    feedbackFormEl.elements[prop].value = feedbackInfoFromLS[prop];
  }
};

fillFeedbackFormFields();

const onContactFormFieldChange = e => {
  const { target } = e;

  const fieldValue = target.value;
  const fieldName = target.name;

  userInfoFeedback[fieldName] = fieldValue;

  setInLocalStorage('userFeedback', userInfoFeedback);
};

const onContactFormSubmit = e => {
  e.preventDefault();

  console.log(userInfoFeedback);

  feedbackFormEl.reset();

  removeFromLocalStorage('userFeedback');

};

feedbackFormEl.addEventListener('input', throttle(onContactFormFieldChange, 500));
feedbackFormEl.addEventListener('submit', onContactFormSubmit);


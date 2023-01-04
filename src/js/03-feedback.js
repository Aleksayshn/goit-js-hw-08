import throttle from 'lodash.throttle';
import localStorageService from './localStorage.js';
const { setInLocalStorage, getFromLocalStorage, removeFromLocalStorage } = localStorageService;

const feedbackFormEl = document.querySelector('.feedback-form');
feedbackFormEl.addEventListener('input', throttle(onFormFieldChange, 500));
feedbackFormEl.addEventListener('submit', onContactFormSubmit);

let userFeedback = getFromLocalStorage('userFeedback') || {};

function onFormFieldChange(e) {
  const { target } = e;

  const userWriteValue = target.value;
  userFeedback[target.name] = userWriteValue;

  setInLocalStorage('userFeedback', userFeedback);
};

fillFeedbackFormFields();

function fillFeedbackFormFields() {

  const feedbackFromLS = getFromLocalStorage('userFeedback');

  for (const prop in feedbackFromLS) {
    feedbackFormEl.elements[prop].value = feedbackFromLS[prop];
  }
};

function onContactFormSubmit(e) {
  const {
    elements: {
      email,
      message,
    }
  } = e.target;
  removeFromLocalStorage('userFeedback');

  e.preventDefault();

  if (email.value === "" || message.value === "") {
    alert('All values must be filled')
    return
  }
  console.log(userFeedback);
  feedbackFormEl.reset();
  userFeedback = {};
};




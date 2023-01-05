import throttle from 'lodash.throttle';
import localStorageService from './localStorage.js';
const { setInLocalStorage, getFromLocalStorage, removeFromLocalStorage } = localStorageService;

const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('input', throttle(onFormChange, 500));
formEl.addEventListener('submit', onContactFormSubmit);

const STORAGE_KEY = 'feedback';

let formData = getFromLocalStorage(STORAGE_KEY) || {};

function onFormChange(e) {
  const { target } = e;

  const userWriteValue = target.value;
  formData[target.name] = userWriteValue;

  setInLocalStorage(STORAGE_KEY, formData);
};

fillFieldForm();

function fillFieldForm() {

  const feedbackFromLS = getFromLocalStorage(STORAGE_KEY);

  for (const prop in feedbackFromLS) {
    formEl.elements[prop].value = feedbackFromLS[prop];
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
  console.log(formData);
  formEl.reset();
  formData = {};
};




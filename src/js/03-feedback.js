import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formFileds = form.elements;
const btn = form.querySelector('[type="submit"]');

const userValue = {
  email: '',
  comment: '',
};

form.addEventListener('input', throttle(handlerInput, 500));
function handlerInput() {
  const { email, message } = formFileds;

  userValue.email = email.value;
  userValue.comment = message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(userValue));
}

updateValue();

btn.addEventListener('click', throttle(handlerBtn, 500));
function handlerBtn(event) {
  event.preventDefault();

  if (localStorage.getItem('feedback-form-state')) {
    userValue.email = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).email;
    userValue.comment = JSON.parse(
      localStorage.getItem('feedback-form-state')
    ).comment;
  }

  console.log(userValue);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  formFileds.message.textContent = '';
}

function updateValue() {
  if (localStorage.getItem('feedback-form-state')) {
    const storageValue = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    formFileds.message.textContent = storageValue.comment;
    formFileds.email.value = storageValue.email;
  }
}

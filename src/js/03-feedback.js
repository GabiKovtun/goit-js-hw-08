import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const feedbackKey = 'feedback-form-state';
const submitButton = form.querySelector('button[type="submit"]');

const sendFeedback = e => {
  e.preventDefault();
  const inputEl = {
    emailInput: emailInput.value,
    messageInput: messageInput.value,
  };
  localStorage.setItem(feedbackKey, JSON.stringify(inputEl));
  emailInput.value = '';
  messageInput.value = '';
};
const savedMessages = localStorage.getItem(feedbackKey);
console.log(savedMessages);

form.addEventListener('submit', throttle(sendFeedback, 500));



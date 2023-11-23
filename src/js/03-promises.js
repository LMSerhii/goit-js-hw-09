import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formElement = document.querySelector('.form');

formElement.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const data = new FormData(formElement);

  const dataValue = {
    delay: Number(data.get('delay')),
    step: Number(data.get('step')),
    amount: Number(data.get('amount')),
  };

  startPromise(dataValue);

  formElement.reset();
}

function startPromise({ delay, step, amount }) {
  for (i = 1; i <= amount; i++) {
    createPromise(i, delay + (i - 1) * step)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

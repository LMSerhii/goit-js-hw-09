const form = document.querySelector('.form');

const refs = {
  delay: form.elements.delay.value,
  step: form.elements.step.value,
  amount: form.elements.amount.value,
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(refs.delay);
  console.log(refs.step);
  console.log(refs.delay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    console.log('Fulfill');
  } else {
    // Reject
    console.log('Reject');
  }
}

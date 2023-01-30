import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const startBtn = document.querySelector('button');
form.addEventListener('submit', startPromises);

function createPromise({ position, currentDelay, amount, step }) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (position === Number(amount.value)) {
        startBtn.disabled = false;
      }
      if (shouldResolve) {
        resolve({ position, currentDelay });
      } else {
        reject({ position, currentDelay });
      }
    }, currentDelay);
  });
}

function startPromises(event) {
  event.preventDefault();
  const { amount, delay, step } = event.currentTarget.elements;
  let position = 0;
  let currentDelay = Number(delay.value);
  startBtn.setAttribute('disabled', true);
  for (let i = 1; i <= amount.value; i++) {
    position = i;
    console.log('position', position, 'step', currentDelay);
    createPromise({ position, currentDelay, amount, step })
      .then(({ position, currentDelay }) => {
        Notiflix.Notify.info(
          `✅ Fulfilled promise ${position} in ${currentDelay}ms`
        );
      })
      .catch(({ position, currentDelay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${currentDelay}ms`
        );
      });
    currentDelay = currentDelay + Number(step.value);
  }
}

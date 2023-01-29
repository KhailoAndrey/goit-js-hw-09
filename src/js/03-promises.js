import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', startPromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function startPromises(event) {
  event.preventDefault();
  const { amount, delay, step } = event.currentTarget.elements;
  let position = 0;
  let currentDelay = Number(delay.value);
  for (let i = 1; i <= amount.value; i++) {
    position = i;
    console.log('position', position, 'step', currentDelay);
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    currentDelay = currentDelay + Number(step.value);
  }
}

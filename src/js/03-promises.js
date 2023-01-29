import Notiflix from 'notiflix';
import Throttle from 'Lodash';

const form = document.querySelector('.form');

// let position = 0;
// let delay = 0;
// let step = 0;

// function getFormValue() {
//     amount = refs.form.elements.amount.value;
//     delay = refs.form.elements.delay.value;
//     step = refs.form.elements.step.value;
//   console.log('amount', amount);
//   console.log('delay', delay);
//   console.log('step', step);
// }
// refs.form.addEventListener('input', getFormValue);
form.addEventListener('submit', startPromises);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      // Reject
      reject({ position, delay });
    }
  });
}
//  position = 2;
//  delay = 1000;
//  step = 1500;
// createPromise(position, delay)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

function startPromises(event) {
  event.preventDefault();
  // console.log(event.currentTarget.elements.amount.value);
  const amount = event.currentTarget.elements.amount.value;
  const delay = event.currentTarget.elements.delay.value;
  const step = event.currentTarget.elements.step.value;
  let position = 0;
  // let currentDelay = delay;
  console.log(delay, step, amount);
  setTimeout(() => {
    for (let i = 1; i < amount; i++) {
      position = i;
      console.log(position);
      // setInterval(() => {
      createPromise(position, delay)
        .then(({ position, delay }) => {
          Notiflix.Notify.info(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
      // }, step);
      // currentDelay = currentDelay + step;
    }
  }, delay);
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

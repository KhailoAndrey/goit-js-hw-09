import Notiflix from 'notiflix';
import Throttle from 'Lodash';

const refs = {
  submitBtn: document.querySelector('button'),
  form: document.querySelector('.form'),
};

let amount = 0;
let delay = 0;
let step = 0;

function getFormValue() {
    amount = refs.form.elements.amount.value;
    delay = refs.form.elements.delay.value;
    step = refs.form.elements.step.value; 
  console.log('amount', amount);
  console.log('delay', delay);
  console.log('step', step);
}
refs.form.addEventListener('input', getFormValue);
refs.submitBtn.addEventListener('submit', startPromises);

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
  }
  )
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

function startPromises() { 
  // position = refs.form.elements.amount.value;
  // delay = refs.form.elements.delay.value;
  // step = refs.form.elements.step.value;
  position = 2;
  delay = 1000;
  step = 1500;
  
  console.log(position, delay, step);
  // setTimeout(({ position, delay }) => {
  //   for (const i = 1; i <= position; i++) {
  //     setTimeout(({ position, delay }) => {
//         createPromise(position, delay)
//           .then(({ position, delay }) => {
//             Notiflix.Notify.info(
//               `✅ Fulfilled promise ${position} in ${delay}ms`
//             );
//           })
//           .catch(({ position, delay }) => {
//             Notiflix.Notify.failure(
//               `❌ Rejected promise ${position} in ${delay}ms`
//             );
//           });
// //       }, step);
//     }
//   }, delay);


}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


import Notiflix from 'notiflix';

const refs = {
  submitBtn: document.querySelector('button'),
  form: document.querySelector('.form')
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

form.addEventListener('input');
const amount = refs.form.elements.amount.value;
console.log(amount); 
submitBtn.addEventListener('submit', createPromise);


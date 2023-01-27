// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateField = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');

startBtn.disabled = true;
// Notiflix.Notify.failure('Please choose a date in the future');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    // return selectedDates[0]
  },
};
const todayDate = Date();
console.log('today ', todayDate);
const userDate = flatpickr(dateField, options);

if (userDate < todayDate) {
  Notiflix.Notify.failure('Please choose a date in the future');
} else {
  // startBtn.disabled = false;
}

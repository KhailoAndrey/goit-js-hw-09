// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateField = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
const dDays = document.querySelector('[data-days]');
const dHours = document.querySelector('[data-hours]');
const dMinutes = document.querySelector('[data-minutes]');
const dSeconds = document.querySelector('[data-seconds]');
startBtn.disabled = true;
let diffTime = 0;
let selectedDate = 0;
const todayDate = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    // console.log(selectedDates[0].getTime());
    if (selectedDate < todayDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
      updateTime(0);
    } else {
      startBtn.disabled = false;
      diffData();
      updateTime(diffTime);
    }
  },
};

function diffData() {
  diffTime = selectedDate - Date.now();
}

flatpickr(dateField, options);

startBtn.addEventListener('click', startCountdown);

function startCountdown() {
  startBtn.disabled = true;
  diffData();
  console.log(convertMs(diffTime));
  const timerID = setInterval(() => {
    diffTime -= 1000;
    updateTime(diffTime);
  }, 1000);
}

function updateTime(diffTime) {
  console.log(convertMs(diffTime));
  dDays.textContent = String(convertMs(diffTime).days).padStart(2, 0);
  dHours.textContent = String(convertMs(diffTime).hours).padStart(2, 0);
  dMinutes.textContent = String(convertMs(diffTime).minutes).padStart(2, 0);
  dSeconds.textContent = String(convertMs(diffTime).seconds).padStart(2, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

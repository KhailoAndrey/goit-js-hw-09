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
// dateField.disabled = true;

let diffTime = 0;
let selectedDate = 0;
let timerID = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0].getTime();
    if (selectedDate < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      startBtn.disabled = true;
      updateTime(0);
    } else {
      startBtn.disabled = false;
      diffData();
      updateTime(diffTime);
      clearInterval(timerID);
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
  dateField.disabled = true; // почему то не срабатывает!!!
  diffData();
  // console.log(convertMs(diffTime));
  timerID = setInterval(() => {
    // console.log(diffTime);
    if (diffTime <= 1000) {
      // отрисовываем последний 0, выдаем сообщение и выходим из функции
      updateTime(diffTime);
      Notiflix.Notify.info('Time is over');
      clearInterval(timerID);
      return;
    }
    updateTime(diffTime);
    diffTime -= 1000;
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

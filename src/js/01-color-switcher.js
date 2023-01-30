const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyBackgroundColor = document.querySelector('body');
let timerId = null;
stopBtn.disabled = true;
startBtn.addEventListener('click', () => {
  stopBtn.disabled = false;
  startBtn.disabled = true;
  timerId = setInterval(() => {
    bodyBackgroundColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

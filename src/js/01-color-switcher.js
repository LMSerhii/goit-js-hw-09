const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

let intervalId = null;

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

function onStartClick(evt) {
  intervalId = setInterval(changeBG, 1000);
  refs.start.disabled = true;
  refs.stop.disabled = false;
}

function onStopClick() {
  clearInterval(intervalId);
  refs.stop.disabled = true;
  refs.start.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBG() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  timer: document.querySelector('.timer'),
  // days: document.querySelector('span[data-days]'),
  // hours: document.querySelector('span[data-hours]'),
  // minutes: document.querySelector('span[data-minutes]'),
  // seconds: document.querySelector('span[data-seconds]'),
};

let unixTime = null;
let intervalId = null;

refs.startBtn.disabled = true;
refs.startBtn.addEventListener('click', onClick);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (!dateValidation(selectedDates[0].valueOf())) {
      // alert('Please choose a date in the future');
      Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true;
      clearInterval(intervalId);
      clearData();
      return;
    }

    if (intervalId) {
      clearInterval(intervalId);
      clearData();
    }

    unixTime = selectedDates[0].valueOf();

    refs.startBtn.disabled = false;

    // console.log(selectedDates[0]);
  },
};

flatpickr(refs.input, options);

function onClick() {
  intervalId = setInterval(startCount, 1000);
  refs.startBtn.disabled = true;
}

function clearData() {
  refs.timer.innerHTML = '<p>00:00:00:00</p>';

  // refs.days.textContent = '00';
  // refs.hours.textContent = '00';
  // refs.minutes.textContent = '00';
  // refs.seconds.textContent = '00';
}

function dateValidation(selectedDates) {
  if (selectedDates <= Date.now()) {
    return false;
  }
  return true;
}

function startCount() {
  const countTime = unixTime - Date.now();

  if (countTime <= 0) {
    clearData();
    return;
  }
  const date = convertMs(countTime);
  setDate(date);
}

function setDate({ days, hours, minutes, seconds }) {
  refs.timer.innerHTML = `<p>
  ${addLeadingZero(days)}:${addLeadingZero(hours)}:${addLeadingZero(
    minutes
  )}:${addLeadingZero(seconds)}
  </p>`;
  refs.timer.classList.add('active');

  // refs.days.textContent = addLeadingZero(days);
  // refs.hours.textContent = addLeadingZero(hours);
  // refs.minutes.textContent = addLeadingZero(minutes);
  // refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(element) {
  return element.toString().padStart(2, '0');
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

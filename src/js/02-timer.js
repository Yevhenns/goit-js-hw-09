import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inp = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
startBtn.disabled = true;
const timer = document.querySelector('.timer');
// console.log(startBtn);
// console.log(inp);
// console.log(timer);

const a = new Date();
// console.log(a);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= a) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', () => {
        // console.log(selectedDates[0]);
      });
    }
  },
};
const flLib = flatpickr('#datetime-picker', options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

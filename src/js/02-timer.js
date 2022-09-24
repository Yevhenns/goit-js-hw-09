import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inp = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');
startBtn.disabled = true;
const timer = document.querySelector('.timer');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selectedTime = selectedDates[0];
    const a = new Date();

    if (selectedTime <= a) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;

      const timer = {
        start() {
          timerId = setInterval(() => {
            const dateNow = new Date();
            let msDelta = selectedTime - dateNow;
            const msResult = convertMs(msDelta);

            daysTimer.textContent = msResult.days;
            hoursTimer.textContent = msResult.hours;
            minutesTimer.textContent = msResult.minutes;
            secondsTimer.textContent = msResult.seconds;
            if (msDelta < 1000) {
              this.stop();
            }
          }, 1000);
        },

        stop() {
          clearInterval(timerId);
        },
      };

      startBtn.addEventListener('click', () => {
        timer.start();
        startBtn.disabled = true;
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

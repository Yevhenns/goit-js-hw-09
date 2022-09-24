import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('button');
const daysTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedTime = selectedDates[0];
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
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const timerStyle = document.querySelector('.timer');
timerStyle.setAttribute(
  'style',
  'display: flex; justify - content: center; margin-top: 20px'
);

const itemStyle = document.querySelectorAll('.field');
itemStyle[0].setAttribute(
  'style',
  'width: 150px; display: flex; flex-direction: column; box-shadow: 10px 5px 5px black; align-items: center; margin-right: 20px; font-family: Roboto; font-size: 26px; border: #212121 1px solid; border-radius: 5px; background-color: aqua;'
);
itemStyle[1].setAttribute(
  'style',
  'width: 150px; display: flex; flex-direction: column; box-shadow: 10px 5px 5px black; align-items: center; margin-right: 20px; font-family: Roboto; font-size: 26px; border: #212121 1px solid; border-radius: 5px; background-color: aqua;'
);
itemStyle[2].setAttribute(
  'style',
  'width: 150px; display: flex; flex-direction: column; box-shadow: 10px 5px 5px black; align-items: center; margin-right: 20px; font-family: Roboto; font-size: 26px; border: #212121 1px solid; border-radius: 5px; background-color: aqua;'
);
itemStyle[3].setAttribute(
  'style',
  'width: 150px; display: flex; flex-direction: column; box-shadow: 10px 5px 5px black; align-items: center; margin-right: 20px; font-family: Roboto; font-size: 26px; border: #212121 1px solid; border-radius: 5px; background-color: aqua;'
);

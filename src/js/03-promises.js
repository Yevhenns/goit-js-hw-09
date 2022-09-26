const form = document.querySelector('.form');
const delay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const btn = document.querySelector('[type="submit"]');
btn.disabled = false;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

// form.addEventListener('submit', getData);
// function getData(ev) {
//   ev.preventDefault();
//   let delayInput = Number(delay.value);
//   const stepInput = Number(step.value);
//   const amountInput = Number(amount.value);

//   for (let i = 1; i <= amountInput; i += 1) {
//     createPromise(i, delayInput)
//       .then(({ position, delay }) => {
//         console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       })
//       .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });
//     delayInput += stepInput;
//     btn.disabled = true;
//   }
// }

form.addEventListener('submit', getData);
function getData(ev) {
  ev.preventDefault();
  let delayInput = Number(delay.value);
  const stepInput = Number(step.value);
  const amountInput = Number(amount.value);

  for (let i = 1; i <= amountInput; i += 1) {
    createPromise(i, delayInput)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayInput += stepInput;
    btn.disabled = true;
  }
}

const log = () => console.log('Called!');
const debauncedLog = debaunce(log, 1000);

function debaunce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

debauncedLog();
debauncedLog();
debauncedLog();


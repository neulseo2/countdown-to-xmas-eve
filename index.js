const clock = document.querySelector(".clock");

function xmasClock() {
  const now = new Date();
  const xmasEve = new Date(`${new Date().getFullYear()}-12-14:00:00:00 UTC-4`);
  const difference = new Date(xmasEve - now);

  // the remaining time of seconds, minutes, and hours, in milliseconds
  const secondsLeftInMs = Math.floor(difference / 1000);
  const minutesLeftInMs = Math.floor(difference / (1000 * 60));
  const hoursLeftInMs = Math.floor(difference / (1000 * 60 * 60));
  const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));

  const secondsLeft = secondsLeftInMs % 60;
  const minutesLeft = minutesLeftInMs % 60;
  const hoursLeft = hoursLeftInMs % 24;

  clock.innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
}

xmasClock();
setInterval(xmasClock, 1000);
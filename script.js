function updateClock() {
  let hour = document.querySelector('.hour');
  let minute = document.querySelector('.minute');
  let second = document.querySelector('.second');

  let date = new Date();
  hour.innerHTML = date.getHours();
  minute.innerHTML = date.getMinutes();
  second.innerHTML = date.getSeconds();
}
setInterval(updateClock, 1000);

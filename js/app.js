const body = document.body;
const endTime = new Date('December 31 2019 23:59:59');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
let newYear = 0;

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}

function changeBG() {
  const col1 = getRandomRGB();
  const col2 = getRandomRGB();
  const col3 = getRandomRGB();
  return `rgb(${col1}, ${col2}, ${col3})`;
}

function animateInnerText() {
  if (newYear === 1)
    return `Happy New Year 2020`;
  else
    return `2020`;
}


const callUpdateCount = setInterval(updateCountdown, 1000);
const callcreateAnimateEl = setInterval(createAnimateEl, 10);

function createAnimateEl() {
  const animateEl = document.createElement('p');
  animateEl.innerText = animateInnerText();
  animateEl.classList.add('animate');
	animateEl.style.fontSize = Math.random() * 10 + 10 + 'px';
  animateEl.style.top = Math.random() * innerHeight + "px";
  animateEl.style.left = Math.random() * innerWidth + "px";
  document.body.appendChild(animateEl);

  setTimeout(() => {
    animateEl.remove()
  }, 4000)
}

function showMessage() {  
  msg = 'Happy New Year 2020';
  let call = setInterval(callMessage, 100);
  let index = 0;
  function callMessage() {
    document.body.innerHTML = `<h1 class="newyear">${msg.slice(0, index)}</h1>`;
    index++;
    if (index > msg.length)
      clearInterval(call);
  }
}

function updateCountdown() {
  const startTime = new Date();
  const diff = endTime - startTime;

  if (diff < 0) {
    newYear = 1;
    document.title = "Happy New Year!!";    
    clearInterval(callUpdateCount);
    showMessage();
    setInterval(createSnowFlake, 10);    
  } else {
    newYear = 0;
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours < 10 ? '0' + hours : hours;
    minutesEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
    secondsEl.style.color = changeBG();
    secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
  }
}


function createSnowFlake() {
	const snow_flake = document.createElement('i');
	snow_flake.classList.add('fas');
	snow_flake.classList.add('fa-snowflake');
	snow_flake.style.left = Math.random() * window.innerWidth + 'px';
	snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's';
	snow_flake.style.opacity = Math.random();
	snow_flake.style.fontSize = Math.random() * 10 + 10 + 'px';
	
	document.body.appendChild(snow_flake);
	
	setTimeout(() => {
		snow_flake.remove();
	}, 5000)
}
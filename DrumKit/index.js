//Function to play sound.
const playSound = (music) => {
  const audio = new Audio(`sounds/${music}.mp3`);
  audio.play();
}

//Function to determine which key or click has been made.
const switchCase = (key) => {
  switch (key) {
    case 'w': playSound('crash');

      break;

    case 'a': playSound('kick-bass');

      break;

    case 's': playSound('snare');

      break;

    case 'd': playSound('tom-1');

      break;

    case 'j': playSound('tom-2');

      break;

    case 'k': playSound('tom-3');

      break;

    case 'l': playSound('tom-4');

      break;
    default:

  }
}

//Function
const animation = (key) => {
  document.querySelector(`.${key}`).classList.add('pressed');

  setTimeout(() => {
     document.querySelector(`.${key}`).classList.remove('pressed'); 
  }, 100);
}



//For Click
for (var i = 0; i < document.querySelectorAll('.drum').length; i++) {
  document.querySelectorAll('button')[i].addEventListener('click', function () {
    const key = this.innerHTML;
    switchCase(key);
    animation(key);
  });
}

//For keyboard button
document.addEventListener('keydown', (event) => {
  switchCase(event.key);
  animation(event.key);
});

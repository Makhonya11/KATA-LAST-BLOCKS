const feedback = document.querySelector('.header__chat');
const feedbackWindow = document.querySelector('.feedback-wrapper');
const exit = document.querySelector('.close');

feedback.addEventListener('click', function () {
  
  feedbackWindow.classList.add('open');
  background.style.display = 'block';
  exit.classList.add('exit');
  body.style.overflowY = 'hidden';
});

exit.addEventListener('click', function () {
   feedbackWindow.classList.remove('open');
  background.style.display = 'none';
  body.style.overflowY = 'visible';
});

background.addEventListener('click', function () {
   feedbackWindow.classList.remove('open');
  background.style.display = 'none';
  body.style.overflowY = 'visible';
});

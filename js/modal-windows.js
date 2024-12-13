const feedback = document.querySelector('.header__chat');
const feedbackWindow = document.querySelector('.feedback-wrapper');
const close = document.querySelector('.close');
const background = document.querySelector('.sidebar-background');
const body = document.querySelector('body');

feedback.addEventListener('click', function () {
  feedbackWindow.classList.add('open');
  background.style.display = 'block';
  close.classList.add('exit');
  body.style.overflowY = 'hidden';
});

close.addEventListener('click', function () {
   feedbackWindow.classList.remove('open');
  background.style.display = 'none';
  body.style.overflowY = 'visible';
});

background.addEventListener('click', function () {
   feedbackWindow.classList.remove('open');
  background.style.display = 'none';
  body.style.overflowY = 'visible';
});

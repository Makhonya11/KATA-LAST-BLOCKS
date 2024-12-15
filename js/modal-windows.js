const feedbacks = document.querySelectorAll('.chat');
const feedbackWindow = document.querySelector('.feedback-wrapper');
const exit = document.querySelector('.close');
const callbacks = document.querySelectorAll('.call');
const callbackWindow = document.querySelector('.callback-wrapper');

feedbacks.forEach(function (feedback) {
  feedback.addEventListener('click', function () {
    sideBar.classList.remove('sidebar-trans');
    feedbackWindow.classList.add('open');
    background.style.display = 'block';
    exit.classList.add('exit');
    body.style.overflowY = 'hidden';
  });
});

callbacks.forEach(function (callback) {
  callback.addEventListener('click', function () {
    sideBar.classList.remove('sidebar-trans');
    callbackWindow.classList.add('open');
    background.style.display = 'block';
    exit.classList.add('exit');
    body.style.overflowY = 'hidden';
  });
});

  exit.addEventListener('click', function () {
     feedbackWindow.classList.remove('open');
     callbackWindow.classList.remove('open');
    background.style.display = 'none';
    body.style.overflowY = 'visible';
  });


background.addEventListener('click', function () {
   feedbackWindow.classList.remove('open');
   callbackWindow.classList.remove('open');
  background.style.display = 'none';
  body.style.overflowY = 'visible';
});

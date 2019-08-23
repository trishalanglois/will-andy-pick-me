var getAnswerButton = document.querySelector('#get-your-answer-button');
var hiddenMessage = document.querySelector('#hidden-message');
var hiddenRandom = document.querySelector('#random-msg');
var userQuestion = document.querySelector('#ask-question-input');
var eightBall = document.querySelector('#eight-ball-img');
var originalRandomText = document.querySelector('#random-msg');
var randomMsgs = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes - definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy. Try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Dont count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
var getRandomIndex = randomMsgs[Math.floor(Math.random() * randomMsgs.length)];
var clearButton = document.querySelector('#clear-button');
var form = document.querySelector('#box-wrapper');

//need to double click to get it to display -- maybe because I have multiple eventListeners which requires multiple clicks??
getAnswerButton.addEventListener('click', function() {
  hiddenMessage.innerText = userQuestion.value;
  // console.log('hi');
  if (hiddenMessage.style.display === 'none') {
      hiddenMessage.style.display = 'block'
  } else {
    hiddenMessage.style.display = 'none';
  }
});

getAnswerButton.addEventListener('click', function() {
  userQuestion.value = '';
})

//Can't get this one to work correctly.
getAnswerButton.addEventListener('click', function() {
  originalRandomText.innerText = randomMsgs[0].innerText;
  // console.log('hi');
  if (originalRandomText.style.display === 'none') {
      originalRandomText.style.display = 'block'
  } else {
    originalRandomText.style.display = 'none';
  }
});



// getAnswerButton.addEventListener('click', function() {
//   //set up variable with query selector for the random message that's already there
//   //set up array of the random messages that could be displayed
//   //set up inner text to replace original text with random message
//   originalRandomText.innerText = 'test';
//   getRandomIndex.innerText;
//   // console.log('random message test');
// })

//need to double click to get it to not display
getAnswerButton.addEventListener('click', function() {
  if (eightBall.style.display === 'block') {
    eightBall.style.display = 'none'
  } else {
    eightBall.style.display = 'block';
  }
});

// function showQuestion() {
//   if (getAnswerButton.addEventListener('click', function() {
//     hiddenMessage.innerText = userQuestion.value;
// });
//
//
// if (getAnswerButton.addEventListener('click', function() {
//
// } else {
//
// }

clearButton.addEventListener('click', function() {
  form.location.reload();
});

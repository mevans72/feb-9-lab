// JS file for Feb 8 class demo
var userName = prompt('Good morning. Can you confirm your name for me?');

if(userName !== null) {
  alert('Great. It is nice to meet you ' + userName + '.');
  console.log('The users name is: ' + userName);
} else {
  alert('Then have a great day.')
};

if(userName !== null) {
  var beginInterview = confirm('Are you ready to begin this interview?');
};

if(beginInterview === true && userName !== null) {
  alert('Great! Then lets get started with the first question.');
  var mathQuestion = prompt('What is 2 + 2?');
  console.log('The users response to the math question is: ' + mathQuestion);
  var logicQuestion = prompt('How many quarters are in $1.75?');
  console.log('The users response to the logic question is: ' + logicQuestion);
  var historyQuestion = prompt('Who was the first president?');
  console.log('The users response to the history question is: ' + historyQuestion);
} else if (beginInterview === false && userName !== null) {
  var scheduleInterview = confirm('Would you like to reschedule this for a later date?');
};

if(scheduleInterview === true && userName !== null) {
  alert('Sounds great. We will get a new date on the calendar.');
};

if(beginInterview === true && userName !== null) {
    alert('Thank you for your responses. We will be getting back with you after we complete this initial round of interviews. We will be getting back with you after we complete this initial round of interviews.');
  } else if (beginInterview === false && scheduleInterview === false && userName !== null) {
    alert('Then have a great day.')
};

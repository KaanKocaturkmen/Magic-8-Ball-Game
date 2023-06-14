let userName = "Kaan";
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
let userQuestion = console.log('Am I gonna be successful on front end development?');
let randomNumber = Math.floor(Math.random() * 7);
let eightBall = randomNumber
console.log(randomNumber);
switch (randomNumber) {
    case 0:
    console.log('It is certain..');
    break;
    case 1:
    console.log('It is decidedly so..');
    break;
    case 2:
    console.log('Reply hazy try again..');
    break;
    case 3:
    console.log('Cannot predict now');
    break;
    case 4:
    console.log('Do not count on it');
    break;
    case 5:
    console.log('My sources say no');
    break;
    case 6:
    console.log('Outlook not so good');
    break;
    case 7:
    console.log('Signs point to yes');
    break;
  default:
    console.log('Nothing')  
}

//! OR
/*
if (randomNumber == 0) {
  console.log('It is certain..');
}else if (randomNumber == 1) {
  console.log('It is decidedly so..');
}else if (randomNumber == 2) {
  console.log('Reply hazy try again..');
}else if (randomNumber == 3) {
  console.log('Cannot predict now..');
}else if (randomNumber == 4) {
  console.log('Do not count on it..'); 
}else if (randomNumber == 5) {
  console.log('My sources say no..');
}else if (randomNumber == 6) {
  console.log('Outlook not so good..');
}else if (randomNumber == 7) {
  console.log('Signs point to yes..');
}
*/

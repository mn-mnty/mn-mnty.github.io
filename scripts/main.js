let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/a-bigger-splash.jpg') {
    myImage.setAttribute('src', 'images/white-procelain.jpg');
  } else {
    myImage.setAttribute('src','images/a-bigger-splash.jpg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to a beautiful painting, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to a beautiful painting, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome ' + myName;
  }
}

//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

//Code Here
function isTyler(name) {
  if (name === 'Tyler') {
    return true;
  } else {
    return false;
  }
}
//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


//Code Here
function getName() {
  var name = prompt('Please enter your name.');
  return name;
}

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

//Code Here
function welcome() {
  alert('Welcome, ' + getName());
}

//////////////////PROBLEM 4////////////////////


//What is the difference between arguments and parameters?

//Answer Here
//Arguments pass values to parameters.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


//Answer Here
// 0, '', undefined, null, NaN, false. Using an if statement; e.g., if(x === null)....




//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

//Code Here
function myName() {
  name2 = 'Jasper';
  return name2;
}



//Now save the function definition of myName into a new variable called newMyName

//Code Here
function newMyName(){
  var myName = alert(name + ' is my my name');
  return myName;
}
//Now alert the result of invoking newMyName



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

//Code Here
function outerFn(){
  var anonymous = function(){
    return 'Stephen';
  }
} outerFn();
//Now save the result of invoking outerFn into a variable called innerFn.

//Code Here
var innerFn = outerFn();
//Now invoke innerFn.

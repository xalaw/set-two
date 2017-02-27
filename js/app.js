var jediName = function(firstName, lastName){
  console.log(lastName.substr(0, 3)+firstName.substr(0, 2));
};

jediName("Ally", "Law");
jediName("Peter", "Szujewski");

var beyond = function(num){
  if (num===Infinity || num===-Infinity){
    console.log('And beyond');
  }
  else if (num>0 && num!==Infinity) {
    console.log('To infinity');
  }
  else if (num<0 && num!== -Infinity){
    console.log('To negative infinity');
  }
  else if (num === 0) {
    console.log('Staying home');
  }
};

beyond(Infinity);
beyond(100);
beyond(-100);
beyond(0);


var myString = 'craft block argon meter bells brown croon droop';

var decode = function(string){
  let myArray = myString.split(' ');
  let decodedArray = myArray.map(function(word){
    if (word.charAt(0)=== "a") {
      return word.charAt(1);
    } else if (word.charAt(0)==="b") {
      return word.charAt(2);
    } else if (word.charAt(0)==="c") {
      return word.charAt(3);
    } else if (word.charAt(0)==="d") {
      return word.charAt(4);
    } else {
      return ' ';
    }
  });
  return decodedArray.join('');
};

var result = decode(myString);
console.log(result);

// How many days in a month

var howManyDays = function(month) {
  month = month.toLowerCase();
  switch (month) {
    case "january":
      return "January has 31 days";
      break;
    case "february":
      return "February has 28 days";
      break;
    case "march":
      return "March has 31 days";
      break;
    case "april":
      return "April has 30 days";
      break;
    case "may":
      return "May has 31 days";
      break;
    case "june":
      return "June has 30 days";
      break;
    case "july":
      return "July has 31 days";
      break;
    case "august":
      return "August has 31 days";
      break;
    case "september":
      return "September has 30 days";
      break;
    case "october":
      return "October has 31 days";
      break;
    case "november":
      return "November has 30 days";
      break;
    case "december":
      return "December has 31 days";
      break;
    default:
      return "Error";
      break;
  }
}

var daysInMonth = howManyDays("OcTOber");
console.log(daysInMonth);


// Rock, Paper, Scissors
// rock is 1
// paper is 2
// scissors is 3

function RockPaperScissors(userChoice) {
    var computer = 1 + Math.floor((Math.random()*3));
    console.log("computer chose: "+computer);
    if (userChoice === 1) {
      if (computer === 3) {
        console.log("User wins, computer loses");
      } else if (computer === 2) {
        console.log("User loses, computer wins");
      } else {
        console.log("It's a tie!");
      }
    }
    else if (userChoice === 2) {
      if (computer === 1) {
        console.log("User wins, computer loses");
      } else if (computer === 3) {
        console.log("User loses, computer wins");
      } else {
        console.log("It's a tie!");
      }
    }
    else if (userChoice === 3) {
      if (computer === 2) {
        console.log("User wins, computer loses");
      } else if (computer === 1) {
        console.log("User loses, computer wins");
      } else {
        console.log("It's a tie!");
      }
    }
    else {
      // for any errors
      console.error("Choose a number between one and three");
    }
}

RockPaperScissors(1);

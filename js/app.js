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

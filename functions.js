function combineWords(word1, word2) {
    return word1+word2;
}

var result = combineWords('light', 'house');
console.log(result);
// displays 'lighthouse'


//-------------------------------

function repeatPhrase(phrase, n) {
	for(var i = 0; i < n; i++) {
		console.log(phrase);
	}
}
repeatPhrase ("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello

//-------------------------------

function toTheNthPower(number, power) {
    // TODO: Place your code here
}

var result = toTheNthPower(4, 5);
console.log(result);
// displays 1024

//-------------------------------



function areaOfACircle(radius) {
  var r = radius * radius;
  var area = Math.PI * r;
  return area;
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57




//-------------------------------

function pythagoreanTheorem(a, b) {
    // TODO: Place your code here
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;

//-------------------------------
function isXEvenlyDivisibleByY(x, y) {
    // TODO: Place your code here
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
// displays true



//-----------------------
function countVowels(word) {
    // TODO: Place your code here
}

var result = countVowels("stealing");
console.log(result);
// displays 3



//---------------------------------
function findWdi(givenArray){
  for(var i=0; i<givenArray.length; i++){
    if(givenArray[i] ==='wdi'){
      return true;
    }
  }

  else{
    return false;
  }

   }

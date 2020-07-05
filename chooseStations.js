var chooseStations = function (stations){
  var qualifiedStations = [];
  for(var station of stations){
    if(station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')){
      qualifiedStations.push(station[0]);
    }
  }
  return qualifiedStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

// console.log(chooseStations(stations));

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

var finalPosition = function (moves){
  var initialPosition = [0,0];
  for(var direction of moves){
    if(direction==='north'){
      initialPosition[1]+=1;
    }else if(direction==='south'){
      initialPosition[1]+=-1;
    }else if(direction==='east'){
      initialPosition[0]+=1;
    }else{
      initialPosition[0]+=-1;
    }
  }
  return initialPosition;
}
console.log(finalPosition(moves));

const ageCalculator = function (name, yearOfBirth, currentYear){
  var age = currentYear - yearOfBirth;
  var phrase = name + " is "+age+" years old.";

  return phrase;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

const howManyHundreds = function(num){
  if(num%100 <= -1){
    return 0;
  }else{
    return parseInt(num/100, 10);
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);

const calculateRectangleArea = function (length, width){
  if(length <= 0 || width <= 0){
    return undefined;
  }else{
    return length * width;
  }
}
const calculateTriangleArea = function(base, height){
  if(base <= 0 || height <= 0){
    return undefined;
  }else{
    return ((base * height) / 2);
  }
}

const calculateCircleArea = function(radius){
  if(radius <= 0){
    return undefined;
  }else{
    return (Math.PI*(radius*radius));
  }
}

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for(let r=0; r<numbers.length; r++){
  for(let c=0; c<r.length; c++){
      console.log(numbers[r][c]);
      if(numbers[r][c]%2 === 0){
          numbers[r][c]='even';
      }else{
           numbers[r][c]='odd';
           
      }
  }
}


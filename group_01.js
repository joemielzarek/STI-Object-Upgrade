//The first index holds the employees name.
//The second index has their employee number.
//The third index contains their annual salary.
//The fourth index contains their review rating.

//ORIGINAL CODE FOR ARRAY

//  var atticus = ['Atticus', '2405', '47000', 3];
//  var jem = ['Jem', '62347', '63500', 4];
//  var boo = ['Boo', '11435', '54000', 3];
//  var scout = ['Scout', '6243', '74750', 5];

function Person(empName, empNum, annualSal, reviewRating) {
  this.name = empName;
  this.number = empNum;
  this.salary = annualSal;
  this.rating = reviewRating;
}

var atticus = new Person('Atticus', '2405', '47000', 3);
var jem = new Person('Jem', '62347', '63500', 4);
var boo =  new Person('Boo', '11435', '54000', 3);
var scout = new Person('Scout', '6243', '74750', 5);

var employees = [atticus, jem, boo, scout];

var bonusPer = 0;

function logic(Person) {

  var localArray = [];

  //Third Index is below //

  var bonusPSum = 1;

  if (Person.rating <= 2) {
    bonusPSum = 1;
    if (arg[1].length == 4) {
      bonusPSum += 0.05;
      if (Number(arg[2]) > 65000) {
        bonusPSum -= 0.01;
      }
    }
  } else if (Person.rating === 3) {
    bonusPSum += 0.04;
    if (Person.number.length == 4) {
      bonusPSum += 0.05;
      if (Number(Person.salary) > 65000) {
        bonusPSum -= 0.01;
      }
    }
  } else if (Person.rating === 4) {
    bonusPSum += 0.06;
    if (Person.number.length == 4) {
      bonusPSum += 0.05;
      if (Number(Person.salary) > 65000) {
        bonusPSum -= 0.01;
      }
    }
  } else if (Person.rating === 5) {
    bonusPSum += 0.10;
    if (Person.number.length == 4) {
      bonusPSum += 0.05;
      if (Number(Person.salary) > 65000) {
        bonusPSum -= 0.01;
      }
    }
  }

  if (bonusPSum > 1.13) {
    bonusPSum = 1.13;
  }

  localArray[0] = Person.name;

  localArray[1] = bonusPSum - 1;

  Person.salary *= bonusPSum;
  Person.salary = Math.round(Person.salary);
  localArray[2] = Person.salary;

  localArray[3] = Math.round(Number(Person.salary) * localArray[1]);

  return localArray;
}

logic(Person);

////  FINAL ARRAY THAT STORES ANSWERS ////

function finalArray(empArray) {
  for (var i = 0; i < employees.length; i++) {
    console.log(logic(empArray[i]));
  }

  return empArray;
}

console.log(finalArray(employees));

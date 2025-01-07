import { type } from "@testing-library/user-event/dist/type";

function getMysticNumbers() {
    var numbers = [];
    for (var i = 1; i <= 10; i++) {
        numbers[i] = function() { return i * 2; };
    }
    return numbers;
}
var mysticNumbers = getMysticNumbers();
console.log(mysticNumbers[5]());


var energy = "500J"; // J stands for Joules
function getEnergyFunction() {
    var energy = "300J";
    function releaseEnergy() {
        return energy;
    }
    return releaseEnergy;
}

var activateEnergy = getEnergyFunction();
console.log(activateEnergy)

var obj = { hasOwnProperty: 1, foo: 2 };
obj.hasOwnProperty('foo');


function Employee(id, name) {
    this.empId = id;
    this.empName = name;
}

function Manager(id, name, department) {
    Employee.call(this, id, name);
    this.dept = department;
}

var newManager = new Manager(34, "Alex Smith", "Sales");
console.log(newManager.empId); // What is the output of this line?


var truthyString = "true";
var truthyNumber = 1;

var stringObject = new String(truthyString);
var numberObject = new Number(truthyNumber);

console.log(stringObject === truthyString);
console.log(numberObject === truthyNumber);

console.log(null == undefined)
console.log(null === undefined)


const obj1 = {
    a: 5,
    b: {
      c: 6
    }
  };
  
  const obj2 = Object.assign({}, obj1);
  const obj3 = { ...obj1 };
  
  obj1.b.c = 8;
  
  console.log(Object.assign({}, obj1, obj2, obj3));

  const aa = [1,2,2,4,22,2,]
  console.log(typeof(aa))
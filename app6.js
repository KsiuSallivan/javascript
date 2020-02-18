// Занятие 6
// let car = {
//   color: 'red',
//   maxSpeed: 250,
//   audio: {
//     brand: 'Sony',
//     speakers: 12
//   }
// };

let car = {
  color: 'red'
};

let car2 = {
  color: 'green'
};

console.log(car.color);

car.color = 'green'
console.log(car.color);

colorChange(car);
colorChange(car2);

function colorChange(theCar) {
  theCar.color = 'yellow';
}

console.log("car: " + car.color);
console.log("car2: " + car2.color);

// Занятие 7

let car = {
  maxSpeed: '240',
  update: speedChange
};

car.update();

let speed = speedChange;

speed();

function speedChange() {
  console.log(car.maxSpeed);
}

// function watch(message = 'test') {
//   console.log(message);
// }
//
// watch();

function watch(message) {
  return message + ' - Ляляля';
}

// console.log(watch('простое слово'));

let message = watch('простое слово');
console.log(message);

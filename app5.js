// Занятие 5
let car = {
  color: 'green',
  maxSpeed: 250,
  audio: {
    brand: 'Sony',
    speakers: 12
  }
};

if(car.color == 'red') {
  console.log('автомобиль красный');
} else if (car.color == 'green') {
  console.log('автомобиль зеленый');
} else {
  console.log('цвет не определен');
}

if(!true) {
  console.log('истина');
} else {
  console.log('ложь')
}

// car.color == 'green' ? console.log('зеленый') : console.log('красный');

let color = car.color == 'red' ? 'красный' : 'зеленый';
console.log(color);

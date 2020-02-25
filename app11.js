// создаем объект
// let hater = {
//   firstName: 'Bill',
//   lastName: 'Darcy',
//   getName() {
//     // return this.firstName + ' ' + this.lastName;
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// console.log(hater.getName());
//
// let hater2 = {
//   firstName: 'Don',
//   lastName: 'Sullivan',
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
//
// console.log(hater2.getName());

// создаем класс
class Hater {
  constructor(firstName, lastName) {
    // console.log('Привет, я конструктор!');
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

let hater1 = new Hater('Ozzy', 'Osborn');
hater1.sayName();

let hater2 = new Hater('Leonid', 'Ivanov');
hater2.sayName();

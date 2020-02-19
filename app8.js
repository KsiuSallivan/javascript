// Занятие 8
// let anonym = function () { //анонимная функция
//   console.log("we are anonymous");
// };
//
// anonym();

// (function () { //анонимная функция
//   console.log("we are anonymous");
// })();

// стрелочная нотация
// let anonym = () => console.log("we are anonymous");
//
// anonym();

// let anonym = () => "we are anonymous";
//
// console.log(anonym());


let anonym = (message, count) => message + count;

console.log(anonym("we are anonymous = ", 6));

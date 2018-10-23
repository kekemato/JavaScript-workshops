// let zmienna = "kot";

// let zwierzeta = zmienna === "kot" ? "koty są fajne" : "Koty są be";
// console.log(zwierzeta);
// _______________
// let x = 3;

// let a = (x === 1 ? 1 : (x === "1" ? 2 : (x == 3 ? x : 0)));
// console.log(a);
// _______________
// let s = 1;

// let t =
// s === 1 ? 1 :
//    s === '1' ? 2 :
//        s === 3 ? s :
//            0;
// _______________
// let animals = ["koty", "psy", "króliki", "świnki morskie", "rybki"];

// let i = 0;
// while (i < animals.length){
//     console.log(`Na pozycji ${i} są ${animals[i]}`);
//     i++;
// }
// _______________
// let zmienna = "ala";

// if(zmienna === 1){
//     console.log(1);
// } else if(typeof zmienna == "string"){
//     console.log("To jest string");
//     if(zmienna === "ala"){
//     console.log("Hello Ala")
//     }
// } else if (zmienna == null){
//     console.log("mamy null");
// } else{
//     console.log("Oh no");
// }
// _______________
// var x = '1';

 // switch (x){
//     case 1:
//         console.log(1);
//         break;
//     case '1':
//         console.log(2);
//         break;
//     case 3:
//         console.log(x);
//         break;
//     default:
//         console.log(0);
//         break;
// }
// _______________
// let numbers = new Array (100);

// for (let i = 0; i < 100; i ++){
//     numbers[i]= (Math.floor(Math.random() * 255));
// }
// _______________
// console.time('in loop')
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }
// console.timeEnd('in loop')

// console.time('before loop')
// let length = numbers.length;
// for (let i = 0; i < length; i++){
//     console.log(numbers[i]);
// }
// console.timeEnd('before loop')
// _______________
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let i = numbers2.length - 1;
// while (i >= 0){
//     console.log(numbers2[i]);
//     i--;
// }
// _______________
// let numbers = [];

// for (let i = 0; i < 10; i++){
//     numbers[i]= (Math.floor(Math.random() * 10) + 1);

// }

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 5){
//     break;
//     }

//     console.log(numbers[i]);
// }

// ______________

// var obj = {
//     ala: false,
//     dlugosc: 123,
//     elementy: ['ola', false, null, 'mariusz'],
//     'index-1': 'pozycja 1',
//     'index-2': 'pozycja 2',
//     'index-3': 'pozycja 3',
//   };

//   console.log(obj.ala);
//   console.log(obj.dlugosc);
//   console.log(obj.elementy[3]);

//   for (let i = 0; i < 3; i++) {
//     console.log(obj['index-' + (i + 1)]);
//   }

//   console.log(Object.keys(obj), Object.values(obj));

// ______________

let tablica = [1, 5, 7, 3, 8];

tablica.unshift(0);
tablica.push(6);

console.log(tablica);

tablica.shift(0);
tablica.pop(6);

console.log(tablica);


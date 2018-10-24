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

// let tablica = [1, 5, 7, 3, 8];

// tablica.unshift(0);
// tablica.push(6);

// console.log(tablica);

// tablica.shift();
// tablica.pop();

// console.log(tablica);

// ______________

// let tablica2 = [1, 2, 3, 4, 5, 6];
// let sliced = tablica2.slice(1, 3); //[2, 3]
// let c = tablica2.slice(0, 2).concat(tablica2.slice(3, 6)); // [1, 2, 4, 5, 6]
// let d = tablica2.slice(0, -2); // [1, 2, 3, 4]
// let e = tablica2.slice(-2); // [5, 6]
// let f = tablica2.slice(-3, -2); // [4]

// ______________

// let numbers3 = [];
// let numbersSize = 10

// for (let i = 0; i < numbersSize; i++){
//     numbers3[i]= parseInt(Math.random() * 10 + 1);
// }

// console.log('tablica poczatkowa = ', numbers3);

// let startIndex = (numbersSize / 2) -2;
// console.log('startIndex = ', startIndex);
// var numberOfItems = 4;
// var newArray = numbers3.slice(startIndex, startIndex + numberOfItems);

// console.log('srodkowe 4 elementy = ', newArray);

// ______________

// var array = [1, 2, 5, 6, 9, 5, 8];

// console.log(array.indexOf(5)); // 2
// console.log(array.indexOf(13)); // -1
// console.log(array.indexOf(5, -3)); // 5
// console.log(array.indexOf(5, -5)); // 2

// var array2 = ['ala', 'ma', 'kota'];
// console.log(array2.indexOf('kota')); // 2
// console.log(array2.indexOf('psa')); // -1

// ______________

// let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let x = 9;

// for (let i = 0; i < numbers4.length; i++){
//     if (numbers4[i] == x){
//         console.log(`znalazłem ${x}`);
//         console.log("Index 9 to: " + numbers4.indexOf(9));
//     }
// }

// if (numbers4.indexOf(x) != -1){
//     console.log(`zawiera ${x}`);
// }

// ______________

// let cat = {};
//     cat.race = "persian";
//     cat.name = "Puszek";
//     cat.fur = "white";
//     cat.age = 12;


// console.log(cat);

// let cat2 = {
//     race: "european",
//     name: "Leon",
//     fur: "ginger",
//     age: "8 weeks"
// };

// console.log(cat2);

// ______________

// function sum (a, b){
//     return a + b;
// }

// let sumN = function(){
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum+= arguments[i];
//     }
//     return sum;
// }

// let superSum = sum;
// console.log(superSum(4, 7));
// let superSum2 = sum(2, 5);
// console.log(superSum2);

// ______________

// const multiplyDivide = (a, b, c) => (a * b) / c;

// const multiplyDivide2 = (a, b, c) => {
//     return (a * b) / c;
// };

// console.log(multiplyDivide(2, 6, 4));

// ______________

// let c = 0;

// let newFunction = function(a, b){
//     let d = a + b;
//     console.log(d);
//     c = 3;
//     return a - b;
// }

// console.log(c);
// console.log(newFunction(3, 5));
// console.log(d);

// ______________

// (function(a, b){
//     let sum = a + b;
//     console.log(sum);
//     return sum;
// })(5, 7);

// ______________

// function addSquares(a, b){
//     function square(x){
//         return x * x;
//     }
//     console.log(square(a) + square(b));
//     return square(a) + square(a);
// }

// addSquares(2, 3);

// const addSuares2 = (a,b) => {
//     const square2 = (x) => x * x;
//     return square2(a) + square2(b);
// }

// addSquares2(2, 3);

// ______________

function loop(x) {
    console.log(x);
    if (x >= 10)
    return;
    loop(x + 1);
    }

// ______________

function fibo(n){
        if ( n <= 0){
        return 0;
        }
        else if ( n == 1){
            return 1;
        }
    return fibo(n - 1) + fibo(n - 2);
}

function countdown(x){
    console.log(x);
    if (x >= 15){
        return;
    }
    countdown(x + 1);
}

countdown(4);

// ______________

function foo(){
    function bar() {
        return 3;
    }
    return bar();
    function bar() { //ta funkcja zostanie wyniesiona do góry, przed return bar() - 'hoisting'
        return 8;
    }
}
    console.log(foo()); // 8

 //przypadek 2
function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() { //zmienne wewnątrz funkcji nie są wynoszone nad return
        return 8;
    };
}
    console.log(foo());

//przypadek 3
    console.log(foo()); //3
    function foo(){
    var bar = function() {
        return 3;
    };
    return bar();
    var bar = function() {
        return 8;
    };
}

//przypadek 4
function foo(){
    return bar(); //bar nie jest funkcją
    var bar = function() {
    return 3;
    };
    var bar = function() {
    return 8;
    };
    }
    console.log(foo());
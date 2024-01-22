// class User {
//     constructor(name, site, dob) {
//         this.name = name;
//         this.site = site;
//         this.dob = dob;
//     }
//
//     hello() {
//         console.log(`I am ${this.name} from ${this.site}`)
//     }
// }
//
// const u1 = new User('Dima', 'iy-incubator', new Date(1990, 11, 8))
// console.log(u1)

// 'use strict';


// const user = {
//     name: 'Alex',
//     showName() {
//         console.log(this)
//     }
// }
//
// user.showName()
// const user = {
//     age: 23,
//     showAge() {
//         const foo = () => {
//             console.log(this.age)
//         }
//         foo.call({age: 12})
//     }
// }
//
// user.showAge.call({age: 20})
// const a = {
//     msg: 'Hello World',
//
//     getMsg() {
//         const msg = 'Hello'
//         return this.msg
//     },
//
//     getMsg2: () => {
//         const msg = 'Hello'
//         return this.msg
//     }
// }
//
// console.log(a.getMsg())
// console.log(a.getMsg2())


// this.name = 'GLOBAL'

// const a = {
//     name: 'a',
//
//     go: function () {
//         console.log(this.name)
//         //a
//     },
//
//     run: () => {
//         console.log(this.name)
//         //'GLOBAL'
//     },
//
//     stop: function () {
//         (() => {
//             console.log(this.name)
//         }).call({name: 'call'})
//     }
// }
//
// a.go()
// a.run()
// a.stop()

// const test = {
//     prop: 42,
//     func: function () {
//         return this.prop
//     }
// }
//
//
// function f1() {
//     return this.a
// }
//
// let g = f1.bind(({a: 'hello'}))
// let h = g.bind(({a: 'hello2'}))
//
// console.log(g())
// console.log(h())

// let user = {
//     name: 'Dima',
//     age: 33,
//     fun() {
//         console.log(this.age)
//     }
// }
// user.fun()


// let c = {}
//
// function A() {
//     return c
// }
//
// function B() {
//     return c
// }
//
// let a = new A();
// let b = new B();
//
// console.log(a == b)

let calculator = {
    read() {
        this.a = +prompt('enter value a')
        this.b = +prompt('enter value b')

        return console.log(this.a, this.b)
    },
    sum() {
        return +prompt('sum is:', this.a + this.b)
    },
    mul() {
        return +prompt('mul is:', this.a * this.b)
    }

};


function Person(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.print = function () {
        console.log(`Name: ${this.name} Age: ${this.age}`)
    }
}

// const tom = new Person('Tom', 20)
// console.log(tom.name)

// let someObj = {
//     name: 'Eugene',
//     age: 322,
//     greeting(){
//         console.log(`My name is ${this.name}. I am ${this.age}`)
//     }
// }
//
//
// someObj.greeting()


// const data = [
//     {name: 'Samanta', age: 12},
//     {name: 'Alexis', age: 14}
// ]
//
// const user = {
//     data: [
//         {name:"T. Woods", age:37},
//         {name:"P. Mickelson", age:43}
//     ],
//     showData: function() {
//         let randomNum = Math.floor(Math.random() * 2);
//         console.log(this.data[randomNum].name + " " + this.data[randomNum].age);
//     }
// }
//
// let showDataVar = user.showData();
// console.log(showDataVar)
// showDataVar();


// let counter = {
//     value: 0,
//     getCurrentCount(){
//         return console.log(this.value)
//     },
//     increment(){
//         return console.log(++this.value)
//     },
//     decrement(){
//         return console.log(--this.value)
//     },
//     setCurrentCount(value){
//         return console.log(this.value = value)
//     },
//     restCurrentCount(){
//         return console.log(this.value = 0)
//     },
// }
//
// let counter2 = {
//     value: 0,
//     getCurrentCount(){
//         return this.value
//     },
//     increment(){
//         this.value++
//         return this
//     },
//     decrement(){
//         this.value --
//         return this
//     },
//     setCurrentCount(value){
//         this.value = value
//         return this
//     },
//     restCurrentCount(){
//         this.value = 0
//         return this
//     },
// }
//
// let result = counter2.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount()
// console.log(result)
//
// const counter3 = {
//     count: 0,
//     getCurrentCount: function() {
//         return this.count;
//     },
//     increment: function() {
//         this.count++;
//         return this; // возвращаем ссылку на сам объект
//     },
//     decrement: function() {
//         this.count--;
//         return this; // возвращаем ссылку на сам объект
//     },
//     setCurrentCount: function(value) {
//         this.count = value;
//         return this; // возвращаем ссылку на сам объект
//     },
//     resetCurrentCount: function() {
//         this.count = 0;
//         return this; // возвращаем ссылку на сам объект
//     }
// };
//
// // Пример использования:
// const result2 = counter3.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount();
// console.log(result2); // 12

let One = {name: 'One'};
let Two = {name: 'Two', sayHello: function() {console.log(`Hello, my name is ${this.name}`)}};

let result = Two.sayHello.bind(One)

let helperObj = {
    name: '',
    age: 0,
    changeName(newName){
        return this.name = newName
    },
    setAge(newAge){
        return this.age = newAge
    },
    greeting(){
        return console.log(`Hello, my name is ${this.name}`)
    },
}

let helperName = helperObj.changeName('Dima2')
console.log(helperName)

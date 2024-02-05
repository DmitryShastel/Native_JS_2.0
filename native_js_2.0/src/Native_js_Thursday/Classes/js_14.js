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
let Two = {
    name: 'Two', sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};

// let result = Two.sayHello.bind(One)
//
// let helperObj = {
//     name: '',
//     age: 0,
//     changeName(newName) {
//         return this.name = newName
//     },
//     setAge(newAge) {
//         return this.age = newAge
//     },
//     greeting() {
//         return console.log(`Hello, my name is ${this.name}`)
//     },
// }
//
// let helperName = helperObj.changeName('Dima2')
// let obj = {
//     name: 'Dima',
//     sayHi(a, b, c) {
//         console.log('My name is ', this.name, a, b, c)
//     }
// }
//
// let obj2 = {
//     name: 'Julia',
// }
//
// let obj3 = {
//     name: 'Alex',
// }
// obj2.sayHi = obj.sayHi.bind(obj, 10, 20, 100)
// obj2.sayHi(50)
//
// obj.sayHi.bind(obj3, 50).bind(obj, 100).bind(obj2, 250).bind(obj2, 300)


//CLASS

//Base syntax
// class User {
//
//     age = 23
//     someFunc = () => {
//     }
//     someFunc2 = function () {
//     }
//
//     constructor(name) {
//         this.name = name
//     }
//
//     sayHi() {
//         console.log(this.name)
//     }
// }
//
// const user = new User('Alex')
// console.log(user)

//static methods of classs
// class Test {
//     static DEFAULT_NAME_LENGTH = 20
//     static validateUserName = (name) => {
//         if (name.length > this.DEFAULT_NAME_LENGTH) {
//             throw new Error('Invalid name')
//         }
//     }
//
//     constructor(name) {
//         Test.validateUserName(name)
//         this.name = name
//     }
// }

//Private field
// class User {
//     #name;
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     getName() {
//         return this.#name
//     }
// }
//
// const alex = new User('Alex')
// console.log(alex.getName())

//GET, SET
// class User {
//     static DEFAULT_NAME_LENGTH = 20
//     #name;
//
//     constructor(name) {
//         this.#name = name
//     }
//
//     get name() {
//         return this.#name
//     }
//
//     set name(value) {
//         if (value.length > User.DEFAULT_NAME_LENGTH) throw new Error('Invalid name')
//         return this.#name = value
//     }
//
//
// }
//
// const alex = new User('Alex')
// console.log(alex.name)
// console.log(alex.name = 'test')

//Extends
// class Car {
//     static WHEELS_COUNT = 4
//     run() {
//         console.log('Car running')
//     }
// }
//
// class Ford extends Car {
//     fordRun() {
//         console.log('Ford running')
//     }
// }
// const car = new Ford
// console.log(Ford.WHEELS_COUNT)

//Super
// class Car {
//     constructor(model) {
//         this.model = model
//     }
// }
//
// class Ford extends Car{
//     constructor(model) {
//         super(model);
//     }
//
// }
//
// const ford = new Ford('max')
// console.log(ford)

// class Clock {
//     constructor() {
//         this.count()
//     }
//
//     count() {
//         let date = new Date();
//
//         let h = date.getHours();
//         let m = date.getMinutes();
//         let s = date.getSeconds();
//         m = this.checkTime(m);
//         s = this.checkTime(s);
//
//         console.log(h + ':' + m + ':' + s)
//
//         setTimeout(this.count.bind(this), 1000)
//
//     }
//
//     checkTime(i) {
//         if (i < 10) {
//             i = '0' + i
//             return i;
//         }
//     }
// }

// const clock = new Clock()
// console.log(clock)

// class CoffeeMachine {
//     _waterAmount = 0;
//
//     set waterAmount(value) {
//         if (value < 0) throw new Error('Negative amount of water')
//         this._waterAmount = value
//     }
//
//     get waterAmount() {
//         return this._waterAmount;
//     }
//
//     constructor(power) {
//         this._power = power
//     }
// }
//
// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 10
//
// console.log(coffeeMachine)

class Task {
    constructor(title = '', isCompleted = false) {
        this.tile = title
        this.isCompleted = isCompleted
    }
}

let task = new Task('react', true)
console.log(task)




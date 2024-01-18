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






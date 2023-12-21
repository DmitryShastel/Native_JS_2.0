// const axios = {
//     get(url) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 const response = {
//                     vacancies: [
//                         {id: 1, title: 'js'},
//                         {id: 2, title: 'css'},
//                     ],
//                     status: 200,
//                     headers: {},
//                     data: [],
//                 };
//
//                 // const response = [{title: 'hello'},{},{}]
//                 resolve(response)
//             })
//         })
//     }
// }
// const findUserInDB = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const users = [
//                 {id: 1, name: 'Bob', friend: 2},
//                 {id: 2, name: 'Anna', friend: 1},
//                 {id: 3, name: 'Sveta', friend: null},
//             ];
//             const filteredUser = users.filter((el) => el.id === id);
//             if (filteredUser.length > 0) {
//                 resolve(filteredUser[0]);
//             } else {
//                 reject(new Error('User not found'))
//             }
//             return filteredUser
//         })
//     })
// }
// async function run () {
//     let user = await findUserInDB(1)
//     console.log(user.name)
//     let friend1 = await findUserInDB(user.friend)
//     console.log(friend1.name)
//     let friend2 = await findUserInDB(friend1.friend)
//     console.log(friend2.name)
// }
// run();

//CHAIN of promise
// const lastPromise = findUserInDB(1)
//     .then(user => {
//         console.log(user)
//         return user;
//     })
//     .then(user => findUserInDB(user.friend))
//     .then(friend1 => {
//         console.log(friend1)
//         return friend1
//     })
//     .then(friend1 => findUserInDB(friend1.friend))
//     .then(friend2 => console.log(friend2.name))

// const promise1 = axios.get('test_url')
//     .then((data) => {
//         return data
//         // return  console.log(data)
//     })
// const promise2 = findUserInDB(1)
//     .then((userData) => {
//         return userData
//     })
//     .catch(() => {
//     })

//ALL Promise
//const otherPromise = Promise.all([promise1, promise2])
// otherPromise
//     .then((results) => {
//         const dataFromServer = results[0];
//         const userFromDB = results[1];
//         // console.log(results)
//         console.log(dataFromServer.vacancies[0].title + '; ' + userFromDB.name)
//     })
//     .catch(() => {
//         console.log('initialization failed. Try later')
//     })

//ALLSettled Promise
// const otherPromise2 = Promise.allSettled([promise1, promise2])
// otherPromise2
//     .then((results) => {
//         console.log(results)
//
//         const dataFromServer =
//             results[0].status === "fulfilled"
//                 ? results[0].value
//                 : results[0].vacancies;
//         const userFromDB = results[1].status === "fulfilled"
//             ? results[1].value
//             : {name: results[1].reason};
//         console.log(dataFromServer.vacancies[0].title + '; ' + userFromDB.name)
//     })

//TEST Promise
// const promise = server.getData();
// console.log(promise);
// server.getData()
//     .then((data) => {
//         console.log('then1', data);
//         return 10
//     })
//     .then((data) => {
//         console.log('then2', data);
//     })
//     .catch((error) => {
//         console.log('cath1', error)
//     })
//     .then((data) => {
//         console.log('then3', data);
//     })
// .finally(() => {
//     console.log('finally')
// })

//FIRST Promise
// const server = {
//     getData() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // resolve('some data');
//                 reject('some error');
//             }, 2000)
//         })
//     }
// }

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
// const pr = new Promise(() => {
//     console.log('Promise is created')
// })
//
// console.log(pr)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// const pr = Promise.resolve('Promise Data')
//
// pr.then(data => {
//     console.log(data)
// })
// console.log(pr)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
// const pr = Promise.reject('Promise Error')
//
// pr.catch(data => {
//     console.log(data)
// )
// console.log(pr)
// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
// const pr = new Promise((res) => {
//     setTimeout(() => {
//         res('Promise Data')
//     }, 3000)
// })
//
// pr.then(data => {
//     console.log(data)
// })
// console.log(pr)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// let handlePromise = {
//     promise: null,
//     resolve: null,
//     reject: null,
//     onSuccess: function (paramName) {
//         console.log(`Promise успешно разрешен с данными: ${paramName}`);
//     },
//     onError: function (paramName) {
//         console.log(`Promise отклонен с ошибкой: ${paramName}`);
//     },
// };
// export let createPromiseHandle = (handlePromise) => {
//     handlePromise.promise = new Promise((res, rej) => {
//         res(console.log(handlePromise.resolve = res))
//         res(console.log(handlePromise.reject = rej))
//     })
//     return console.log(handlePromise)
// }
// export let resolvePromiseHandle = function (handlePromise) {
//     handlePromise.resolve('resolved data')
//
// };
// // console.log(createPromiseHandle(handlePromise))

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
// const myNamePromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("My name is");
//     }, 1000);
// });
//
// const onSuccess = (name) => {
//     return name + " YourName"; // Замените "YourName" на ваше имя
// };
//
// const print = (value) => {
//     console.log(value);
// };
//
// myNamePromise
//     .then(onSuccess)
//     .then(print)
//     .catch((error) => {
//         console.log("Произошла ошибка:", error);
//     });


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let pr1 = new Promise((res) => {
    setTimeout(() => {
        console.log("Выполнение асинхронной операции pr1");
        res({name: "Anna"})
    }, 2000)
}).then((value) => {
    console.log(`Из промиса получены данные: ${value.name}`)
})

let pr2 = new Promise((res) => {
    setTimeout(() => {
        console.log("Выполнение асинхронной операции pr2");
        res({age: 16})
    }, 3000)
}).then((value) => {
    console.log(`Из промиса получены данные: ${value.age}`)
})

let pr3 = new Promise((res) => {
    setTimeout(() => {
        console.log("Выполнение асинхронной операции pr3");
        res({city: 'Minsk'})
    }, 4000)
}).then((value) => {
    console.log(`Из промиса получены данные: ${value.city}`)
})






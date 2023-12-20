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
const pr = new Promise(() => {
    console.log('Promise is created')
})

console.log(pr)
let axios = {
    get() {
        let pr = new Promise((res, rej) => {
            setTimeout(() => {
                res({
                    message: 'hello',
                    a: 1,
                    v: 5,

                })
            }, 3000)
        })
        return pr
    }
}

let promise = axios.get();

promise.then((message) => {
    return message.message
})
    .then((message) => console.log(message))

// let a = {
//     sum(a, b) {
//         console.log(a + b)
//         return this
//     }
// }
//
// a.sum(1, 1)
//     .sum(2, 2)
//     .sum(3, 2)
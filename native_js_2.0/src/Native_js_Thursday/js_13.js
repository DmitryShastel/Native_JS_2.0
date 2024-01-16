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
// promise.then((message) => {
//     return message.message
// })
//     .then((message) => console.log(message))
let fetch = (url) => {
    return new Promise((res, reg) => {
        switch (url) {
            case 'google': {
                setTimeout(() => {
                    res({date: 'from google'})
                }, 2000)
                break
            }
            case 'microsoft': {
                setTimeout(() => {
                    res({date: 'from microsoft'})
                }, 3000)
                break
            }
            case 'it-kamasutra': {
                setTimeout(() => {
                    res({date: 'from kamasutra'})
                }, 1000)
                break
            }
        }
    })
}

// fetch('it-kamasutra')
//     .then(data => {
//         console.log(data);
//         return fetch('google')
//     })
//     .then(data => {
//         console.log(data);
//         return fetch('microsoft')
//     })
//     .then(data => console.log(data))


let myPromise = new Promise((res, rej) => {
    res(
        setTimeout(() => {
            console.log('hello')
        }, 2000)
    )
    console.log('1')
    console.log('2')
})

myPromise.then((data) => {
    return console.log('hello2')
})

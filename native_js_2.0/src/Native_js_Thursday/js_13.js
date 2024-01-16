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

//
// let myPromise = new Promise((res, rej) => {
//     doAfter(){}
// })

let doAfter = (num) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res()
        }, num)
    })

};

doAfter(5).then(() => console.log('я сработал через 5 сек'))
doAfter(2).then(() => console.log('я сработал через 2 сек'))
doAfter(3).then(() => console.log('я сработал через 3 сек'))

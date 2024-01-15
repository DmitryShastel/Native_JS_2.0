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

fetch('google').then(data => console.log(data))
fetch('microsoft').then(data => console.log(data))
fetch('it-kamasutra').then(data => console.log(data))
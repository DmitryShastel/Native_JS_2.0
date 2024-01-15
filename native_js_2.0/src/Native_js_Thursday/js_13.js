let axios = {
    get() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res('hello')
            }, 3000)
        })
    }
}

axios.get().then(data => console.log(data))
class User {
    constructor(name, site, dob) {
        this.name = name;
        this.site = site;
        this.dob = dob;
    }

    hello() {
        console.log(`I am ${this.name} from ${this.site}`)
    }
}

const u1 = new User('Dima', 'iy-incubator', new Date(1990, 11, 8))

console.log(u1)
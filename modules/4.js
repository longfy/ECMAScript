import {
    x,
    y
} from './5.js'
const sum = () => {
    console.log(x + y);
    return x + y;
}
const show = () => {
    console.log({
        x,
        y
    })
    return {
        x,
        y
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showName() {
        return `我的名字叫${this.name}，${this.age}岁了`;
    }
}
export {
    x,
    y,
    sum,
    show
}
export default {
    Person
}
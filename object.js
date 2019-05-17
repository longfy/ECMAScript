{
    /**
     * 对象的简洁语法
     */
    let name = '张三';
    let age = 11;
    let obj = {
        name,
        age,
        showName() { // 不要使用箭头函数，否则this会指向window
            return this.name;
        },
        showAge() {
            return this.age;
        }
    }
    console.log(obj)
    console.log(obj.showName(), obj.showAge())
} {
    /**
     * 对象里边千万不能用箭头函数
     */
    var name = '李四';
    var age = 18;
    let obj = {
        name: '张三',
        age: 11,
        showName: () => {
            return this.name;
        },
        showAge: () => {
            return this.age;
        }
    }
    console.log(this) // window
    console.log(obj.showName(), obj.showAge()) // 李四 18
} {
    /**
     * Object.is(a,b)
     * 比较两个东西相等
     */
    console.log(NaN == NaN); // false
    console.log(Number.isNaN(NaN)); // true
    console.log(Object.is(NaN, NaN)); // true
    console.log(+0 == -0); // true
    console.log(Object.is(+0, -0)); // false
} {
    /**
     * Object.assign(目标对象,obj1,obj2,...objn)
     * 用来合并参数
     * 若有重复，后面的会覆盖前面的
     */
    let obj1 = {
        a: 1
    };
    let obj2 = {
        b: 2,
        a: 2
    };
    let obj3 = {
        c: 3
    };
    console.log(Object.assign({}, obj1, obj2, obj3)); // {a: 2, b: 2, c: 3}
} {
    /**
     * Object.assign({},obj)
     * 用来复制对象
     */
    let arr = ['apple', 'banana', 'oranage'];
    let arr2 = Object.assign([], arr);
    arr2.push('123');
    console.log(arr); // ["apple", "banana", "oranage"]
    console.log(arr2); // ["apple", "banana", "oranage", "123"]
} {
    /**
     * Object.keys()
     * Object.values()
     * Object.entries()
     */
    let json = {
        a: 1,
        b: 2,
        c: 3
    };
    for (let key of Object.keys(json)) {
        console.log(key);
    }
    for (let value of Object.values(json)) {
        console.log(value);
    }
    for (let item of Object.entries(json)) {
        console.log(item);
    }
    for (let [key, val] of Object.entries(json)) {
        console.log(key, val);
    }
} {
    /**
     * 对象的扩展运算符
     */
    let {
        x,
        y,
        ...z
    } = {
        x: 1,
        y: 2,
        a: 3,
        b: 4
    };
    console.log(x, y, z) // 1 2 {a: 3, b: 4}
} {
    /**
     * 对象的扩展运算符
     */
    let json = {
        a: 1,
        b: 2
    };
    let json2 = {
        ...json
    };
    delete json2.b;
    console.log(json); // {a: 1, b: 2}
    console.log(json2); // {a: 1}
}
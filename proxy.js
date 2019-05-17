{
    /**
     * new Proxy(target,handler);
     * let obj = new Proxy(被代理的对象,对代理的对象做什么操作);
     * handler:{
     *  set(){},
     *  get(){},
     *  deleteProperty(){},
     *  has(){},
     *  apply()
     * }
     */
    let obj = {
        name: '张三'
    };
    let newObj = new Proxy(obj, {
        get(target, property) {
            console.log(`您访问了${property}属性！`);
            return target[property];
        }
    });
    console.log(newObj.name);
    console.log('--------------');
}

{
    /**
     * get()
     */
    let obj = {
        name: '张三'
    };
    let newObj = new Proxy(obj, {
        get(target, property) {
            if (property in target) {
                return target[property];
            } else {
                throw ReferenceError(`此对象没有${property}属性！`);
            }
        }
    });
    console.log(newObj.name);
    // console.log(newObj.age); //Uncaught ReferenceError: 此对象没有age属性！
    console.log('-------------------');
}

{
    /**
     * set()
     */
    let obj = {
        name: '张三'
    };
    let newObj = new Proxy(obj, {
        set(target, property, value) {
            console.log(target, property, value);
        }
    });
    newObj.age = 123;
    console.log('-------------------');
}

{
    /**
     * set()
     */
    let obj = {
        name: '张三'
    };
    let newObj = new Proxy(obj, {
        set(target, property, value) {
            if (property in target) {
                throw ReferenceError(`此对象已有${property}属性！`);
            }
            target[property] = value;
        }
    });
    // newObj.name = '李四'; //Uncaught ReferenceError: 此对象已有name属性！
    newObj.age = 123;
    console.log(obj);
    console.log('-------------------');
}

{
    /**
     * deleteProperty()
     */
    let obj = {
        a: 1,
        b: 2
    };
    let newObj = new Proxy(obj, {
        deleteProperty(target, property) {
            if (!(property in target)) {
                throw ReferenceError(`此对象没有${property}属性！`);
            }
            delete target[property];
        }
    });
    // delete newObj.name; //Uncaught ReferenceError: 此对象没有name属性！
    delete newObj.a;
    console.log(obj); //b:2
    console.log('-------------------');
}

{
    /**
     * has()
     */
    let obj = {
        a: 1,
        b: 2
    };
    let newObj = new Proxy(obj, {
        has(target, property) {
            return property in target;
        }
    });
    console.log('a' in newObj); //true
    console.log('name' in newObj); //false
    console.log('-------------------');
}

{
    /**
     * apply()
     */
    function fn() {
        return '我是函数';
    }

    function sum(a, b) {
        return a + b;
    }
    let newFn = new Proxy(fn, {
        apply() {
            return '函数么？';
        }
    });
    let newSum = new Proxy(sum, {
        apply(target, context, args) {
            return target(...args);
        }
    });
    console.log(newFn());
    console.log(newSum(2, 3));
    console.log('-------------------');
}

{
    /**
     * Reflect()
     */
    function sum(a, b) {
        return a + b;
    }
    let newSum = new Proxy(sum, {
        apply(target, context, args) {
            return Reflect.apply(...arguments);
        }
    });
    console.log(newSum(2, 3));
}
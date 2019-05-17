{
    /**
     * forEach() 用来代替普通的 for
     * 可以接收两个参数，第一个是回调函数
     * 第二个是this的指向，如果用箭头函数，this会指向当前定义函数所在的对象
     */
    let arr = ['apple', 'banana', 'orange'];
    arr.forEach(function(val, index, arr) {
        console.log(this, val, index, arr);
    }, '123')
    arr.forEach((val, index, arr) => {
        console.log(this, val, index, arr);
    }, '123')
} {
    /**
     * map() 做数据映射，一般配合 return 使用
     * 没有return 就相当于 forEach
     * 所以没有return 就用 forEach
     */
    let arr = [
        { name: '张三', age: 18, sex: '男', hidden: true },
        { name: '李四', age: 18, sex: '女', hidden: false },
        { name: '王五', age: 18, sex: '男', hidden: true },
        { name: '赵六', age: 18, sex: '女', hidden: false },
    ]
    let info = arr.map((item, index, arr) => {
        return {
            n: item.name + '123',
            a: item.age + 100,
            s: `^_^${item.sex}`,
            h: item.hidden
        };
    })
    console.log(info)
} {
    /**
     * filter() 过滤，通过某个字段过滤一些不合格的数据
     */
    let arr = [
        { name: '张三', age: 18, sex: '男', hidden: true },
        { name: '李四', age: 18, sex: '女', hidden: false },
        { name: '王五', age: 18, sex: '男', hidden: true },
        { name: '赵六', age: 18, sex: '女', hidden: false },
    ]
    let info = arr.filter((item, index, arr) => {
        return item.hidden == false;
    })
    console.log(info)
} {
    /**
     * some() 类似查找的功能，数组里某一个符合条件，返回true
     */
    let arr = ['apple', 'banana', 'orange'];
    let bol = arr.some((val, index, arr) => {
        return val == 'banana';
    })

    function findInArray(arr, item) {
        return arr.some((val, index, arr) => {
            return val == item;
        })
    }
    console.log(bol, findInArray(arr, 'banana'));
} {
    /**
     * every() 数组里所有项都满足，返回true
     */
    let arr = [1, 3, 5, 7, 9];
    let bol = arr.every((val, index, arr) => {
        return val % 2 == 1;
    })
    console.log(bol);
}

{
    /**
     * reduce() 从数组的左边开始
     * reduceRight() 从右边开始
     */
    let arr = [2, 2, 3];
    let sum = arr.reduce((prve, cur, index, arr) => {
        return prve + cur; // 求数组的和
    })
    let res = arr.reduce((prev, cur, index, arr) => {
        return Math.pow(prev, cur); // 求阶乘，也可用幂 "**" prev ** cur
    })
    console.log(sum, res, 2 ** 3);
}

{
    /**
     * for...of
     * arr.keys()       数组的下标
     * arr.entries()    数组的某一项
     */
    let arr = ['apple', 'banana', 'orange'];
    for (let val of arr) {
        console.log(val)
    }
    for (let index of arr.keys()) {
        console.log(index)
    }
    for (let item of arr.entries()) {
        console.log(item);
    }
    for (let [key, value] of arr.entries()) {
        console.log(key, value);
    }
} {
    /**
     * Array.from(arguments)
     * 将类数组(获取一组元素/arguments)对象转换为数组
     * 具备length，可遍历的对象 就可以
     */
    function fn() {
        console.log(arguments);
        // let arr = [].slice.call(arguments); //ES5
        // let arr = Array.from(arguments);    //ES6
        let arr = [...arguments]; //ES7
        console.log(arr);
    }
    fn(1, 2, 3, 4, 5);
    console.log(Array.from('string'))
    console.log('string'.split(''))
    console.log(Array.from({ 0: 'apple', 1: 'banana', 2: 'orange', length: 3 }))
} {
    /**
     * of() 把一组值转成数组
     */
    let arr = Array.of('apple', 'banana', 'orange');
    console.log(arr);
} {
    /**
     * find()查找，找出第一个符合条件的数组成员，如果没有找到，返回undefined
     * findIndex()找的是未知，没有找到返回-1
     */
    let arr = [1, 4, 7, 3, 8, 2, 11];
    let res = arr.find((val, index, arr) => {
        return val > 10;
    })
    let a = arr.findIndex((val, index, arr) => {
        return val > 11;
    })
    console.log(res, a)
} {
    /**
     * fill(填充的东西,开始位置,结束位置) 填充
     */
    let arr = new Array(10);
    arr.fill('默认值', 1, 3);
    console.log(arr)

} {
    /**
     * includes()
     * 查找数组里面是否存在某个值
     */
    let arr = ['apple', 'banana', 'orange'];
    console.log(arr.includes('apple'))
}
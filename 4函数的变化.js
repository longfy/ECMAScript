{
    /**
     * 函数参数的默认值
     */
    function show(a, b) {
        a = a || '欢迎';
        b = b || 'mmr';
        console.log(a, b);
    }
    show('welcome', '牧码人');
    show('welcome');
    show('', '牧码人');
} {
    /**
     * 函数参数的默认值
     */
    function show(a = '欢迎', b = 'mmr') {
        console.log(a, b);
    }
    show('welcome', '牧码人');
    show('welcome');
    show(undefined, '牧码人');
} {
    /**
     * 函数参数的默认值
     */
    function show({ x = 0, y = 0 }) {
        console.log(x, y)
    }
    show({ x: 1 })
} {
    /**
     * 函数参数默认已经定义了，不能重复定义
     */
    function show(a) {
        // let a = 2; // Identifier 'a' has already been declared
        console.log(a);
    }
    show(1)
} {
    /**
     * 扩展运算符(...)
     * 展开数组
     */
    let arr = ['apple', 'banana'];

    function show(a, b, c) {
        console.log(a, b, c);
    }
    console.log(arr);
    console.log(...arr);
    show(...[1, 9, 8]);
} {
    /**
     * 扩展运算符(...)
     * 收起数组
     */
    function show(...arr) {
        console.log(arr);
    }
    show(1, 2, 3, 4, 5);
} {
    /**
     * sort()
     * 数组的排序
     */
    function show(...arr) {
        console.log(arr);
        return arr.sort();
    }
    console.log(show(5, 4, 3, 2, 1));
} {
    /**
     * 剩余运算符(...)
     * 必须放最后，不能放在中间
     */
    function show(a, b, ...c) {
        console.log(a, b);
        console.log(c);
    }
    show(1, 2, 3, 4, 5);
} {
    /**
     * 复制数组
     */
    let arr = [1, 2, 3, 4, 5];
    let arr1 = Array.from(arr);
    let arr2 = [...arr];
    console.log(arr, arr1, arr2);
} {
    /**
     * 箭头函数
     */
    // function show() {
    //     return 1;
    // }
    // console.log(show())
    let show = (a, b) => {
        console.log(a + b);
        return a + b;
    }
    show(1, 2)
} {
    /**
     * 箭头函数需注意问题
     * 1、this问题
     * 2、箭头函数没有arguments
     * 3、箭头函数不能当构造函数
     */
    var id = 10; //用var定义一个全局变量，变量属于window，let、const不同
    let json = {
        id: 1,
        show: function() {
            console.log(this.id);
        },
        show1: function() {
            setTimeout(function() { // this指向window，也就是运行时的对象
                console.log(this.id); // 10
            }, 200)
        },
        show2: function() {
            setTimeout(() => { // this指向当前对象，也就是定义函数时所处的对象，不是运行时的对象
                console.log(this.id)
            }, 200)
        }
    }
    let show3 = () => {
        // console.log(arguments); // arguments is not defined
    }
    let show4 = (...arg) => {
        console.log(arg);
    }
    json.show();
    json.show1();
    json.show2();
    show3(1, 2, 3, 4, 5);
    show4(1, 2, 3, 4, 5);
}
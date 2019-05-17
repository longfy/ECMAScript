{
    /**
     * var
     * 存在变量提升(先使用后定义)，存在预解析
     * 可以重复定义，不会报错
     * 没有块级作用域
     */
    var a = 1;

    function fn() {
        console.log(a);
        var a = 5;
    }
    fn();
    if (true) {
        var b = 10;
    }
    console.log(10)
} {
    /**
     * let
     * 没有预解析，不存在变量提升
     * 不能重复定义，会报错
     * 有块级作用域{}
     * for(父作用域){子作用域}
     */
    let a = 12;

    function fn() {
        console.log(a);
        let a = 5;
    }
    // fn(); // a is not defined
    let b = 1;
    // let b = 2; // Identifier 'b' has already been declared
    let c = 10; {
        let c = 1;
        console.log(c); // 1
    }
    for (let i = 0; i < 10; i++) {
        let i = 1;
        console.log(i); // (10)1
    }
} {
    /**
     * const
     * 特性和let一样，不同的是const定义的是常量，不能修改
     */
    var a;
    let b;
    // const c; // Missing initializer in const declaration
    a = 1;
    b = 2;
    c = 3;
    console.log(a); // 1
    console.log(b); // 2
    // console.log(c);
} {
    const arr = [];
    arr.push('apple');
    console.log(arr);
} {
    /**
     * Object.freeze() 冻结
     */
    const arr = Object.freeze([]);
    arr.push('apple'); // Cannot add property 0, object is not extensible
} {
    /**
     * 立即执行函数
     */
    (function() {
        // todo
    })()
} {
    /**
     * ES6立即执行函数
     */
    {
        //todo
    }
}
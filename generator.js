/**
 * generator函数
 * 解决异步深度嵌套
 */
{
    function* gen() {
        yield 'welcome';
        yield 'to';
        return 'ChangSha';
    }
    let g = gen();
    console.log(g);
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
    console.log(g.next());
} {
    /**
     * for..of自动遍历generator
     * return 的东西不会遍历
     */
    function* gen() {
        yield 'welcome';
        yield 'to';
        return 'ChangSha';
    }
    let g = gen();
    for (let val of g) {
        console.log(val);
    }
} {
    /**
     * 解构赋值generator
     */
    function* gen() {
        yield 'welcome';
        yield 'to';
        return 'ChangSha';
    }
    let [a, b, c] = gen();
    console.log(a, b, c);
} {
    /**
     * 解构赋值generator
     * ...扩展运算符
     */
    function* gen() {
        yield 'welcome';
        yield 'to';
        yield 'ChangSha';
        return '!!!';
    }
    let [a, ...b] = gen();
    console.log(a, b);
} {
    /**
     * 解构赋值generator
     * ...扩展运算符
     */
    function* gen() {
        yield 'welcome';
        yield 'to';
        yield 'ChangSha';
        return '!!!';
    }
    console.log(...gen());
} {
    /**
     * 解构赋值generator
     * Array.from()
     */
    function* gen() {
        yield 'welcome';
        yield 'to';
        yield 'ChangSha';
        return '!!!';
    }
    console.log(Array.from(gen()));
} {
    function* gen() {
        yield 'welcome';
        yield 'to';
        yield 'ChangSha';
        return '!!!';
    }
    let g = gen();
    let val = g.next().value;
    console.log(g.next(val).value);
}
/**
 * 关于异步解决方案
 * 1、回调函数
 * 2、时间监听
 * 3、发布/订阅
 * 4、Promise对象
 * 5、async(ES2017)
 */
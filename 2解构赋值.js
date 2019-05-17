{
    let a = 1;
    let b = 2;
    let c = 3;
    console.log(a, b, c);
    let arr = [1, 2, 3];
    console.log(arr[0], arr[1], arr[2]);
} {
    /**
     * 数组解构赋值
     * 注意：左右两边结构格式必须一致
     */
    let [a, b, c] = [1, 2, 3];
    console.log(a, b, c)
} {
    let [a, b, c] = [1, [2, 3]];
    console.log(a, b, c); // (2) [2, 3] undefined
} {
    let [a, [b, c]] = [1, [2, 3]];
    console.log(a, b, c);
} {
    /**
     * 对象结构赋值
     */
    let json = {
        name: '张三',
        age: 18,
        job: '码畜'
    };
    let { name, age, job: j } = json;
    console.log(name, age, j);
} {
    /**
     * 默认值
     */
    let [a, b, c = '默认值'] = ['aa', 'bb'];
    console.log(a, b, c);
} {
    /**
     * 交换值
     */
    let a = 1,
        b = 2;
    [a, b] = [b, a];
    console.log(a, b);
} {
    /**
     * top是顶层对象
     */
    function getPos() {
        return {
            left: 10,
            top: 20
        }
    }

    let { left, top: t } = getPos();
    console.log(left, t);
} {
    /**
     * 函数结构赋值
     */
    function show({ a, b = '默认值' }) {
        console.log(a, b)
    }
    show({ a: 1 });
}
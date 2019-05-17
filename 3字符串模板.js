{
    /**
     * 字符串连接
     */
    let name = '张三';
    let age = 18;
    let str = '这个人叫' + name + '，年龄是' + age + '岁';
    console.log(str)
} {
    /**
     * 字符串模板ES6
     */
    let name = '张三';
    let age = 18;
    let str = `这个人叫${name}，年龄是${age}岁`;
    console.log(str)
} {
    /**
     * 字符串查找
     * str.indexOf(要找的东西) 
     * 返回索引(位置)，没有找到返回-1
     */
    let str = 'apple banana orange';
    if (str.indexOf('banana') != -1) {
        console.log(true);
    } else {
        console.log(false);
    }
} {
    /**
     * 字符串查找
     * str.includes(要找的东西)
     * 返回值 true/false
     */
    let str = 'apple banana orange';
    console.log(str.includes('banana'));
} {
    /**
     * str.startWith(要检测的东西)
     * 字符串是否以谁开头
     */
    let str = 'file:///F:/www/h5/view/demo.html';
    let str2 = 'https://www/baidu.com';
    console.log(str.startsWith('http'));
    console.log(str2.startsWith('http'));
} {
    /**
     * str.endsWith(要检测的东西)
     * 字符串是否以谁结尾
     */
    let str = 'aaa.png';
    let str2 = 'aaa.jpg';
    console.log(str.endsWith('png'));
    console.log(str2.endsWith('png'));
} {
    /**
     * str.repeat(次数)
     * 重复字符串
     */
    let str = '牧码人';
    console.log(str.repeat(3));
} {
    /**
     * str.padStart(字符串的长度，要填充的东西)
     * 往前填充
     */
    let str = 'a';
    let padStr = 'xxx';
    console.log('a'.padStart(str.length + padStr.length, 'xxx'));
} {
    /**
     * str.padEnd(字符串的长度，要填充的东西)
     * 往后填充
     */
    let str = 'a';
    let padStr = 'xxx';
    console.log('a'.padEnd(str.length + padStr.length, 'xxx'));
}
/**
 * Symbol
 * 1、Symbol不能new
 * 2、Symble()返回时一个唯一的值(一般用作一个key或者定义一些唯一、私有的东西)
 * 3、Symbol是一个单独的数据类型，基本类型
 * 4、如果symbol作为key，用for in循环，出不来
 */
{
    let syml = Symbol('aaa');
    console.log(syml);
    console.log(typeof syml);
} {
    let symbol = Symbol('name');
    let json = {
        a: 'apple',
        b: 'banana',
        [symbol]: '张三'
    }
    console.log(json[symbol]);
    for (let key in json) {
        console.log(key);
    }
}
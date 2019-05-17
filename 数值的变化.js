{
    /**
     * 二进制(Binary)
     */
    let a = 0b010101;
    console.log(a);
}

{
    /**
     * 八进制(Octal)
     */
    let a = 0o666;
    console.log(a);
}

{
    /**
     * 16进制
     * #fff
     */
}

{
    /**
     * Number()
     * parseInt()
     * parseFloat()
     */
    let a = 12;
    console.log(isNaN(a)); //false
}

{
    /**
     * Number.isNaN(NaN)
     * Number.isFinite()判断是不是数字
     * Number.isInteger()判断是不是整数
     * Number.parseInt()解析一个字符串，并返回一个整数
     * Number.parseFloat()解析一个字符串，并返回一个浮点数
     */
    let a = 12;
    let b = -12;
    let c = 12.5;
    let str = 'welcome';
    console.log(Number.isNaN(a)); //false
    console.log('-----------------------------');
    console.log(Number.isFinite(a)); //true
    console.log(Number.isFinite(b)); //true
    console.log(Number.isFinite(c)); //true
    console.log(Number.isFinite(str)); //false
    console.log('-----------------------------');
    console.log(Number.isInteger(a)); //true
    console.log(Number.isInteger(c)); //false
    console.log('-----------------------------');
}

{
    /**
     * 安全整数 -(2^53-1) 到 (2^53-1) 包含-(2^53-1)和(2^53-1)
     * Number.is
     * Number.MAX_SAFE_INTEGER  最大安全整数
     * Number.MIN_SAFE_INTEGER  最小安全整数
     */
    let a = 2 ** 53 - 1;
    let b = 2 ** 53;
    let c = -(2 ** 53 - 1);
    let d = -(2 ** 53);
    console.log(Number.isSafeInteger(a));
    console.log(Number.isSafeInteger(b));
    console.log(Number.isSafeInteger(c));
    console.log(Number.isSafeInteger(d));
    console.log('-----------------------------');
    console.log(a);
    console.log(Number.MAX_SAFE_INTEGER);
    console.log('-----------------------------');
    console.log(c);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log('-----------------------------');
}

{
    /**
     * Math.abs()返回一个数的绝对值
     * Math.sqrt()返回一个数的平方根
     * Math.sin()返回一个数的正玄值
     * Math.cos()返回一个数的余弦值
     * Math.trunc()去除一个数的小数部分
     * Math.sign()判断一个数是正数、复数、0
     * Math.cbrt()计算一个数的立方根
     */
    console.log(Math.trunc(1.23)); //1
    console.log('-----------------------------');
    console.log(Math.sign(6)); //-1
    console.log(Math.sign(-6)); //1
    console.log(Math.sign(0)); //0
    console.log(Math.sign(-0)); //-0
    console.log('-----------------------------');
    console.log(Math.cbrt(27)); //3
    console.log(Math.cbrt(64)); //4
}
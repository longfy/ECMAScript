/**
 * 关于异步解决方案
 * 1、回调函数
 * 2、时间监听
 * 3、发布/订阅
 * 4、Promise对象
 * 5、async(ES2017)
 */
{
    /**
     * promise方式
     */
    const fs = require('fs');
    //简单的封装，fs封装成一个promise
    const readFile = function (fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }
    //promise
    readFile('data/a.txt').then(res => {
        console.log(res.toString());
        return readFile('data/a.txt');
    }).then(res => {
        console.log(res.toString());
        return readFile('data/b.txt');
    }).then(res => {
        console.log(res.toString());
        return readFile('data/c.txt');
    })
} {
    /**
     * generator
     */
    const fs = require('fs');
    //简单的封装，fs封装成一个promise
    const readFile = function (fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }

    function* gen() {
        yield readFile('data/a.txt');
        yield readFile('data/b.txt');
        yield readFile('data/c.txt');
    }
    let g = gen();
    g.next().value.then(res => {
        console.log(res.toString());
        return g.next().value;
    }).then(res => {
        console.log(res.toString());
        return g.next().value;
    }).then(res => {
        console.log(res.toString());
    })
} {
    /**
     * async function fn() 表示异步，这个函数里面有异步任务
     * let result = await xxx   表示后面的任务需要等待
     * 特点：
     *      1、await只能放到async函数中
     *      2、相比generator语义化更强
     *      3、await后面可以是promise对象，也可以是数组、字符串、布尔
     *      4、async函数返回是一个promise
     *      5、只要await语句后面Promise状态变成reject，那么整个async函数会中断执行
     */
    const fs = require('fs');
    //简单的封装，fs封装成一个promise
    const readFile = function (fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }
    async function fn() {
        try { // 建议：只要有await，就要try{}catch(e){}
            //这里要用var let会使外部console访问不到变量f1..
            var f1 = await readFile('data/a.txt');
            var f2 = await readFile('data/b.txt');
            var f3 = await readFile('data/c.txt');
        } catch (e) {}
        console.log(f1.toString());
        console.log(f2.toString());
        console.log(f3.toString());
    }
    fn();
    // console.log(fn()); Promise { <pending> }
} {
    /**
     * Promise.all()
     */
    const fs = require('fs');
    //简单的封装，fs封装成一个promise
    const readFile = function (fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile(fileName, (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }
    async function fn() {
        let [f1, f2, f3] = await Promise.all([
            readFile('data/a.txt'),
            readFile('data/b.txt'),
            readFile('data/c.txt'),
        ]);
        console.log(f1.toString());
        console.log(f2.toString());
        console.log(f3.toString());
    }
    fn();
}
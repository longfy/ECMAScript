{
    let a = 1;
    // let a = 10;
    let promise = new Promise(function (resolve, reject) {
        // resolve 成功调用
        // reject 失败调用
        if (a == 10) {
            resolve('成功！');
        } else {
            reject('失败！');
        }
    });
    // promise.then(success, fail);
    promise.then(res => {
        console.log(res)
    }, err => {
        console.log(err);
    })
} {
    let a = 1;
    // let a = 10;
    let promise = new Promise(function (resolve, reject) {
        // resolve 成功调用
        // reject 失败调用
        if (a == 10) {
            resolve('成功！');
        } else {
            reject('失败！');
        }
    });
    // promise.then(success, fail);
    promise.then(res => {
        console.log(res)
    }).catch(err => { // reject，发生错误，别名
        console.log(err);
    })
} {
    /**
     * 常用法
     */
    // new Promise().then(res=>{
    //     console.log('成功！');
    // }).catch(err=>{
    //     console.log('失败！');
    // })
} {
    /**
     * 将现有的东西转成一个promise对象
     */
    let p1 = Promise.resolve('aaa');
    p1.then(res => {
        console.log(res)
    })
    let p2 = Promise.reject('bbb');
    p2.catch(err => {
        console.log(err)
    })
} {
    /**
     * Promise.all()
     * 把promise打包扔到一个数组里面，打包完还是一个promise对象
     * Promise.all()必须保证里边全是resolve状态，都是成功的
     */
    let p1 = Promise.resolve('aaa');
    let p2 = Promise.resolve('bbb');
    let p3 = Promise.resolve('ccc');
    Promise.all([p1, p2, p3]).then(res => {
        let [res1, res2, res3] = res;
        console.log(res1, res2, res3);
    })
} {
    /**
     * promise.race()
     * 只要有一个是成功的就返回
     */
    let p1 = Promise.resolve('aaa');
    let p2 = Promise.resolve('bbb');
    let p3 = Promise.resolve('ccc');
    Promise.race([p1, p2, p3]).then(res => {
        let [res1, res2, res3] = res;
        console.log(res1, res2, res3);
    })
} {
    /**
     * 模拟登录
     */
    let status = 1;
    let userLogin = (resolve, reject) => {
        setTimeout(() => {
            if (status == 1) {
                resolve({
                    data: '登录成功',
                    msg: '登录成功',
                    token: 'adagdssfgs'
                })
            } else {
                reject('失败！');
            }
        }, 1000)
    }
    let getUserInfo = (resolve, reject) => {
        setTimeout(() => {
            if (status == 1) {
                resolve({
                    data: '获取用户信息成功',
                    msg: '获取用户信息成功',
                    token: 'adagdssfgs'
                })
            } else {
                reject('失败！')
            }
        }, 1000)
    }
    new Promise(userLogin).then(res => {
        console.log(res.msg);
        return new Promise(getUserInfo);
    }).then(res => {
        console.log(res.msg);
    })
}
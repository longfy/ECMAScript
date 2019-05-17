{
    /**
     * map
     * map的key可以是任意类型
     * map.set(key,value)设置一个值
     * map.get(key)获取一个值
     * map.delete(kye)删除一项
     * map.has(kye)判断有没有
     * map.clear()清空
     */
    let map = new Map();
    // map.set(key,value);
    let json = {
        a: 1,
        b: 2
    };
    map.set('name', '张三');
    map.set(json, 'aaa');
    map.set('aaa', json);
    console.log(map);
    console.log(map.get(json));
    console.log(map.get('aaa'));
    console.log('---------------------');
    map.delete('aaa');
    console.log(map.get('aaa')); //undefined
    console.log(map.has('aaa')); //false
    console.log('---------------------');
    map.clear('aaa');
    console.log(map); //Map(0) {}
}

{
    /**
     * 循环
     * for (let [key, value] of map) {}
     * for (let key of map.keys()) {}
     * for (let value of map.values()) {}
     * for (let [k,v] of map.entries()) {}
     * map.forEach((value,key)=>{})
     */
    let map = new Map();
    map.set('a', 1);
    map.set('b', 2);
    map.set('c', 3);
    for (let [key, value] of map) {
        console.log(key, value);
    }
    map.forEach((value, key) => {
        console.log(key, value);
    })
}

{
    /**
     * WeakMap
     * key只能是对象
     */
    let wMap = new WeakMap();
    let json = {
        a: 1,
        b: 2
    }
    wMap.set(json, 'aaa');
    console.log(wMap);
}

{
    /**
     * WeakMap
     * key只能是对象
     */
    let wMap = new WeakMap();
    let json = {
        a: 1,
        b: 2
    }
    wMap.set('aaa', json);
    console.log(wMap); //Uncaught TypeError: Invalid value used as weak map key
}
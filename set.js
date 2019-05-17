{
    /**
     * new Set([])储存数组
     * 用法 new Set(['a','b'])
     */
    let setArr = new Set(['a', 'b', 'c']);
    console.log(setArr);
}

{
    /**
     * set数据结构不能有重复的值
     */
    let setArr = new Set(['a', 'b', 'c', 'a']);
    console.log(setArr);
}

{
    /**
     * setArr.add('a')
     * 添加
     */
    let setArr = new Set();
    setArr.add('a');
    setArr.add('a');
    setArr.add('b');
    console.log(setArr);
}

{
    /**
     * setArr.delete()
     * 删除
     */
    let setArr = new Set(['a', 'b', 'c']);
    setArr.delete('b');
    console.log(setArr);
}

{
    /**
     * setArr.has('a')
     * 判断setArr里面有没有此值
     */
    let setArr = new Set(['a', 'b', 'c']);
    console.log(setArr.has('a'));
}

{
    /**
     * setArr.size()
     * 查看个数
     */
    let setArr = new Set(['a', 'b', 'c']);
    console.log(setArr.size);
}

{
    /**
     * setArr.clear()
     * 清除所有(清空)
     */
    let setArr = new Set(['a', 'b', 'c']);
    setArr.clear()
    console.log(setArr);
}

{
    /**
     * setArr
     * 循环for..of
     * forEach()推荐
     */
    let setArr = new Set(['a', 'b', 'c']);
    for (val of setArr) { //默认values
        console.log(val);
    }
    console.log('---------------------------');
    for (let key of setArr.keys()) {
        console.log(key)
    }
    console.log('---------------------------');
    for (let val of setArr.values()) {
        console.log(val)
    }
    console.log('---------------------------');
    for (let item of setArr.entries()) {
        console.log(item);
    }
    console.log('---------------------------');
    for (let [k, v] of setArr.entries()) {
        console.log(k, v);
    }
    console.log('---------------------------');
    setArr.forEach((value, index) => {
        console.log(value, index);
    })
}

{
    /**
     * 链式结构
     */
    let setArr = new Set();
    setArr.add('a').add('b').add('c');
    console.log(setArr);
}

{
    /**
     * 数组去重
     */
    let arr = [1, 2, 3, 3, 6, 3, 5, 8, 9, 2, 5, 7, 8, 8, 9, 4, 3];
    let newArr = [...new Set(arr)];
    console.log(newArr);
}

{
    /**
     * set数据结构转数组
     * [...set]
     * map()
     */
    let setArr = new Set([1, 2, 3]);
    setArr = new Set([...setArr].map(val => val * 2));
    console.log(setArr)
}

{
    /**
     * set数据结构转数组
     * [...set]
     * filter()
     */
    let setArr = new Set([1, 2, 3, 4, 5, 6]);
    setArr = new Set([...setArr].filter(val => val % 2 == 0));
    console.log(setArr)
}

{
    /**
     * new Weakset({})储存对象
     * Weakset初始时不能添加值，必须用add添加
     * Weakset没有size，也没有clear
     * 有add(),has(),delete()
     */
}
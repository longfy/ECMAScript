{
    /**
     * 模块化(需要在服务器环境)
     * 1、如何定义模块？
     *  export 东西
     *  export let a = 1;
     *  export {
     *      a as aaa,
     *      b as bbb
     *  }
     *  export default 3.14
     */
} {
    /**
     * 模块化(需要在服务器环境)
     * 2、如何使用？ 
     * import '可以是相对路径，也可以是绝对路径'
     * 只会导入一次，无论你引入多少次
     * import './modules/1.js' 相当于引入文件
     * import {a as aaa,b as bbb} from './modules/2.js'
     * import * as mod from './modules/2.js'
     * import pi from './modules/3.js'
     * import modules,{x,y,sum,show} from './modules/4.js'
     * 有提升效果，import会自动提升到顶部
     * 导出区模块的内容，如果里面有定时器更改，外面也会更改
     * import 不能再if判断里引入
     */
} {
    /**
     * import()
     * 类似node里面的require，可以动态引入，是个promise对象
     * 优点：1、按需加载；2、可以写if中；3、路径也可以动态
     * 可以结合Promise.all()、async、await使用
     */
    /* function config(sign) {
        switch (sign) {
            case 1:
                return './modules/1.js';
                break;
            case 2:
                return './modules/2.js';
                break;
        }
    }
    import(config(1)).then(res => {
        $(function () {
            $('body').css({
                background: 'gray'
            })
        })
    }) */
}
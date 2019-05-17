/**
 * 程序中的类
 * ES6里面的class没有提升功能，
 * ES5中用函数模拟可以，默认函数有提升
 */
{
    /**
     * 以前的写法，ES5之前
     * @param {*} name 
     * @param {*} age 
     */
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.showName = function () {
        return `我叫：${this.name}`;
    }
    Person.prototype.showAge = function () {
        return `今年${this.age}岁了`;
    }
    let p1 = new Person('张三', 18);
    console.log(p1.showName());
    console.log(p1.showAge());
} {
    /**
     * 以前的写法，ES5之前
     * @param {*} name 
     * @param {*} age 
     */
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.assign(Person.prototype, {
        showName() {
            return `我叫：${this.name}`;
        },
        showAge() {
            return `今年${this.age}岁了`;
        }
    })
    let p1 = new Person('李四', 20);
    console.log(p1.showName());
    console.log(p1.showAge());
} {
    /**
     * ES6中
     * constructor
     */
    class Person {
        constructor(name, age) { // 构造方法(函数)，调用new自动执行
            console.log(`构造函数执行了，${name}，${age}`);
        }
    }
    let p1 = new Person('王五', 20);
} {
    /**
     * ES6中
     * constructor
     */
    class Person {
        constructor(name, age) { // 构造方法(函数)，调用new自动执行
            this.name = name;
            this.age = age;
        }
        showName() {
            return `我叫：${this.name}`;
        }
        showAge() {
            return `今年${this.age}岁了`;
        }
    }
    let p1 = new Person('赵六', 20);
    console.log(p1.showName());
    console.log(p1.showAge());
} {
    /**
     * ES6中
     * constructor
     * 下面写法不太推荐
     */
    const Person = class {
        constructor(name, age) { // 构造方法(函数)，调用new自动执行
            this.name = name;
            this.age = age;
        }
        showName() {
            return `我叫：${this.name}`;
        }
        showAge() {
            return `今年${this.age}岁了`;
        }
    }
    let p1 = new Person('田七', 20);
    console.log(p1.showName());
    console.log(p1.showAge());
} {
    /**
     * ES6中
     * constructor
     */
    let aaa = 'case';
    class Person {
        constructor(name, age) { // 构造方法(函数)，调用new自动执行
                this.name = name;
                this.age = age;
            }
            [aaa]() {
                return `我叫：${this.name}，今年${this.age}岁了`;
            }
    }
    let p1 = new Person('赵六', 20);
    console.log(p1[aaa]());
    console.log(p1.case());
} {
    /**
     * ES6中
     * constructor
     */
    let aaa = 'case';
    let bbb = 'Demo';
    class Person {
        constructor(name, age) { // 构造方法(函数)，调用new自动执行
                this.name = name;
                this.age = age;
            }
            [aaa + bbb]() {
                return `我叫：${this.name}，今年${this.age}岁了`;
            }
    }
    let p1 = new Person('老九', 20);
    console.log(p1[aaa + bbb]());
    console.log(p1.caseDemo());
} {
    /**
     * ES6中
     * constructor
     * 矫正this:
     *      1、fn.call(this指向谁,args1,args2,...)
     *      2、fn.apply(this指向谁,[args1,args2,...])
     *      3、fn.bind()
     */
    class Person {
        constructor(name, age) { // 构造方法(函数)，调用new自动执行
            this.name = name;
            this.age = age;
            this.show = this.show.bind(this); // 矫正this
        }
        show() {
            console.log('this：', this);
            return `我叫：${this.name}，今年${this.age}岁了`;
        }
    }
    let p1 = new Person('老九', 20);
    let {
        show
    } = p1;
    console.log(show());
} {
    /**
     * getter
     * setter
     */
    class Person {
        constructor() {

        }
        set aaa(val) {
            console.log(`你设置aaa属性，值为：${val}`);
        }
        get aaa() {
            return `获取aaa的属性`;
        }
    }
    let p1 = new Person();
    p1.aaa = '123';
    console.log(p1.aaa)
} {
    /**
     * 静态方法：就是类身上的方法
     * static fn(){}
     */
    class Person {
        constructor() {

        }
        static showName() { // 静态方法
            return `这是静态方法`;
        }
    }
    console.log(Person.showName());
} {
    /**
     * 类的继承(ES5以前)
     */
    //父类
    function Person(name) {
        this.name = name;
    }
    Person.prototype.showName = function () {
        return `名字是：${this.name}`;
    }
    //子类
    function Student(name, skill) {
        Person.call(this, name); //继承属性
        this.skill = skill;
    }
    Student.prototype = new Person(); // 继承方法
    let stu1 = new Student('张三', '逃学');
    console.log(stu1.showName());
} {
    /**
     * 类的继承(ES6)
     */
    //父类
    class Person {
        constructor(name) {
            this.name = name;
        }
        showName() {
            return `名字为：${this.name}`;
        }
    }
    //子类
    class Student extends Person {
        constructor(name, skill) {
            super(name);
            this.skill = skill;
        }
        showSkill() {
            return `擅长：${this.skill}`;
        }
    }
    let stu1 = new Student('张三', '逃学');
    console.log(stu1.showName(), stu1.showSkill());
} {
    /**
     * 类的继承(ES6)
     * 方法重写(覆盖)
     */
    //父类
    class Person {
        constructor(name) {
            this.name = name;
        }
        showName() {
            console.log(`父类里的showName`);
            return `名字为：${this.name}`;
        }
    }
    //子类
    class Student extends Person {
        constructor(name, skill) {
            super(name);
            this.skill = skill;
        }
        showName() {
            super.showName(); // 父类的方法执行
            //TODO 做子级的事情
            console.log(`子类里的showName`);
            return `子类的showName`;
        }
        showSkill() {
            return `擅长：${this.skill}`;
        }
    }
    let stu1 = new Student('张三', '逃学');
    console.log(stu1.showName(), stu1.showSkill());
} {

}
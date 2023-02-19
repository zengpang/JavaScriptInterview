//函数Person
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.sayName=function(){
    console.log(this.name);
}
function new2(Fn,...reset){
    //Object.create方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型
    let obj=Object.create(Fn.prototype);
    //将新创建的对象作为this的上下文(使用apply实现)
    let result=Fn.apply(obj, reset);
    //如果该函数没有返回对象，则返回this
    return typeof result === 'object'?result:obj;
}
const newTest= new2(Person,'王五',24);
newTest.sayName();


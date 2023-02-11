function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.sayName=function(){
    console.log(this.name);
}
function new2(Fn,...reset){
    let obj=Object.create(Fn.prototype);
    let result=Fn.apply(obj, reset);
    return typeof result === 'object'?result:obj;
}
const newTest= new2(Person,'王五',24);
newTest.sayName();
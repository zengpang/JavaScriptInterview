var name='hello';
let obj1={
    name:'a'
}
let obj2={
    name:'b'
}
function sayName(age,sex){
    //此时的this指向全局，即window,所以此时的name为
    console.log(this.name+' '+age+' '+sex);
}

//普通调用的方法，如果name变量为let 则为undefined 
// sayName();

//使用call函数更改this并调用,call函数支持传入this,函数参数
// sayName.call(obj1,1,1);

//使用apply函数更改this并调用,apply函数支持传入this,函数参数，并且支持传入一个参数数组
//sayName.apply(obj1,[1])

//使用bind函数并不会调用,而是会形成一个新的函数
// (sayName.bind(obj1))();




//-------------------------Object.defineProperty初级使用方法------------------------------//
//---------------------------------------------------------------------------------------//
var obj={};
var age;
/**Object.defineProperty() 方法会直接在一个对象上定义一个新属性
，或者修改一个对象的现有属性，并返回此对象。形参1即为对象，形参2为属性名（注:这种行为也被称之为数据劫持）

**/
/**
 * 数据劫持概念
数据劫持，其实就是数据代理。
数据劫持，指的是在访问或者修改对象的某个属性时，通过一段代码拦截这个行为，进行额外的操作或者修改返回结果。 
 */
// Object.defineProperty(obj,'age',{
//     get:function(){
//         console.log('get age ...');
//         return age;
//     },
//     set:function(val){
//         console.log('set age ...');
//         age=val;
//     }
// })
// obj.age=100 //set age ... 调用set函数
// console.log(obj.age) //get age ... ,100 调用get函数

//-------------------------Object.defineProperty实现响应式------------------------------//
//---------------------------------------------------------------------------------------//

function observe(data)
{
    //判断data是否为空且判断data类型是否为对象
    if(!data||typeof data!="object") return ;
    //遍历data对象所有的属性名(key)
    for(var key in data){
        //获取属性名(key)对应的属性值
        let val=data[key];
        //设置该属性(通过Object.defineProperty进行数据劫持)
        Object.defineProperty(data,key,{
            enumerable:true,
            configurable:true,
            //获取数据时调用
            get:function(){
                //track函数：获取属性值时的处理函数，获取数据时，输出属性名即key
                track(data,key);
                //返回属性值
                return val;
            },
            //设置数据时调用
            set:function(newVal){
                trigger(data,key,newVal);
                //设置属性值为传入形参
                val=newVal;
            }
        })
        //如果属性值也为对象，那也调用observe对该值进行get,set设置
        if(typeof val==='object')
        {
            observe(val);
        }
    }
}
//track函数：获取属性值时的处理函数，获取数据时，输出属性名即key
function track(data,key){
    console.log('get data',key);
}
//trigger函数：修改属性值时的处理函数，获取数据时，输出属性名即key
function trigger(data,key,value){
    console.log('set data',key,":",value);
}
var data={
    name:'HelloWorld',
    friends:[1,2,3]
}
observe(data);
console.log(data.name);
data.name='valley';
data.friends[0]=4;
data.friends[3]=5;
data.age=6;
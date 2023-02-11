//--------------------------------Proxy初级使用方法---------------------------------------//
//---------------------------------------------------------------------------------------//
// const dinner={
//     meal:'tacos'
// }
// const handler={
//    //Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。
//    //arguments为函数参数
//     get(target,prop){
//        console.log('get...',prop);
//        //Reflect.get函数，作用为获取对象身上某个属性的值，类似于target[name]
//        return Reflect.get(...arguments);
//     },
//     set(target,key,value)
//     {
//         console.log('set...',key,value);
//         //Reflect.set函数，作用为将值分配给属性的函数，返回一个Boolean,如果更新成功，则返回true
//         return Reflect.set(...arguments);
//     }

// }
// //Proxy对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义(如属性查找,赋值，枚举，函数调用等)
// //Proxy对象接收两个形参，第一个形参为劫持的目标对象，第二个形参为处理函数
// const proxy=new Proxy(dinner,handler);
// console.log(proxy.meal);

//--------------------------------Proxy初级使用方法---------------------------------------//
//---------------------------------------------------------------------------------------//
function reactive(obj){
    //数据劫持处理函数
    //Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法。
    const handler={
        get(target,prop,receiver){
            track(target,prop);
            const value=Reflect.get(...arguments);
            //判断属性值类型是否为对象
            if(typeof value==='object')
            {
                //递归
                return reactive(value);
            }
            else
            {
                return value;
            }  
        },
        set(target,key,value,receiver)
        {
            trigger(target,key,value);
            
            return Reflect.set(...arguments);
        }
    }
    return new Proxy(obj,handler);
}
function track(data,key){
    console.log('get data',key);
}
function trigger(data,key,value)
{
   console.log('set data',key,":",value);
}
const dinner={
    meal:'tacos'
}
const proxy=reactive(dinner);
proxy.meal='apple';
proxy.list=[];
proxy.list.push(1);
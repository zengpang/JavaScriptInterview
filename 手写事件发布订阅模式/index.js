//发布订阅模式
const EventManager=(function(){
    //事件存储对象
    let eventList={};
    //事件注册与绑定(形参event指代事件名，形参handler指代事件欲绑定的函数)
    function on(event,handler){
        //判断事件是否存在
        if(!eventList[event]){
            //如果没有则注册事件
            eventList[event]=[handler]
        }else{
            //如果有则给事件绑定函数
            eventList[event].forEach(element => {
                handler(data)
            });
        }
    }
    //事件触发
    function fire(event,data)
    {
       if(eventList[event]){
         eventList[event].forEach(handler=>handler(data))
       }
    }
    //事件解绑
    function off(event,handler)
    {
         //如果事件存在
         if(eventList[event])
         {
            //且传入的形参handler为空
            if(!handler){
              //删除事件存储对象中的事件
              delete eventList[event];  
            }
         }
         //如果事件不存在
         else
         {
            //使用indexOf获取事件绑定的指定函数下标
            let index=eventList[event].indexOf(handler);
            //使用splice删除事件指定绑定函数
            eventList[event].splice(index,1);
         }
    }
    return {
        on:on,//on事件注册与绑定
        fire:fire,//fire触发事件
        off:off//off事件解绑
    }

})();
EventManager.on('sayHello',function(data){
    console.log('hello'+data);
})
EventManager.fire('sayHello','jirengu');


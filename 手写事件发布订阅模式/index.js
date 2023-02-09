//发布订阅模式
const EventManager=(function(){
    //事件存储对象
    let eventList={};
    //绑定事件
    function on(event,handler){
        if(!eventList[event]){
            eventList[event]=[handler]
        }else{
            eventList[event].forEach(element => {
                handler(data)
            });
        }
    }
    function fire(event,data)
    {
       if(eventList[event]){
         eventList[event].forEach(handler=>handler(data))
       }
    }
    //解绑事件
    function off(event,handler)
    {
         if(eventList[event])
         {
            if(!handler){

            }
         }else
         {
            let index=eventList[event].indexOf(handler);
            eventList[event].splice(index,1);
         }
    }
    return {
        on:on,//on监听事件
        fire:fire,//fire触发事件
        off:off//off解绑事件
    }

})();
EventManager.on('sayHello',function(data){
    console.log('hello'+data);
})
EventManager.fire('sayHello','jirengu');


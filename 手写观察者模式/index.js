//观察者模式
//主题，即被观察者
class Subject{
    //构造函数
    constructor(){
        //新建观察者存储数组
        this.observers=[]
    }
    //添加观察者
    addObserver(observer)
    {
        //往观察者存储数组添加观察者
        this.observers.push(observer);
    }
    //移除观察者
    removeObserver(observer)
    {
        //获取观察者在观察者存储数组的下标
        var index=this.observers.indexOf(observer);
        //判断下标是否合法即观察者是否存在
        if(index>-1)
        {
            //如果存在，则从观察者存储数组中删除观察者
            this.observers.splice(index,1);
        }
    }
    //更新
    notify(){
        //遍历所有观察者，并更新观察者
        this.observers.forEach(observer=>{
            observer.update();
        })
    }
}
//观察者类
class Observer{
    //构造函数
    constructor(){
        //初始化更新函数
        this.update=function(){}
    }
    subscribeTo(subject){
        
        subject.addObserver(this);
    }
}
let subject=new Subject();
let observer=new Observer();
observer.update=function(){

    console.log('observer update');
}
observer.subscribeTo(subject);
subject.notify();
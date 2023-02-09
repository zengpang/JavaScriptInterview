//订阅者
class Subject{
    constructor(){
        this.observers=[]
    }
    addObserver(observer)
    {
        this.observers.push(observer);
    }
    removeObserver(observer)
    {
        var index=this.observers.indexOf(observer);
        if(index>-1)
        {
            this.observers.splice(index,1);
        }
    }
    notify(){
        this.observers.forEach(observer=>{
            observer.update();
        })
    }
}
class Observer{
    constructor(){
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
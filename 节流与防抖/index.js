//防抖，debounce:如果下达命令后，在t毫秒内再次下达该命令，则取消刚刚下达的命令，只执行
//形参1为命令对应的函数,形参2为时间间隔
function debounce(fn,wait){
    //每次执行函数，生成一个定时器
    let timer=null;
    return function(){
        //判断定时器是否为空，如果不为空
        if(timer)
        //如果定时器不为空，则清除定时器即取消刚刚下达的命令
        {clearTimeout(timer);}
        //使用apply赋予新命令
        timer=setTimeout(()=>fn.apply(this,arguments),wait);
    }
};
//节流,从上一次命名结束开始的一定时间范围内，如果多次连续下达命令，则只执行当前时间段t内第一次命令
//形参1为命令对应的函数,形参2为时间间隔
function throttle(fn,gapTime){
    //声明lastTime变量，命令最后执行时间
    let lastTime=null;
    //声明nowTime变量，存储当前时间
    let nowTime=null;
    return function(){
        //更新nowTime为当前时间
        nowTime=Date.now();
        //判断命令最后执行时间与当前时间的时间间隔差，如果间隔差不在时间范围内，则执行新命令，否则执行时间段t内第一次命令
        if(!lastTime||nowTime-lastTime>gapTime){
            fn();
            //更新lastTime变量，命令最后执行时间
            lastTime=nowTime;
        }
    }
}
//防抖，debounce:如果
function debounce(fn,wait){
    let timer=null;
    return function(){
        if(timer)
        {clearTimeout(timer);}
        timer=setTimeout(()=>fn.apply(this,arguments),wait);
    }
};
function throttle(fn,gapTime){
    let lastTime=null;
    let nowTime=null;
    return function(){
        nowTime=Date.now();
        if(!lastTime||nowTime-lastTime>gapTime){}
    }
}
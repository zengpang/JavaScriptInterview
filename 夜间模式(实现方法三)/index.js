const btn=document.getElementsByClassName('modeBtn')[0];
btn.addEventListener('click',(e)=>{
    //通过localStorage获取用户保存设置
    let darkMode=localStorage.getItem('theme');
    if(darkMode==='dark')
    {
        e.target.innerHTML = '🌜';
        disableDarkMode();
        
    }
    else
    {
        e.target.innerHTML = '🌞';
        enableDarkMode();
    }
})
//开启夜间模式
function enableDarkMode()
{
    document.body.classList.add('dark-mode')
    //使用localStorage保存用户夜间模式设置
    localStorage.setItem('theme','dark');
}
//关闭夜间模式
function disableDarkMode()
{
    document.body.classList.remove('dark-mode')
    //使用localStorage保存用户夜间模式设置
    localStorage.setItem('theme','light');
}
//通过matchMedia方法获取系统主题并判断,如果系统主题不为夜间模式则为false
window.matchMedia("(prefers-color-scheme: dark)")
.addEventListener(e=>(e.matches?enableDarkMode():disableDarkMode()))

const btn=document.getElementsByClassName('modeBtn')[0];
btn.addEventListener('click',(e)=>{
    const box=document.getElementsByClassName('reader-box')[0];
    if(box.className.includes('night'))
    {
        box.classList.remove('night');
        e.target.innerHTML = '🌜';
    }
    else
    {
        box.classList.add('night');
        e.target.innerHTML = '🌞';
    }
})
var wrap = document.querySelector(".wrap");
  var next = document.querySelector(".arrow_right");
  var prev = document.querySelector(".arrow_left");
  var currIndex = 1;
  var len = wrap.children.length;

  next.onclick = function () {
    console.log("下一页");
    next_pic();
  }
  prev.onclick = function () {
    prev_pic();
  }
  function next_pic () {
    let newLeft;
    if(currIndex === len){
      newLeft = 0;
      currIndex = 1;
    }else{
      newLeft = parseInt(wrap.style.left)-600;
      currIndex ++
    }
    wrap.style.left = newLeft + "px";
  }
  function prev_pic () {
    let newLeft;
    if(currIndex === 1){
      newLeft = -1800;
      currIndex = 4;
    }else{
      newLeft = parseInt(wrap.style.left)+600;
      currIndex--;
    }
    wrap.style.left = newLeft + "px";
  }

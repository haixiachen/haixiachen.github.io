
function $id(id) {
    return document.getElementById(id);
}

/**
 *
 * @param element   让谁动起来
 * @param target    到哪里结束
 */
function animate(element,target,fn) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
//            1   获取当前的位置
        var current = element.offsetLeft;
//        2   设置步长
        var step = 19;
//        3   判断方向
        step = target > current ? step : -step;
//        4   重新设置
        current += step;
        element.style.left = current + "px";
//        5   停下来
        if(Math.abs(target - current) < Math.abs(step)){
            element.style.left = target + "px";
            clearInterval(element.timer)
            if(typeof  fn == "function"){
                fn();
            }
        }
    },20);
}
function animate2(element,target){
//        1先清除元素上已经存在的计时器
    clearInterval(element.timer);
//        设置每次移动的步长
    var step = 9;
//        重新设置定时器
    element.timer = setInterval(function(){
//            获取当前位置
        var currentLeft = element.offsetLeft;
//            判断方向，如果当前的位置在目标位置的左边，就是正方向，反之就是负方向
        var temp = currentLeft<target?step:-step;
//            计算新的位置
        currentLeft += temp;
//            判断是否达到目标位置
//            当目标位置-当前位置的绝对值比步长要小的时候，我们认为到达目标位置了
        if(Math.abs(target-currentLeft)<Math.abs(step)){
//                清除计时器
            clearInterval(element.timer);
            element.style.left = target+"px";
        }else{
            element.style.left = currentLeft+"px";
        }


    },20)
}
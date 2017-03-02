
function $id(id) {
    return document.getElementById(id);
}

/**
 *
 * @param element   ��˭������
 * @param target    ���������
 */
function animate(element,target,fn) {
    clearInterval(element.timer);
    element.timer = setInterval(function () {
//            1   ��ȡ��ǰ��λ��
        var current = element.offsetLeft;
//        2   ���ò���
        var step = 19;
//        3   �жϷ���
        step = target > current ? step : -step;
//        4   ��������
        current += step;
        element.style.left = current + "px";
//        5   ͣ����
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
//        1�����Ԫ�����Ѿ����ڵļ�ʱ��
    clearInterval(element.timer);
//        ����ÿ���ƶ��Ĳ���
    var step = 9;
//        �������ö�ʱ��
    element.timer = setInterval(function(){
//            ��ȡ��ǰλ��
        var currentLeft = element.offsetLeft;
//            �жϷ��������ǰ��λ����Ŀ��λ�õ���ߣ����������򣬷�֮���Ǹ�����
        var temp = currentLeft<target?step:-step;
//            �����µ�λ��
        currentLeft += temp;
//            �ж��Ƿ�ﵽĿ��λ��
//            ��Ŀ��λ��-��ǰλ�õľ���ֵ�Ȳ���ҪС��ʱ��������Ϊ����Ŀ��λ����
        if(Math.abs(target-currentLeft)<Math.abs(step)){
//                �����ʱ��
            clearInterval(element.timer);
            element.style.left = target+"px";
        }else{
            element.style.left = currentLeft+"px";
        }


    },20)
}
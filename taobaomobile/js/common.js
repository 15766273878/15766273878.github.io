/*自定义设置页面的根节点的大小开始*/
(function(){
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    html.style.fontSize = hWidth/15 + "px";
})();
/*自定义设置页面的根节点的大小结束*/

/*右下角回到顶部按钮的出现和功能开始*/
function backTop(height) {
    var gobackTop = document.querySelector('.goTop');
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        addTransition(gobackTop);
        if(scrollTop>height){
            gobackTop.style.display = 'block';
            gobackTop.style.opacity = '1';

        }else{
            gobackTop.style.opacity = '0';
            addTransitionEnd(gobackTop,function () {
                gobackTop.style.display = 'none';
            })
        }
    }
    gobackTop.addEventListener('click',function () {
            clearInterval(gobackTop.timer);
            gobackTop.timer = setInterval(function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                var y = scrollTop - scrollTop/10;
                if(y == 0){
                    clearInterval(gobackTop.timer);
                    return
                }
                window.scrollTo('y',y);
            }, 20);
        }
    );

}
/*右下角回到顶部按钮的出现和功能结束*/

/*关闭广告开始*/
function closeAd(fn) {
    var close = document.querySelector('.tp-ad-close');
    var hide = close.parentNode;
    close.addEventListener('click',function () {
        addTransition(hide);
        setTransform(hide,-hide.offsetWidth,'x');
        addTransitionEnd(hide,function () {
            if(fn){
                fn();
            }
            hide.parentNode.removeChild(hide);
        })
        setTransform(hide,-hide.offsetWidth,'x');
    })
}
/*关闭广告结束*/

function addTransition(obj,time) {
    var dur = 0.5;
    if(time){
        dur = time;
    }
    obj.style.transition = 'all ' + dur +'s';
    obj.style.webkitTransition = 'all ' + dur +'s';
}

function removeTransition(obj) {
    obj.style.transition = ''
    obj.style.webkitTransition = '';
}

function setTransform(obj,dis,dir) {
    obj.style.transform = 'translate'+dir+'('+dis+'px)';
    obj.style.webkitTransform = 'translate'+dir+'('+dis+'px)';
}

function addTransitionEnd(obj,fn) {
    obj.addEventListener('transitionEnd', fn);
    obj.addEventListener('webkitTransitionEnd', fn);
}
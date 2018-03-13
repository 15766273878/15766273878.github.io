
/*轮播图部分开始*/
function slider() {
    var imgUl = document.querySelector('.imgUl');
    var imgBox = imgUl.parentNode;
    var li_width = imgUl.children[0].offsetWidth;
    var dots = document.querySelector('.slide-list').children;
    var current = 1;
    setTransform(imgUl,-current*li_width,'x');
    imgUl.timeInterval = 5000;
    clearInterval(imgUl.timer);
    imgUl.timer = setInterval(function () {
        current++;
        addTransition(imgUl);
        var dis = -current *li_width;
        setTransform(imgUl,dis,'x')
    },imgUl.timeInterval)


    addTransitionEnd(imgUl,function () {
        if(current >= imgUl.children.length -1){
            current = 1;
        }else if(current == 0){
            current = imgUl.children.length - 2;
        }
        removeTransition(imgUl);
        setTransform(imgUl,-current*li_width,'x');
        updateDot();
    });

    imgBox.addEventListener('touchstart',function (e) {
        clearInterval(imgUl.timer);
        imgUl.startX = e.touches[0].pageX;
        imgUl.isMove = false;
    })
    imgBox.addEventListener('touchmove',function (e) {
        imgUl.isMove = true;
        imgUl.endX = e.touches[0].pageX;
        imgUl.distance = imgUl.endX - imgUl.startX;
        removeTransition(imgUl);
        setTransform(imgUl,-current*li_width+imgUl.distance,'x')
    })
    imgBox.addEventListener('touchend',function () {
        if(imgUl.isMove){
            if(Math.abs(imgUl.distance)>li_width/3){
                if(imgUl.distance>0 && current>=1){
                    current--;
                }else if(imgUl.distance<0 && current<=imgUl.children.length -2){
                    current++;
                }
                addTransition(imgUl);
                setTransform(imgUl,-current*li_width,'x')
            }else{
                addTransition(imgUl);
                setTransform(imgUl, -current*li_width, 'x');
            }
        }
        clearInterval(imgUl.timer);
        imgUl.timer = setInterval(function () {
            current++;
            addTransition(imgUl);
            var dis = -current *li_width;
            setTransform(imgUl,dis,'x')
        },imgUl.timeInterval)
        updateDot();
    })

    function updateDot() {
        for(var i = 0;i<dots.length;i++){
            dots[i].className = ''
        }
        dots[current - 1].className = 'active';
    }
}/*轮播图部分结束*/

/*倒计时开始*/
/**
 *
 * @param time 设定活动事件到什么时候，格式为：2018/1/1 00：00:00
 */
function timeCount(time) {
    var timeChange = document.querySelector('.time');
    var hourChange = timeChange.children[0];
    var minutesChange = timeChange.children[1];
    var secondChange = timeChange.children[2];
    var timeAll = new Date(time) - new Date();
    var hour = parseInt(timeAll/1000/60/60);
    var minute = parseInt(timeAll/1000/60%60);
    var second = parseInt(timeAll/1000%60);
    hourChange.innerHTML = hour;
    minutesChange.innerHTML = minute;
    secondChange.innerHTML = second;
}
/*倒计时结束*/


/*淘宝头条刷新开始*/
function updateNews() {
    var spans = document.querySelector('.toutiao');
    var hotWord = spans.querySelectorAll('span')[1];
    var news = spans.querySelectorAll('span')[2];
    var hotWordTag = ['装修','汽车','瘦身','手机'];
    var current = 0;
    var newsTag = ['厨房千万别买这4种家电，不实用又浪费钱','这车宽到摸不到副驾驶，悍马见了都服气！','3招快速瘦身,不到1个月瘦到2位数！','曝2018三iPhone：配置价格惊喜']
    spans.timer = setInterval(function () {
        hotWord.innerHTML = hotWordTag[current];
        news.innerHTML = newsTag[current];
        current++;
        if(current==4){
            current = 0;
        }
    },3000)
}
/*淘宝头条刷新结束*/

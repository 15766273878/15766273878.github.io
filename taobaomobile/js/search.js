/*搜索栏样式改变开始*/
function searchChange() {
    var search = document.querySelector('.search');
    var input = search.querySelector('input');
    var span = search.querySelector('span');
    var cancel = search.querySelector('a:last-child');
    var cover = document.querySelector('.cover');
    var ul = span.children[2];
    var lis = ul.children;
    var a = cover.querySelector('div').querySelectorAll('a');
    input.addEventListener('focus',function () {
        search.style.background = 'white';
        cancel.style.display = 'block';
        cover.style.display = 'block';
        search.style.position = 'fixed';
    });
    cancel.addEventListener('click',function () {
        search.style.background = '';
        cancel.style.display = 'none';
        cover.style.display = 'none';
        input.value = '';
        search.style.position = 'relative';
    });
    cover.addEventListener('touchmove',function (e) {
        e.preventDefault();
    })
    span.addEventListener('click',function () {
        span.isclick = !span.isclick;
        if(span.isclick){
            ul.style.display = 'block';
        }else{
            ul.style.display = 'none';
        }
    });
    for(var i=0;i<lis.length;i++){
        lis[i].addEventListener('click',function () {
            span.querySelector('label').innerHTML = this.innerText;
        })
    }
    for(var i=0;i<a.length;i++){
        a[i].addEventListener('click',function () {
            input.value = this.innerText;
        })
    }
}/*搜索栏样式改变结束*/

/*右下角页码选择部分开始*/
function pageSelect() {
    var showPageSelect = document.querySelector('.pageSelect');
    var PageSelect = document.querySelector('.pageSelectPage');
    var close = PageSelect.querySelector('i.icon-arrowdownsmall');
    var minus = PageSelect.querySelector('ul li:first-child');
    var num = PageSelect.querySelector('ul li:nth-child(2) span');
    var plus = PageSelect.querySelector('ul li:last-child');
    var slide = PageSelect.querySelector('i.icon-ketuozhuai');
    var slideArea = slide.parentNode;
    var progress = PageSelect.querySelector('div.orange');
    showPageSelect.addEventListener('click',function () {
        this.style.display = 'none';
        addTransition(PageSelect);
        PageSelect.style.width = '100%';
        PageSelect.style.height = '2.8rem'
    })

    close.addEventListener('click',function () {
        PageSelect.style.width = '0';
        PageSelect.style.height = '0';
        showPageSelect.style.display = 'block';
        showPageSelect.innerHTML = num.innerText + '/100';
    })

    minus.addEventListener('click',function () {
        var Tag = num.innerText;
        if(Tag == 1){
            return
        }else if(Tag == 2){
            this.className = 'notAllow';
        }else{
            minus.className = '';
            plus.className = '';
        }
        Tag--;
        num.innerHTML = Tag;
        numbarChange(Tag);
    })
    plus.addEventListener('click',function () {
        var Tag = num.innerText;
        if(Tag == 100){
            return
        }else if(Tag == 99){
            this.className = 'notAllow'
        }else{
            minus.className = '';
            plus.className = '';
        }
        Tag++;
        num.innerHTML = Tag;
        numbarChange(Tag);
    })
    
    function numbarChange(pc) {
        progress.style.width = pc + '%';
        slide.style.left = pc-1 + '%';
    }
    slideArea.addEventListener('touchstart',Progress);
    slideArea.addEventListener('touchmove',Progress);
    function Progress(e) {
        var pc = Math.round((e.touches[0].clientX - slideArea.offsetLeft)*100/slideArea.offsetWidth);
        if(pc >= 1 && pc <=100){
            progress.style.width = pc + '%';
            slide.style.left = pc-1 + '%';
            num.innerHTML = pc;
            if(pc == 1){
                minus.className = 'notAllow';
            }else if(pc ==100){
                plus.className = 'notAllow';
            }else{
                minus.className = '';
                plus.className = '';
            }
        }
    }
}
/*右下角页码选择部分结束*/



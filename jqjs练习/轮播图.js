window.addEventListener('load',function(){
    var dakuang = this.document.querySelector('.dakuang');
    var zuo = this.document.querySelector('.zuo');
    var you = this.document.querySelector('.you');
    //鼠标经过大框显示按钮
    dakuang.addEventListener('mouseenter',function(){
        you.style.display= 'block';
        zuo.style.display= 'block';
    })
    //鼠标离开大框隐藏按钮
    dakuang.addEventListener('mouseleave',function(){
        you.style.display= 'none';
        zuo.style.display= 'none';
    })
    // 获取元素
    var ul = this.document.querySelector('ul');
    var ol = this.document.querySelector('ol');
    var img =this.document.querySelector('img');
    var tpwidth = img.offsetWidth;
    //动态生成小圆圈，有几张图片，就生成几个小圆圈
    for(i=0; i<ul.children.length;i++){
        //创建一个li
        var li = this.document.createElement('li');
        //记录当前小圆圈的索引号，通过自定义属性来做
        li.setAttribute('index',i);
        //把小li插入ol里面
        ol.appendChild(li);
        //把ol里面的第一个li设置类名为current
        ol.children[0].className= 'current';
        //小圆圈的排他思想，直接在生成小圆圈的同时绑定点击事件
        li.addEventListener('click',function(){
            //干掉所有人，把所有li清除current类名
            for(i=0;i<ol.children.length;i++){
                ol.children[i].className='';
            }
            // 留下我自己，当前li设置current类名
            this.className='current';
        
        //点击小圆圈，移动图片，移动的是ul盒子
        //ul的移动距离是小圆圈的索引号乘以图片的宽度，注意是往左走，所以是负值
        //当我们点击了某个li，就拿到当前li的索引号
        var index = this.getAttribute('index');
        
        hao(ul,index * -tpwidth);
    })
    }
    //克隆第一张图片放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild('first');
    //点击右侧按钮，图片滚动一张
    var num = 0;
    you.addEventListener('click',function(){
        // 如果走到了最后复制的一张图片，此时，我们的ul要快速复原，left改为0
        if(num==ul.children.length-1){
            ul.style.left=0;
            num=0;
        }
        //
        num++;
        hao(ul,-num*tpwidth);
    })
})
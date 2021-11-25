let button = document.getElementById('label');      //获取按钮
let spans = document.getElementsByTagName('span')   //获取span标签
let flag = 0                                        //整一个变量来辅助判断啥时候改样式
button.onclick = () => {                            //开始写用来变化的部分了
    if (flag == 0) {
        for (let span of spans) {                   //以新变量span遍历获取的伪数组span，并全改样式
            span.style.backgroundColor = 'transparent';
        }
        flag = 1;
    } else {
        for (let span of spans) {                   //以新变量span遍历获取的伪数组span，并全改样式
            span.style.backgroundColor = 'black';
        }
        flag = 0;
    }
}
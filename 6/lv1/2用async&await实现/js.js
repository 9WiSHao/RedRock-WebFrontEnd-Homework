// 先一起获取下所有要用的节点
const start = document.querySelector('#start');
const ball1 = document.querySelector('.balla1');
const ball2 = document.querySelector('.balla2');
const ball3 = document.querySelector('.balla3');
// 点击按钮的功能
start.addEventListener('click',() => {
 if (ball1.className == 'balla1'){
    
 }else{// 第一个球没在初始位置就复原它们
    ball1.className = 'balla1';
    ball2.className = 'balla2';
    ball3.className = 'balla3';
 }       
})
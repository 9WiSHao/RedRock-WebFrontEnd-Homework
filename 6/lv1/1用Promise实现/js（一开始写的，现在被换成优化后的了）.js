// 先一起获取下所有要用的节点
const start = document.querySelector('#start');
const ball1 = document.querySelector('.balla1');
const ball2 = document.querySelector('.balla2');
const ball3 = document.querySelector('.balla3');
// 点击按钮的功能
start.addEventListener('click',() => {
 if (ball1.className == 'balla1'){
    // 设置第一个球立即开始动
    let promise1 = new Promise((resolve, reject) => {
                                ball1.className = 'ballb1'
                                resolve('done!')
                    })
        // 第一个球开始之后，等2s第二个球再动
        // 因为设置的css过渡动画是2s，所以得等到第一个球运动结束之后再让它动，即等2000ms再说
        promise1.then( 
            // 第二个球的动
            resolve => { let promise2 = new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                    ball2.className = 'ballb2'
                                                    resolve('done!')
                                                },2000
                                            )
                                        })
            
                // 第二个球开始之后，等2s第二个球再动
                // 因为设置的css过渡动画是2s，所以得等到第一个球运动结束之后再让它动，即等2000ms再说                           
                promise2.then( 
                    // 第三个球的动
                    resolve => {new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                            ball3.className = 'ballb3'
                                                            resolve('done!')
                                                        },2000
                                                    )
                                                })
                    }
                )
            }
        )
 }else{
    // 第一个球没在初始位置就复原它们
    ball1.className = 'balla1';
    ball2.className = 'balla2';
    ball3.className = 'balla3';
 }       
})
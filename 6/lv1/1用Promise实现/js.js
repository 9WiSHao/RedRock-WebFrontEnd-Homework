// 先一起获取下所有要用的节点
const start = document.querySelector('#start');
const ball1 = document.querySelector('.balla1');
const ball2 = document.querySelector('.balla2');
const ball3 = document.querySelector('.balla3');
// 点击按钮的功能
start.addEventListener('click',() => {
 if (ball1.className == 'balla1'){
    // 设置第一个球在0秒后动
    let promise1 = new Promise((resolve, reject) => {
                        setTimeout(() => {
                                ball1.className = 'ballb1'
                                resolve('done!')
                            },0
                        )
                    })
        // 等2秒后第一个球到位了之后再第二个球继续
        promise1.then( 
            resolve => { let promise2 = new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                    ball2.className = 'ballb2'
                                                    resolve('done!')
                                                },2000
                                            )
                                        })
            
                // 等再过2秒后第二个球到位了之后再2秒后第三个球继续                            
                promise2.then( 
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
 }else{// 第一个球没在初始位置就复原它们
    ball1.className = 'balla1';
    ball2.className = 'balla2';
    ball3.className = 'balla3';
 }       
})
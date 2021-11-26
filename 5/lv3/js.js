//这是需要改的东西
let inputButton = document.getElementById('inputButton')
let inputText = document.getElementById('inputText')
let comment2 = document.getElementById('comment2')

inputButton.onclick = () => {
    //判断下有没有输入评论
    if (inputText.value == ""){
        alert('评论内容为空')
    } else {   
        //这是生成固定一样的东西
        let top = document.createElement('div')
        top.className = 'top1'
        comment2.appendChild(top)

        let chatHead = document.createElement('div')
        chatHead.className = 'chatHead1'
        top.appendChild(chatHead)

        let img = document.createElement('img')
        img.className = 'img2'
        img.src = './img/阿卡林头像.jpg'
        chatHead.appendChild(img)

        let right = document.createElement('div')
        right.className = 'right1'
        top.appendChild(right)

        let upA = document.createElement('div')
        upA.className = 'upA1'
        right.appendChild(upA)

        let name = document.createElement('div')
        name.className = 'name1'
        name.innerHTML = '神必人'
        upA.appendChild(name)

        let more = document.createElement('div')
        more.className = 'more1'
        more.innerHTML = '...'
        upA.appendChild(more)

        let upB = document.createElement('div')
        upB.className = 'upB1'
        right.appendChild(upB)

        let lvA = document.createElement('div')
        lvA.className = 'lvA1'
        lvA.innerHTML = 'Lv.???&nbsp&nbsp&nbsp'
        upB.appendChild(lvA)

        let lvB = document.createElement('div')
        lvB.className = 'lvB1'
        lvB.innerHTML = '申必'
        upB.appendChild(lvB)

        //这是生成需要改变的东西
        let commentText2 = document.createElement('div')
        commentText2.innerHTML = inputText.value
        right.appendChild(commentText2)

        let down = document.createElement('div')
        down.className = 'down1'
        comment2.appendChild(down)

        let time = document.createElement('div')
        time.className = 'time1'
        time.innerHTML = '???楼 / 不知道哪天 14:51'
        down.appendChild(time)

        let like = document.createElement('div')
        like.className = 'like1'
        like.innerHTML = '赞 0 回复 0'
        down.appendChild(like)

        let line = document.createElement('hr')
        comment2.appendChild(line)
            
    }
} 
let socket = new WebSocket(`wss://anonym.ink:8000/homework/chatroom?username=${localStorage.getItem("username")}&avatar=${localStorage.getItem("avatar")}`)
let contentBox = document.querySelector(".body")
let placeholder = document.querySelector('#placeholderBlock')

socket.onopen = function(e) {
    alert("已连接");
};
  
let yourMessage = document.querySelector('#yourMessage');

document.querySelector('#go')['onclick']=x=>{
    socket.send(`${yourMessage.value}`)
}

socket.onmessage = function(event) {
    onMessage(JSON.parse(event.data))
     // 把返回的信息在控制台输出，用以debug
    console.log(`[message] Data received from server: ${event.data}`);
};

function onMessage(data) {
    if (data.type == "MESSAGE") {
        let comment = document.createElement("div")
        comment.className = "comment1"
        comment.innerHTML = `
            <div class="top">
                <div class="chatHead">
                    <img src=${data.avatar} alt="头像">
                </div>
                <div class="right">
                    <div class="userName">
                        <div class="name">${data.username}</div>
                        <div class="more">...</div>
                    </div>
                    <div class="commentText">
                    ${parse(data.data)}
                    </div>
                </div>
            </div>
            <div class="down">
                <div class="time">${new Date().toLocaleString()}</div>
            </div>
            <hr />
        `
        // 在占位块之前插入元素
        contentBox.insertBefore(comment, placeholder)
    } else {
        // generateBubble(data.username, data.type == "OPEN")
    }
}
  
socket.onclose = function(event) {
    if (event.wasClean) {
        alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
       // 例如服务器进程被杀死或网络中断
       // 在这种情况下，event.code 通常为 1006
        alert('[close] Connection died');
    }
};
  
socket.onerror = function(error) {
    alert(`[error] ${error.message}`);
};
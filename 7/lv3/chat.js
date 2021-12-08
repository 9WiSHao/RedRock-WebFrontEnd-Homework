let socket = new WebSocket(`ws://anonym.ink:8000/homework/chatroom?username=${localStorage.getItem("username")}&avatar=${localStorage.getItem("avatar")}`)

socket.onopen = function(e) {
    alert("[open] Connection established");
    alert("Sending to server");
    // socket.send("我谔谔");
};
  
socket.onmessage = function(event) {
    // 把返回的信息在控制台输出，用以debug
    console.log(`[message] Data received from server: ${event.data}`);
};
  
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


let yourMessage = document.querySelector('#yourMessage');

document.querySelector('#go')['onclick']=x=>{
    socket.send(`${yourMessage.value}`)
}
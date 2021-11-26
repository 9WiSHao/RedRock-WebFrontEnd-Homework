let selects = document.getElementsByClassName('select');
// 全选
let all = document.getElementById('all');
all.onclick = () => {
    for (let select of selects) {
        select.checked = true;
    }
}
//全不选
let none = document.getElementById('none');
none.onclick = () => {
    for (let select of selects) {
        select.checked = false;
    }
}
//反选
let inverse = document.getElementById('inverse');
inverse.onclick = () => {
    for (let select of selects) {
        select.checked = !select.checked
    }
}





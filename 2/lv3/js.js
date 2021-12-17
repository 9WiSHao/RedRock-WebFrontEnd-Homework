document.querySelector('.i')['onmouseover']=x=>{
    document.querySelector('.others').className = 'others2'
    document.querySelector('.san').className = 'san2'
}

document.querySelector('.i')['onmouseout']=x=>{
    document.querySelector('.others2').className = 'others'
    document.querySelector('.san2').className = 'san'
}
// 循环方法
function factorial1(n) {
    let fac = 1;
    for (let i = 1; i <= n; i++) {
        fac *= i
    };
    return fac;
}

console.log(factorial1(10));
// 递归方法
function factorial2(n) {
    if(n == 1){
        return 1;
    } else {
        return n * factorial2(n - 1);
    };
}

console.log(factorial2(10));
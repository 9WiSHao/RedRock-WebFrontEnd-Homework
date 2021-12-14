let Reimu = {
    name: '博丽灵梦'
}
// 造一个用来验证输出的函数
function hello(word1, word2) {
    console.log(this.name + '说了句: ' + word1 + word2);
};

// hello2.call(Reimu, '给老娘来塞钱啊')

//call的模拟实现
Function.prototype.myCall = function(thisArg, ...arr){ //这里面不写形参，然后里面用arguments[i]来获取参数也行,就是表达...arr麻烦些，还得再整个数组收集起来
    // 如果call的是空的，就指向windos
    if(thisArg === null || thisArg === undefined){
        thisArg = window;
    };
    // 定义一个不重复的常量
    let fn = Symbol('whatever');
    // 把不重复的属性给thisArg，即第一个参数,是要处理成this的那个
    thisArg[fn] = this;
    // 调用函数并将结果返回，直接能将收集起来的后面的多的函数参数执行了
    let result = thisArg[fn](...arr);
    // 删除新增的属性
    return result;   
};
// 验证下
hello.myCall(Reimu, '都给老娘来', '塞钱啊');

//apply的模拟实现
// 和上面call完全一致，就是注意apply只收集arr一个类数组形参，把...去掉就行了
Function.prototype.myApply = function(thisArg, arr){
    if(thisArg === null || thisArg === undefined){
        thisArg = window;
    };
    let fn = Symbol('whatever');
    thisArg[fn] = this;
                            // 这儿注意收集的那一个类数组得展开
    let result = thisArg[fn](...arr);
    return result;   
};
// 验证下
let hx = ['都给老娘来', '塞钱啊'];
hello.myApply(Reimu, hx);
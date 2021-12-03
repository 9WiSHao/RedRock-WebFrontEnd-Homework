// 先声明好要用的东西
const text = '\xa0\xa0元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。念无与为乐者，遂至承天寺寻张怀民。怀民亦未寝，相与步于中庭。庭下如积水空明，水中藻、荇交横，盖竹柏影也。何夜无月？何处无竹柏？但少闲人如吾两人者耳。'
const body = document.querySelector('.body')
// 造一个async函数方便用await
async function Chicago() {
    // 字符串是可迭代的，所以直接遍历
    for (let char of text) {
        // 用await每等240ms出一个字
        await new Promise((resolve, reject) =>{
            setTimeout(() => {
                // DOM操作拼接并添加上每个字
                body.textContent += char
                resolve('done!')
            },240)
        })
    }
}
// 调用await
Chicago()
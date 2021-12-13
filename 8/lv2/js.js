let arr1 = [
    'Reimu', 'Marisa', 'Cirno', 'Cirno', 'Sakuya', 'Remilia', 'Aya', 'Alice', 'Youmu', 'Yuyuko', 'Reimu', 'Marisa', 'Yakumo', 'Suika', 'Aya'
];

// 1 使用set方法（偷懒方法）
function arrUnique1(arr) {
    let arrNew = Array.from(new Set(arr))
    return arrNew;
};

console.log('使用set方法:');
console.log(arrUnique1(arr1));

// 1.5 使用set方法，然后后面用展开运算符（偷懒方法）
function arrUnique1plus(arr) {
    let arrNew = [ ... new Set(arr)]
    return arrNew;
};

console.log('使用set方法，然后后面用展开运算符:');
console.log(arrUnique1plus(arr1));

// 2 遍历后，用查找方法indexOf或者includes查重，再push进去
function arrUnique2(arr) {
    let arrNew = [];
    arr.forEach(item => {
    // 遍历数组这儿用for of也行
        if(arrNew.indexOf(item) == -1){
            // 换成includes就改成判断是不是false
            arrNew.push(item);
        };
    });
    return arrNew;
};

console.log('用查找方法indexOf或者includes:');
console.log(arrUnique2(arr1));

// 3 用filter过滤数组
function arrUnique3(arr) {
    let arrNew = arr.filter((item,index) => {
        // 思想是用filter找出所有第一个出现的元素，然后返回给新数组
        return arr.indexOf(item) === index;
                // 这儿用indexOf就是找每个元素第一次出现的地方，然后给一个索引号
                // 他要是出现某个元素出现了第二次（第二次被item传过来），用这个查找还是会返回第一次出现的地方的索引号，这样就能判断是不是重复的了
    });
    return arrNew;
};

console.log('用filter过滤数组:');
console.log(arrUnique3(arr1));

// 4 最经典俩for方法
function arrUnique4(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            // 把每一个元素和它后面的所有元素比较，如果后面有和他一样的，就删了
            if(arr[i] == arr[j]){
                arr.splice(j, 1);
            };
        };
    };
    return arr;
};

console.log('经典俩for方法:');
console.log(arrUnique4(arr1));


// 浅拷贝
let reimu = {
    uname: 'Hakurei Reimu',
    species: 'human',
    sex: 'female',
    ability: 'Ability to Float',
    sleepTime: [1,2,3,4,5,6],
};

let reimu2 = {};
for (let a in reimu) {
    reimu2[a] = reimu[a];
}
console.log(reimu2);
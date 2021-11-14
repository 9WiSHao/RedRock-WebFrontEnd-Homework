 let youmu = {
    uname: 'Konpaku Youmu',
    species: 'Half-human Half-phantom',
    sex: 'female',
    ability: 'Handling sword techniques',
 }

 function copy1(insertObject){
    let newObject = {};
    for(let i in insertObject){
        newObject[i] = insertObject[i];
    }
    return newObject;
}
let youmu1 = copy1(youmu);

function copy2(insertObject) {
    let { ...newObject } = insertObject
    return newObject
}
let youmu2 = copy2(youmu);

function copy3(insertObject) {
    return JSON.parse(JSON.stringify(insertObject))
}
let youmu3 = copy3(youmu);

let array = [];
array.push(youmu,youmu1,youmu2,youmu3);
console.table(array);
const person = {
    name: '露露姐姐',
    age: 1000000,
    address: {
      city: 'ChongQing',
      area: 'NanShan'
    },
    title: ['student',{year:2021, title:'GoodStudent'}]
  }
  
const {name:uname} = person;
const {age:year1} = person;
const {address:{city}} =person;
const {address:{area:mountain}} = person;
const {title:[title1,{year,title:title2},title3 = 'god']} = person;


  
  
console.log(uname) // 露露姐姐
console.log(year1) // 1000000 这里没有写错哈，就是要输出1000000，结合课件
console.log(city) // ChongQing 
console.log(mountain) // NanShan //这里没有写错，就是要输出NanShan，结合课件
console.log(title1) // student
console.log(title2) // GoodStudent
console.log(title3) // God 结合课件
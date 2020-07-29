//gobal ทั้งตัวโปรแปรจะมองเห้น 
//local ->block scope
//var
let price = 20;
let fruit="มะม่วง"
if(price===20){
    let fruit="ส้มโอ"
    console.log("ในฟังชัน : "+fruit);
}
console.log("ข้างนอก : "+fruit);

console.log("");
var price1 = 20;
var fruit1="มะม่วง"
if(price===20){
    var fruit1="ส้มโอ"
    console.log("ในฟังชัน : "+fruit1);
}
console.log("ข้างนอก : "+fruit1);

//constant ค่าคงที่ 
// const total=100
// total=200
// console.log(total);

const total1={name:"Noppawan",last:"wan"}
total1.name="wanwan"
console.log(total1);
console.log("");

//function มี{}
console.log('function มี{}')
function sorwor(a,b){
    return a+b;
}
let result=sorwor(200,50)
console.log(result);
console.log("");

//function ไม่มี{}
console.log('function ไม่มี{}')
const sorwor1 = (a,b)=> a+b
let result1=sorwor1(500,500);
console.log(result1);

const sorwor2 = (a)=> a+500;
let result2=sorwor2(100)
console.log(result2);
console.log("");

//Default Parameter
console.log('Default Parameter')
console.log();
const addUser=(name,last,city="Bankok")=>{
    return name + last +"จังหวัด:" +city
}
console.log(addUser("Noppawan ","wan ","Thailand"));
console.log(addUser("Tawan ","wan ","Thailand"));
console.log("");

//Rest Operator การถึง parameter ของ function (ส่งค่าเข้าไปฟังชัน ...)
console.log('Rest Operator การถึง parameter ของ function')
const addUser1=(name,last,... city)=>{
    return name + last +"จังหวัด:" +city
}
console.log(addUser("Noppawan ","wan ","Thailand"));
console.log(addUser1("Noppawan ","wan ","Thailand","Bankok"));
//return array message
const addMessage=(first,... message)=>{
    return message.map(m=>first+message)
}
console.log(addMessage("wan1 ","wan2 ","wan3"));

const addNumber=(... number)=>{
    return number.reduce((first1,current)=>{
        return first1+current;
    })
}
console.log(addNumber(10,20,30,40,50));
console.log("");

//Spead Operator เป็นการกระจายสมาชิกแค่จาก Array1 ไป Array2
console.log("Spead Operator เป็นการกระจายสมาชิกแค่จาก Array1 ไป Array2");

let fruit2=['มะม่วง','แตงโม']
console.log(fruit2);
let newfruit2=[... fruit2,"ทุเรียน","มังคุด"]
console.log(newfruit2);

let allfruit2=[...fruit2,...newfruit2]
console.log(allfruit2);
console.log("");

let product={name:"เมาส์",price:200}
console.log(product);
let newproduct={...product,category:"เมาส์ V2"}
console.log(newproduct);

let newprice={...newproduct,price:500}
console.log(newprice);
console.log("");

//Template Literals กำหนดการแสดดงผลตังแปร ต่อ String
console.log("Template Literals กำหนดการแสดดงผลตังแปร ต่อ String");
//แบบเก่า
console.log("แบบเก่า");
const name="Noppawan "
const last="Phonnak "
const city="Bankoko "
const all="Name: "+name+"LastName: "+last+"City: "+city;
const allnew="Name: "+name+"\nLastName: "+last+"\nCity: "+city;
console.log(all);
console.log(allnew);

//แบบใหม่
console.log("แบบใหม่");
const allname1=`Name:${name} LastName:${last} City:${city}`
const allname2=`Name:${name} 
LastName:${last} 
City:${city}`
console.log(allname1);
console.log(allname2);
console.log("");

//Destructuring Object กระจ่ายค่าจาก Object ไปกำหนดให้ตัวแปร
//แแบเดิม
console.log("Destructuring Object กระจ่ายค่าจาก Object ไปกำหนดให้ตัวแปร");
console.log("แบบเดิม");
var preson={
    name:"Noppawan",
    skill:"Computer"
}

var name2=preson.name;
var skill = preson.skill;
console.log(skill);
console.log(`name: ${name2} Skill: ${skill}`);

//แบบใหม่
console.log("แบบใหม่");
var player={
    name:"Noppawan",
    skill:"Sleep"
}
// let {name,skill}=player
// console.log(`name: ${name} Skill: ${skill}`);
console.log("");

//Computed Property Name 
console.log("Computed Property Name");
let food1={name:"Cake 1",price:"200"}
let food2={'name':"Cake2",price:250}
console.log(food1);
console.log(food2);
console.log("");

let user={
    ['user1 '+5*2]:"wan",
    ['user2 '+10*5]:"wan1"
}
console.log(user);
console.log("");

let name4="ผลไม้"
let food3={
    [name4]:name4+"Cake 1",price2:"300",[name4+"CCCC"]:"AAAA"
}
let {name,mix}=food3
console.log(food3);
console.log("");

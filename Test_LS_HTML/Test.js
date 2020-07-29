console.log('Noppawan');

let x = 100; //ตัวเลข 
let text = 'WAN'; //ข้อความ
let a =Number('15'); //ตัวเลข 
let a1=String(15); //ข้อความ


x=99;   y=10;   
console.log(x);
let z =  x+y;
console.log(z)

let Bu = true;
let bu1 = false;

b1 = 1+2; //3
b2 = 1-2; //1
b3 = 2*2; //4
b4 = 2/2; //1
b5 = 2 ** 3; //8
b6 = 3 % 2; //1

// a30 = a32+1;  a33= a34++;  a35 = a36+=10;

let a10 = 2;
let a11 = 1;
let a13 = a10 > a11; //true
let a14 = a10 >=y; //true

let a15 = a10 < a11; //flase
let a16 = a10 <=a11; //flase

let a17 = a10 === a11; //flase
let a18 = a10 !== a11; //true

let a20 = true;
let a21 = false;
let a19 = a20 && a21; //flase t t = t
let a25 = a20 || a21; //true t f = t
let a22 = ! a21; //true เปลี่ยนให้ตรงข้าม

let a23 = 100;
if(a23 >=80) {
    console.log('A');
}
else if(a23>=70){
    console.log('B');
}
else if(a23>=60){
    console.log('C');
}
else if(a23>=50){
    console.log('D');
}
else {   
    console.log('F');
}

for(let a40 = 1; a40 <=5; a40++){
    console.log(a40);  
    }



console.log('Number **2');
for(let a41 = 1; a41 <=5; a41++){
    let a42 = a41**2;
    console.log(a42);
}

console.log(' continue; //ข้าม ');
for(let a42 = 1; a42 <=12; a42++){  
    if(a42 % 2 === 0){
        continue; //ข้าม
        console.log(a42);
    }
}

console.log(' ');

console.log('Break');
for(let a43 = 1; a43 <=12; a43++){
    break; //ออกจากการทำงานทันที
    let a432 = a43**2;
    console.log(a423);
}

function Area (){
    let length=2;
    let width=2;
    let height=3;
    let Area2 = length * width;
    let Anser = 1/3 * Area2 * height;
    console.log(Anser);
}
Area(); Area();

console.log('99');
function Area5 (length,width,height){
    
    let Area2 = length * width;
    let Anser = 1/3 * Area2 * height;
    console.log(Anser);
}
Area5(2,2,3);
Area5(4,4,3);

console.log('109');
function Area6 (length,width,height){
    
    let Area2 = length * width;
    let Anser = 1/3 * Area2 * height;
    return Anser;
}
let Area7 = Area6(2,2,3);
let Area8 = Area6(4,4,3);
console.log('Area7 = '+Area7,'Area8 = '+Area8);



//<i> </i> ตัวเอียง  <b> </b> ตัวหนา

// let content2 = document.getElementById('content-2'); 
// let textHtml = '11111111111111111111 JS ';
// textHtml += 'ข้อความจาก JS';
// content2.innerHTML = textHtml;

// <div id="content-1">content-1 ข้อความหน้าเว็ป</div>
// <div id="content-2">content-2</div>
// <div id="content-3">content-3</div> 


// function showMessage(){
//     message.innerHTML = 'ยันยันแล้ว';
// }
// buttonOK.addEventListener('click', showMessage)

// && เท่ากับ  || true       ! true = false   


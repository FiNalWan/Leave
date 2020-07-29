const express = require('express'); //เรียกใช้โมดู Download มา insatll
var request = require('request'); //เรียกใช้โมดู Download มา insatll
const app = express();
var bodyParser = require('body-parser') //เรียกใช้ body ของ HTML ภายใน form
app.use (bodyParser.urlencoded({
  extended: true
}));

app.listen(3000,()=>{
  console.log('Start server at port 3000') //ทำให้รู้ว่า Satart ได้หรือเปล่า

})

app.post('/ok', function(req, res, next) {
  var firstName=req.body.firstName;
  var surName=req.body.lastName; 
  var token='afjyVND7yB94Ue1q0z7dQ4hI9otO9UAt1VdoqbE9c8N'
  // var token='afjyVND7yB94Ue1q0z7dQ4hI9otO9UAt1VdoqbE9c8N'
request({
  method: 'POST',
  uri: 'https://notify-api.line.me/api/notify',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  auth: {
    'bearer': token
    // 'bearer': 'afjyVND7yB94Ue1q0z7dQ4hI9otO9UAt1VdoqbE9c8N'
  },
  form: {
    message:'ชื่อจริง :'+firstName+' นามสกุล :'+surName+'\n ชนิดการลา : ลากิจ \n หมายเหตุ : 1111111'
  
  }
}, (err, httpResponse, body) => {
  if(err){
    console.log(err);
  } else {
    res.send('ส่งสำเร็จ')
    // res.redirect('C:/Users/wan_n/Desktop/Leave/test2.html');
  //   res.json({
  //     // httpResponse: httpResponse,
  //     // body: body
  //   });
  }
});
});
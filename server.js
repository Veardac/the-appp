const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 

var con = mysql.createConnection({
  host: "mysqltest.claoe0d14zoe.us-east-1.rds.amazonaws.com",
  user: "mysqltest", 
  password: "mysqltest", 
  database: "mysqltest"
});
 

con.connect(function(err) {
  if (err) throw err;
 
 console.log('connection successful');
});



app.get('/',(req,res)=>{
  res.json('OK');
})

app.post('/',(req,res)=>{
	var {name,rollno} =req.body;
	var records = [[req.body.name,req.body.rollno]];
	if(records[0][0]!=null)
	{
		con.query("INSERT into student (name,address,mobile,email) VALUES ?",[records],function(err,res,fields){

			if(err) throw err;

			console.log(res);
		});
	}
	res.json('Form recieved');


})

app.listen(3001,()=>{
  console.log("Port 3001");
})



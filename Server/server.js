const express=require("express");
const bodyParser= require("body-parser");
const app=express();
app.use(bodyParser.json());
const cors= require("cors");
app.use(cors())

const database={
	users:[
	{
		id:'123',
		name:"John",
		email:"john@gmail.com",
		password:"cookies"
	},
	{
		id:'124',
		name:"sally",
		email:"sally@gmail.com",
		password:"banana"
	}
	]
}

app.get('/profile/:id',(req,res)=>{
	const {id} =req.params;
	let found=false;
	database.users.forEach(user=>{
		if(user.id===id){
			found=true;
			return res.json(user);

		}
	})
	if(!found){
		res.status(400).json("Not found");
	}
})

app.get('/',(req,res)=>{
	res.send(database.users);
})
app.post("/signin",(req,res)=>{
	if(req.body.email===database.users[0].email && req.body.password===database.users[0].password){
		res.json("success");
	}
	else{
		res.status(400).json("error loggin in");
	}

})


app.listen(3000,()=>{
	console.log("app is running on port 3000")
})



const express = require("express")
const bodyParser = require("body-parser")
const app = express()

var users= []
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.post("/fruit",(req,res) =>{
	console.log(req.body);
	res.send("Working on it")
})

app.post("/save", (req,res) =>{
	console.log(req.body)
	users.push(req.body)
	res.send("Data Saved")
})

app.get("/users",(req,res) =>{
	res.send(users)
})

app.listen(8000, ()=>{
	console.log("Server running at 8000");
})
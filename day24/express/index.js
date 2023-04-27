var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))

app.post("/calculate",function(req,res){
    console.log(req.body)
    var num1 = parseInt(req.body.num1)
    var num2 = parseInt(req.body.num2)
    var opr = req.body.opr
    if(opr == "add"){
        var result = num1 + num2
    }
    else if(opr == "sub"){
        var result = num1 - num2
    }
    else if(opr == "mul"){
        var result = num1 * num2   
    }
    else{
        var result = num1 / num2   
    }
   
    res.send(result.toString())
})

app.listen(8000,()=>{
    console.log("Server running at 8000")
})
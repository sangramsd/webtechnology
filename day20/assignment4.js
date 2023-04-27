fs= require("fs")
var data = fs.readFileSync("file1.txt")
var x=data.toString()
var a= data.split(',')
console.log(a)




fs= require("fs")
var data = fs.readFileSync("dummy.txt")
console.log(data.toString())
var str = "Read data from file\n"
fs.appendFileSync("dummy.txt", str)

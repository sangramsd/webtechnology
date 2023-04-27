var fs = require("fs")
var readline = require("readline")

var inp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
inp.question("enter name: ",function(name){
    inp.question("enter age: ",function(age){
        inp.question("enter DOB: ",function(DOB){
            console.log(name+"\n  "+age+"\n  "+DOB)
            inp.close()
        })
    })
})

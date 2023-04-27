var fs = require("fs")
var readline = require("readline")

var inp = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
inp.question("enter name: ",function(name){
    inp.question("enter age: ",function(age){
        inp.question("enter DOB: ",function(DOB){
            fs.writeFile("day21_3.txt",name +" "+age+" "+DOB,function(err){
                console.log("done")
            })
            inp.close()
        })
    })
})
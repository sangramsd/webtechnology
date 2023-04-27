var fs = require ("fs")
fs.readFile("day21.txt",function(err,data){
    console.log(data.toString())
    var str=data
    fs.writeFile("day21_1.txt",str,function(err){
        console.log("done")
})
})
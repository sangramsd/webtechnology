var fs = require("fs")
 var num =3
 for (let i=1; i< 11; i++){
    var res =(num*i)+"\n"
    fs.appendFileSync("tABLE.txt",res)
 }
var http = require("http")

var server = http.createServer(function(req,res){
    res.write("working page")
    res.end()
});

server.listen(8000,function(){
    console.log("server is running at 8000")
})
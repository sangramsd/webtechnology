exports.palindrome = function(string){
    var str = string.length 
    
    for(var i=0 ; i< str/2;i++){
        if(string[i] !== string[str -1-i]){
            console.log("given string is not palindrome")
            
        }
        else{
            console.log("given string is palindrome")
        }
        break
    }  
}

exports.Concat =function(string1,string2){
    var a= string1
    var b=string2
    var res=a.concat(string2)
    return res
}
exports.date =function( today){
    var dt= today
    console.log(dt.getHours())
}
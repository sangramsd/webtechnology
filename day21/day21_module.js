exports.even = function (a){
    var a
    if (a%2 ==0){
        console.log("number is even")
    }
}
exports.odd = function (a){
    var a 
    if (a % 2 !=0){
        console.log("number is odd")
    }

}
exports.palindrome = function (a){
    var a 
    var rev = 0
    var org=a
    while(a>0){
    rev =a%10+rev*10
    a=a/10
    }
    if(org = rev){
        console.log("number is palindrome")
    }
    else{
        console.log("number is not palindrome")
    }
}
exports.primary = function(a){
    var a 
    var count =0
    for (var i= 1; i<=a;i++){
        if (a%i==0){
            count++
        }
    }
    if(count ==2 ){
        console.log("number is primary")
    }
    else{
        console.log("number is notprimary")
    }
}
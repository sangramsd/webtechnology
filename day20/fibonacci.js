exports.fibo =function(){
var num1=0
var num2=1
var res
  res=num1+num2

  while(res< 100){
    console.log(res)
    num1=num2
    num2=res
    res=num1+num2
  }
}
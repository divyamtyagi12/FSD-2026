
// // // let a=30;
// // // console.log("value of a is:"+a);
// // // var b=40;
// // // if(b>30)
// // // {
// // //   b=10;
// // //   console.log("Value of b is:"+b);
// // // }
// // // console.log("Value of b outside is:"+b);
// // // function  sum(a,b)
// // // {
// // //   return a+b;
// // // }

// // // console.log(sum(12,53));
// // const sum=(a,b)=>{return a+b};
// // console.log(sum(2,3));
// // const data=function(msg){
// // return "Hello " +msg}
// // console.log(data("add node js"));
// function sum(a,b){
//   return a+b;
// }
// function sumwithmsg(clbk,msg)
// {
//   const result=clbk(2,6);
//   console.log("Your result is:"+result +" Well done "+msg);
// }
// sumwithmsg(sum,"Divyam");
function login(msg,error)
{
  if(error)
  {
    console.log("Error"+error);
  }
  else{
    console.log(msg);
  }
}
function loginhandler(username,password,clbk)
{
  if(username=="Divyam"&&password=="12345")
  {
    clbk("Success",null);
  }
  else{
    clbk(null,"Invalid username or passsword");
  }
}
loginhandler("Divyam","12345",login);


var username = document.querySelector(".name");
var usermail = document.querySelector(".mail");
var userpass = document.querySelector(".pass");
var bootn  = document.querySelector(".Botn");

var arr;
if(localStorage.getItem("storage") == null){
    arr=[];
}else{
    arr=JSON.parse(localStorage.getItem("storage"));
    

}


var xname=false;
var xmail=false;



function sure(){
    for(var i=0;i<arr.length;i++){
        if(arr[i].uname==username.value){
            
            xname=true;
            break;
        }else if(arr[i].umail==usermail.value){
                xmail=true
        }
            
        }
    }
 
function validation(){
    var regexN= /^[a-zA-Z]{3,}[0-9-_]*$/;
    var regeXE=/^[a-zA-Z]{1,}[0-9-_]*\@(yahoo|gmail|Gmail)\.com$/;
    var regexP= /^[a-zA-Z]{3,}[0-9]*$/;
if(regexN.test(username.value)==true&&regeXE.test(usermail.value)==true&&regexP.test(userpass.value)==true){
    return true;
}else{return false;}
}
    
    function clear(){
      username.value="";
      usermail.value="";
      userpass.value="";
    }
    
function first(){
    if(validation()==true){

   
        var signup = {
            uname:username.value,
            umail:usermail.value,
            upass:userpass.value,   
        }

        sure();
        if(xname==false && xmail==false){
            arr.push(signup);
        
            clear();
            localStorage.setItem("storage" , JSON.stringify(arr));
            
        }else{
            alert("user name or email are already exsist");
            clear();
        }
           
       
        }else{
            alert("invaild name or password or email")
        }
       

}
bootn.addEventListener("click" , function(){
   first();
    }
 )
//=====================================signin===================================


var pressin = document.querySelector(".pressin")
var vaildmail = document.querySelector(".smail");
var vaildpass = document.querySelector(".spass");
var sbootn  = document.querySelector(".sBotn");
var signin = document.querySelector(".signin");
var signUp = document.querySelector(".signUp");
var pressup = document.querySelector(".pressup");
var home = document.querySelector(".home");
var heading = document.getElementById("heading").innerHTML="Welcom";
var logout = document.querySelector(".logout");


var siign={
    vmail:vaildmail.value,
    vpass:vaildpass.value,
}

sbootn.addEventListener("click" , function(){
    var y;
for(var index=0;index<arr.length;index++){
    if(arr[index].umail==vaildmail.value&&arr[index].upass==vaildpass.value){
y=true;
   break;    

    }
}
if(y==true){
    home.classList.remove("d-none");
    home.classList.add("d-flex");

}else{
    clear();
    alert("account is not exsist");
}
})



pressup.addEventListener("click" , function(){
    signin.classList.remove("d-flex");
    signin.classList.add("d-none");
    signUp.classList.remove("d-none");
    signUp.classList.add("d-flex");
    
    
})

logout.addEventListener("click",function(){
    home.classList.remove("d-flex");
    home.classList.add("d-none");

})

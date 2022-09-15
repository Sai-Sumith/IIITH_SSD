let vemail=0;
let vuname=0;
let vpwd=0;

function ValidateEmail() {
    var email = document.getElementById("gemail").value;
    var lblError = document.getElementById("error");
    lblError.innerHTML = "";
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!expr.test(email)) {
        lblError.innerHTML = "Invalid email address.";
    }
    else{
        vemail=1;
    }
}

function ValidateUname() {
    let uname = document.getElementById("suname").value;
    let upper=0;
    let numer=0;
    let lerror = document.getElementById("unamerror");
    lerror.innerHTML = "";
    for(let i=0;i<uname.length;i++){
        if(uname[i]>='A' && uname[i]<='Z')
        upper=1;
        if(uname[i]>='0' && uname[i]<='9')
        numer=1;
    }
    if (upper==0 || numer==0) {
        lerror.innerHTML = "Invalid User Name";
    }
    else{
        vuname=1;
    }
}

   function ValidatePwd(){
    let ipwd=document.getElementById("spwd").value;
    let sepwd=document.getElementById("cpwd").value;
    let pwderror = document.getElementById("perror");
    pwderror.innerHTML = "";
    if(ipwd==sepwd){
        vpwd=1;
    }
    else{
     pwderror.innerHTML = "Password Mismatch";
    }
   } 

   function allvalid(){
      let name=document.getElementById("mname").value; 
      let email=document.getElementById("gemail").value;
      let username=document.getElementById("suname").value;
      let tlead=document.getElementById("teamlead").value;
      if(vemail==1 && vuname==1 &&vpwd==1){
      alert(
        "Name:"+name+
        "\n" +
        "Email:"+email+
        "\n" +
        "Username:"+username+
        "\n"+
        "Team Lead:"+tlead
         +"\n"
      );
      }

   }
   document.onkeyup=function(e){
    if(e.ctrlKey && e.which==77){
        var element=document.body;
        element.classList.toggle("dark-mode");
    }
   }
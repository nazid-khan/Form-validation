

function validateForm(){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let flag = 1;

    if(username.value == ""){
         document.getElementById("userError").innerHTML = "Username is Empty";
         flag = 0;
    }else if(username.value.length < 3 ){
         document.getElementById("userError").innerHTML = "Username requires 3 char";
         flag = 0;
    }else{
         document.getElementById("userError").innerHTML = "";
         flag = 1;
    }

    if(password.value == ""){
         document.getElementById("passwordError").innerHTML = "Password is Empty";
         flag = 0;
    }else{
         document.getElementById("passwordError").innerHTML = "";
         flag = 1;
    }

    if(flag){
         return true;
    }else{
         return false;
    }    
 }
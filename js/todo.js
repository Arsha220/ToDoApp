// let user=document.getElementById("user");
// let pwd=document.getElementById("pwd");
// let form=document.getElementsByClassName("form-container");
// function validate(callback){
//     if (user.value.trim()=="admin"&&pwd.value==12345){
//         return callback();
//     }
//     else if(user.value!="admin"&&pwd.value==12345){
//         error.innerHTML=" Username is Invalid";
//         error.style.border="3px solid red";
//         error.style.color="yellow";
//         error1.innerHTML=" Password is Valid";
//         error1.style.border="3px solid blue";
//         error1.style.color="yellow";
//     }
//     else if(user.value.trim()=="admin"&&pwd.value!=12345){
//         error.innerHTML=" Username is valid";
//         error.style.border="3px solid blue";
//         error.style.color="yellow";
//         error1.innerHTML=" Password is Invalid";
//         error1.style.border="3px solid red";
//         error1.style.color="yellow"
//         return false;
//     }
//     else{
//         error1.innerHTML=" Username and Password is Invalid";
//         error1.style.border="3px solid red";
//         error1.style.color="yellow";
//         return false;
//     }
//     function callback()
//     {
//         error1.innerHTML=" Username and Password is Valid";
//         error1.style.border="3px solid blue";
//         error1.style.color="yellow";
//     }  
// }
let user=document.getElementById("user");
let pwd=document.getElementById("pwd");
let user1=document.getElementById("user1");
let pwd1=document.getElementById("pwd1");
function usercheck() {
    if (user.value == "admin") {
        console.log(user.value);
        user1.innerHTML = "";
        pwd1.innerHTML = "";
        return true;
    } else {
        user1.innerHTML = "Username:admin";
        user1.style.color = "red";
        user1.style.fontFamily="San serif";
        return false;
    }
}
function passcheck() {
    if (pwd.value == "12345") {
        pwd1.innerHTML = "";
        return true;
    } 
    else {
        pwd1.innerHTML = "Password : 12345";
        pwd1.style.color = "red";
        pwd1.style.fontFamily="San serif";
        return false;
    }

}

function validate(callback) {
    if (usercheck() && passcheck()) {
        callback();

    } else {
        return false;
    }
}

function display() {
    window.open("main.html");
    return true;
}

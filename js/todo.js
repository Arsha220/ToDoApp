let user=document.getElementById("user");
let pwd=document.getElementById("pwd");
let user1=document.getElementById("user1");
let pwd1=document.getElementById("pwd1");
function usercheck() {
    if (user.value == "admin") {
        console.log(user.value);
        user1.innerHTML = "";
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
        console.log(pwd.value);
        pwd1.innerHTML = "";
        return true;
    } 
    else {
        pwd1.innerHTML = "Password:12345";
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

let userName = prompt("Nhap username");

if (userName == 'Admin') {
    let passWord = prompt("Nhap password");
    if (passWord == 'TheMaster') {
        alert("Welcome");
    }
    else if (passWord == "") {
        alert('Canceled.');
    }
    else alert("You have entered the wrong password. Please enter again")
}
else if (userName == null) {
    alert('Canceled.');
}
else 
alert("I don't know you");


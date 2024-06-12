function validateForm() {
    var x;
    var y;
    var z;
    x = document.forms["Form"]["Your name"].value;
    y = document.forms["Form"]["Your email"].value;
    z = document.forms["Form"]["Your comment"].value;
    if (x == "") {
    alert("Vui lòng nhập tên");
    return false;
    } else if (y == "") {
    alert("Vui lòng nhập email");
    return false;
    } else if (z == "") {
        alert("Vui lòng để lại lời nhắn");
        return false;
    } else {
        alert("Cảm ơn bạn đã để lại thông tin");
         document.getElementById("Your comment").style.display = "none";
            }
        }

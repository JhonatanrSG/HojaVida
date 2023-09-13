
document.getElementById("ID_DEL_ELEMENTO").style.display = "none";
document.getElementById("ID_DEL_ELEMENTO1").style.display = "block";






function myFunction() {
    var x = document.getElementById("ID_DEL_ELEMENTO1");
    var x1 = document.getElementById("ID_DEL_ELEMENTO");
    if (x.style.display === "none") {
        x.style.display = "block";
        x1.style.display = "none";
    } else {
        x.style.display = "none";
        x1.style.display = "block";
    }
    }


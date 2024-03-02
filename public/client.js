var xhr = new XMLHttpRequest();
var datum = new Date()

document.getElementById("bevitel").addEventListener("click", () =>{
    var date = datum.now();
    var etel = document.getElementById("nev").value 
    var kaloria = document.getElementById("kaloriaszaz").value 
    var tomeg = document.getElementById("tomeg").value
    var url = "http://localhost:3000/bevitel/" +  etel + "/" + kaloria + "/" + tomeg + "/" + date;
    xhr.open("GET", url);
    xhr.send();

})
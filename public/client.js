var xhr = new XMLHttpRequest();

document.getElementById("bevitel").addEventListener("click", () =>{
    var etel = document.getElementById("nev").value 
    var kaloria = document.getElementById("kaloriaszaz").value 
    var tomeg = document.getElementById("tomeg").value
    var url = "http://localhost:3000/bevitel/" +  etel + "/" + kaloria + "/" + tomeg;
    xhr.open("GET", url);
    xhr.send();

})
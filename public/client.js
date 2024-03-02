var xhr = new XMLHttpRequest();
var datum = new Date()

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}


document.getElementById("bevitel").addEventListener("click", (event) =>{
    event.preventDefault();
    var date = Date.now();
    // console.log(formatDate(date))
    var etel = document.getElementById("nev").value 
    var kaloria = document.getElementById("kaloriaszaz").value 
    var tomeg = document.getElementById("tomeg").value
    var url = "http://localhost:3000/bevitel/" +  etel + "/" + kaloria + "/" + tomeg + "/" + formatDate(date);
    xhr.open("GET", url);
    xhr.send();
})
document.getElementById("celgomb").addEventListener("click", (event) =>{
    event.preventDefault();
    var cel = document.getElementById("cel").value;
    var url = "http://localhost:3000/celgomb/" +  cel;
    xhr.open("GET", url);
    xhr.send();
})
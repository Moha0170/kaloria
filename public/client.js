// var xhr = new XMLHttpRequest();
// var datum = new Date()


// function formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2) 
//         month = '0' + month;
//     if (day.length < 2) 
//         day = '0' + day;

//     return [year, month, day].join('-');
// }


// document.getElementById("bevitel").addEventListener("click", (event) =>{
//     event.preventDefault();
//     var kaka = document.getElementById("kaka")
//     var date = document.getElementById("dateText").innerHTML;
//     // console.log(formatDate(date))
//     var etel = document.getElementById("nev").value 
//     var kaloria = document.getElementById("kaloriaszaz").value 
//     var tomeg = document.getElementById("tomeg").value

//     if (kaka.style.visibility === "visible") {
//         var url = "http://localhost:3000/bevitel/" +  etel + "/" + kaloria + "/" + tomeg + "/" + date;
//     }
//     else {
//         var url = "http://localhost:3000/bevitel/" +  etel + "/" + kaloria + "/" + 0 + "/" + date;
//     }

    
//     xhr.open("GET", url);
//     xhr.send();
//     updateScreen(date);
// })
// document.getElementById("celgomb").addEventListener("click", (event) =>{
//     var cel = document.getElementById("cel").value;
//     var url = "http://localhost:3000/celgomb/" +  cel;
//     xhr.open("GET", url);
//     xhr.send();
// })



// document.getElementById("valtb").addEventListener("click", (event) =>{

//     var kaka = document.getElementById("kaka")
//     var kalertek = document.getElementById("kalertek")

//     if (kaka.style.visibility === "visible") {
//         kaka.style.visibility = "hidden";
//         kaka.style.maxHeight = "0px";
//         kalertek.innerHTML = "Kalória érték:";

//     } else {
//         kaka.style.visibility = "visible";
//         kaka.style.maxHeight = "1000px";
//         kalertek.innerHTML = "Kalória érték /100g:";
//     }
// })
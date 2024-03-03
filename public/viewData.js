var xhr = new XMLHttpRequest();
var datum = new Date()

var defDate = formatDate(Date.now());

async function BevittKaloria(date) {

    const response = await fetch(`/data/${date}`);
    const data = await response.json();

    kcal = 0;


    data.forEach(element => {

        if (element.tomeg == 0) {
            kcal += parseInt(element.kaloria);
        } else {
            kcal+= element.kaloria*(element.tomeg/100);
        }
    });


    return kcal;
}
async function maxKaloria() {
    const response = await fetch(`/kcal`);
    const data = await response.json();

    kcal = data.cel;
    return kcal;

}
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

function dateChange(change, date){
    var presentDate = Date.parse(date);
    var newDate = new Date(presentDate);
    if (change == 0) {
        newDate.setDate(newDate.getDate() - 1);
    }
    else if (change == 1){
        newDate.setDate(newDate.getDate() + 1)
    }
    presentDate = newDate;

    return formatDate(presentDate);
}

async function updateScreen(date = defDate) {
    maxKcal= await maxKaloria();
    bevittKcal = await BevittKaloria(date);
    document.getElementById("dateText").innerHTML = date;
    
    document.getElementById("bevitt").innerHTML = `Bevitt kalória: ${bevittKcal}/${maxKcal} kcal`;
    document.getElementById("felvettLista").innerHTML = await Listazas(date);

}

document.getElementById("date0").addEventListener("click", (event) =>{
    defDate = dateChange(0, defDate);
    updateScreen(defDate);
})
document.getElementById("date1").addEventListener("click", (event) =>{
    defDate = dateChange(1, defDate);
    updateScreen(defDate);
})

updateScreen(defDate);


async function Listazas(date) {

    const response = await fetch(`/data/${date}`);
    const data = await response.json();

    output = "";


    data.forEach(element => {
        kcal = 0;
        if (element.tomeg == 0) {
            kcal += parseInt(element.kaloria);
        } else {
            kcal+= element.kaloria*(element.tomeg/100);
        }

        output+= `<div>
        <h1>${element.etelNeve}</h1>
        <p>${kcal} kcal</p>
        </div>`
    });


    return output;
}

document.getElementById("bevitel").addEventListener("click", (event) =>{
    event.preventDefault();
    var kaka = document.getElementById("kaka")
    var date = document.getElementById("dateText").innerHTML;
    // console.log(formatDate(date))
    var etel = document.getElementById("nev").value 
    var kaloria = document.getElementById("kaloriaszaz").value 
    var tomeg = document.getElementById("tomeg").value

    if (kaka.style.visibility === "visible") {
        var url = "http://localhost:3000/bevitel/" +  etel + "/" + kaloria + "/" + tomeg + "/" + date;
    }
    else {
        var url = "http://localhost:3000/bevitel/" +  etel + "/" + kaloria + "/" + 0 + "/" + date;
    }

    
    xhr.open("GET", url);
    xhr.send();
    updateScreen(date);
})
document.getElementById("celgomb").addEventListener("click", (event) =>{
    var cel = document.getElementById("cel").value;
    var url = "http://localhost:3000/celgomb/" +  cel;
    xhr.open("GET", url);
    xhr.send();
})



document.getElementById("valtb").addEventListener("click", (event) =>{

    var kaka = document.getElementById("kaka")
    var kalertek = document.getElementById("kalertek")

    if (kaka.style.visibility === "visible") {
        kaka.style.visibility = "hidden";
        kaka.style.maxHeight = "0px";
        kalertek.innerHTML = "Kalória érték:";

    } else {
        kaka.style.visibility = "visible";
        kaka.style.maxHeight = "1000px";
        kalertek.innerHTML = "Kalória érték /100g:";
    }
})

// lajos nem csinalt semmit adjanak neki egyest koszi
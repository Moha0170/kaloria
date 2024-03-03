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

async function updateScreen(date = "2024-03-02") {
    maxKaloria= await maxKaloria();
    bevittKcal = await BevittKaloria(date);
    
    document.getElementById("bevitt").innerHTML = `Bevitt kalória: ${bevittKcal}/${maxKaloria} kcal`;

}

updateScreen("2024-03-02");
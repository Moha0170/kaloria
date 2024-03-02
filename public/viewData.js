
async function BevittKaloria(date) {

    const response = await fetch(`/data/${date}`);
    const data = await response.json();

    kcal = 0;
    data.forEach(element => {
        kcal+= element.kaloria*(element.tomeg/100);
    });


    return kcal;
}
async function maxKaloria() {
    const response = await fetch(`/kcal`);
    const data = await response.json();

    kcal = data.cel;
    return kcal;

}

async function updateScreen(date = "2024-03-02") {
    maxKaloria= await maxKaloria();
    bevittKcal = await BevittKaloria(date);
    
    document.getElementById("bevitt").innerHTML = `Bevitt kalória: ${bevittKcal}/${maxKaloria} kcal`;

}

updateScreen("2024-03-01");
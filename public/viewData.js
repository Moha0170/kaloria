
async function BevittKaloria(date) {

    const response = await fetch(`/data/${date}`);
    const data = await response.json();

    kcal = 0;
    data.forEach(element => {
        
    });


    return kcal;
}
async function maxKaloria() {
    const response = await fetch(`/kcal`);
    const data = await response.json();

    kcal = data.cel;
    return kcal;
    
}

function updateScreen(date) {
    maxKaloria= maxKaloria();
    bevittKcal = BevittKaloria(date);
    
    document.getElementById("bevitt").innerHTML = `Bevitt kalória: ${bevittKcal}/${maxKaloria} kcal`;

}
let searchbtn = document.getElementById("search");
let countryInp = document.getElementById("search-input");

searchbtn.addEventListener("click",async () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText = true`;
    console.log(finalURL);
     try{
        let response = await fetch(finalURL);
        let data = await response.json();
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));
        result.innerHTML = `<img src ="${data[0].flags.svg}" class = "flag-img">
        <div class = "wrapper">
        <div class = "data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
        </div>
        </div>

           <div class = "wrapper">
        <div class = "data-wrapper">
        <h4>Continet:</h4>
        <span>${data[0].continents[0]}</span>
        </div>
        </div>

        <div class = "wrapper">
        <div class = "data-wrapper">
        <h4>Currency:</h4>
        <span>${Object.keys(data[0].currencies)[0]}</span><span>${data[0].currencies[Object.keys(data[0].currencies)].name}
        </div>
        </div>
        `;
     }
     catch(error){

     console.error('Error fetching data', error);
     result.innerHTML = `<h4>Country not found</h4>`
     }
})
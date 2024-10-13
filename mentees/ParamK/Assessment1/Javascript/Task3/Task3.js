
const getCountry = (countries) => {
    let countriesLength = countries.length;
    let country = "";
    let countryIndex = 0;
    while (countryIndex < countriesLength) {
        country = countries[countryIndex];
        console.log(country);
        countryIndex++;
    }
    return country;
}
getCountry(["India", "USA", "Germany", "Spain", "France"]);


const getTable = (number) => {
    let val = 0;
    for (let i = 0; i <= 10; i++) {
        val = number * i;
        console.log(val);
    }
}
getTable(2);


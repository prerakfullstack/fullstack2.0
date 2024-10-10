localStorage.setItem('Username',"Kunal");
document.getElementsByTagName('p')[0].innerText = localStorage.getItem('Username');

const countries = new Map([
    ["India","Delhi"],
    ["America","Washington DC"],
    ["Japan","Tokiyo"]
]);

function getCaptical(country){
    return countries.get(country);
}

const Capital = getCaptical("Japan")

console.log(Capital);

const uniqueVal = new Set([1,2,3,4,5]);

const ans = uniqueVal.has(4);

console.log(ans);
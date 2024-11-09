localStorage.setItem('userName', 'Alice')
const retrievedName = localStorage.getItem('userName')
console.log('retrievedName: ', retrievedName)



const countryCapitalMap = new Map([
    ['USA', 'Washington, D.C.'],
    ['France', 'Paris'],
    ['Japan', 'Tokyo']
]);
console.log('countryCapitalMap: ', countryCapitalMap);

const getCapital = country => countryCapitalMap.get(country)
console.log(getCapital('France'))

const uniqueValues = new Set([10, 20, 30, 40, 50])
const checkValueInSet = value => uniqueValues.has(value)
console.log(checkValueInSet(30));

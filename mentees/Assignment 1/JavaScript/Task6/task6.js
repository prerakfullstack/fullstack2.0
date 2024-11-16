let data_1 = [1,2,3,4,5]
let data_2 = [8,7,6]

let data = [...data_1, ...data_2.reverse()]

class PersonData {
    constructor(name, age, language) {
        this.name = name;
        this.age = age;
        this.language = language;
    }

    displayData(){
        console.log('Name: ', this.name);
        console.log('Age: ', this.age);
        console.log(`favourite Programming language: ${this.language}`);
    }
}



console.log(data);

let inputName = prompt("Enter Your Name: ");
let inputAge  = prompt("Enter your Age: ");
let inputArray = prompt("Enter Your Favourite Programming Language (Use comma for sparation): ");

let array = inputArray.split(',');

const pData = new PersonData(inputName, inputAge, array);

pData.displayData();

const copyData = {...pData} ;

const age = 18;

copyData.age = age;

console.log('No... Age will be constatnt ', copyData.age);

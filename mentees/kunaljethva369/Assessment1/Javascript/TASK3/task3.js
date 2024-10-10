let arr = ["India","USA","Poland","UK","Iran"];

function logArr(arrary) {
    for (let i = 0; i < arrary.length; i++) {
        console.log(arrary[i]);
    }
}

function multiplicationOfNum(num){
    for(let i = 1; i <= 10; i++){
        console.log(num*i);
    }
}

logArr(arr);
multiplicationOfNum(12);
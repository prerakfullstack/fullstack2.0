let arr = [30,55,65,201,20,10];

console.log("Sorted Array ",arr.sort(
    (a,b) => {
        if (a > b) {
            return -1;
        }
        else {
            return 1;
        }
    }
));

const FilterArr = arr.filter((ele)=>{
    if(ele > 50){
        return ele;
    } 
});
console.log("Filtered Array ",FilterArr);

const sumOfAll = arr.reduce((preVal,currVal)=>{
    return preVal + currVal;
});

console.log("Sum of All ",sumOfAll);

let decimalNumber = 5.8;

console.log("Round ",Math.round(decimalNumber));
console.log("Floor ",Math.floor(decimalNumber));
console.log("Ceil ",Math.ceil(decimalNumber));
console.log("Random ",Math.random());
const countrieNames = ["India", "america", "africa", "london"];


for (let i = 0; i < countrieNames.length; i++) {
    console.log("countrieName ==>>>>", countrieNames[i]);
};

function logTableOfGivenNum(num1) {
    let multipliar = 1;
    while (multipliar < 11) {
        console.log(`${num1}x${multipliar}=${parseInt(num1) * multipliar}`);
        multipliar++;
    };
};

console.log("logTableOfGivenNum  ===>>", logTableOfGivenNum(2));

function iterateArray() {
    let len = country.length;
    let check = 0;
    while (check < len) {
        console.log(country[check]);
        ++check;
    }
}

function table(param) {
    for (let i = 1; i <= 10; ++i) {
        console.log(param + ' * ' + i + ' = ' + (param*i));
    }
}

console.log('\n\nList of Country....');

var country = ['Bharat', 'UAE', 'Russia', 'Japan', 'Germany'];
iterateArray();

let arg = 3636; 

console.log('\n\nTable of ' + arg );
table(arg);

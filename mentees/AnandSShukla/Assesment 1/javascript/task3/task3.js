
const arr = ["India", "USA", "UK", "Nepal", "China"];
for (let country of arr) {
  console.log("country name ", country);
}

function MultipleTable(num) {
  if (num > 0) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = `, num * i);
    }
  }
}
MultipleTable(18);

// Output

// country name  India
// country name  USA
// country name  UK
// country name  Nepal
// country name  China
// 18 x 1 =  18
// 18 x 2 =  36
// 18 x 3 =  54
// 18 x 4 =  72
// 18 x 5 =  90
// 18 x 6 =  108
// 18 x 7 =  126
// 18 x 8 =  144
// 18 x 9 =  162
// 18 x 10 =  180

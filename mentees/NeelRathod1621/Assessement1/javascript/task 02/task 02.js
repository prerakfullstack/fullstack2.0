function operations(a, b) {
    console.log("Addition", a + b);
    console.log("subtractions", a - b);
    if (a == b) {
        console.log("Both numbers are equal");
    } else if (a > 0 && b > 0) {
        console.log("Both numbers are greater than Zero");
    }
}

operations(25, 15)
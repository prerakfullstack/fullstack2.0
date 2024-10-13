const startEngineBTN = document.getElementById("startEngineBTN");

const carDetails = {
    make: "suzuki",
    modal: "tesla",
    year: "2018",
    startEngine: () => {
        console.log("engine started!");
    }
}
console.log("startEngineBTN  ==>>>>>>", startEngineBTN);

startEngineBTN.addEventListener("click", carDetails.startEngine);
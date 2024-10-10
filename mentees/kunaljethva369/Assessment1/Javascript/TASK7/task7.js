let CarModel = {
        make:"2024",
        model:"maruti 200X",
        year:"2024",

        startEngine(){
            console.log("Engine started!");
        }
}

let startEngineBtn = document.getElementById("start");

startEngineBtn.addEventListener('click',function(){
    CarModel.startEngine();
});
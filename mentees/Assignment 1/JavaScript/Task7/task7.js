class Cars {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    startEngine(){
        let ret ='Engine of ' + this.make + ' ' +this.model+' is Started';
        return ret;
    }
}

let car = new Cars('Honda', 'City', 2011)


const startCarEngine =  document.querySelector(".EngineStrat");
startCarEngine.addEventListener('click', e => {   
    document.body.innerHTML = car.startEngine(); 
}) 

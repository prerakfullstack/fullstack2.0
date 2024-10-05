
function engineStart() 
{
    console.log("Car Engine Start"); 
}

let car = {
      make :"B.M.W",
      model : "asdf",
      year : 2024,
      startEngine : engineStart,
}

document.querySelector('#button').addEventListener('click', function(){
  car.startEngine(); });
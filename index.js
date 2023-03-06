/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let num = 0
const unit = document.getElementById("unit")
const lenghtResult = document.getElementById("lenght-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")
const mainBtn = document.getElementById("main-btn")

    function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }
  mainBtn.addEventListener("click", function(){
      num = unit.value
    convertMeters()
    convertVolume()
    convertMass()
})
  
function convertMeters(){
    let meters = (num * 0.305).toFixed(2)
    let feet = (num * 3.281).toFixed(2)
    lenghtResult.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
}

function convertVolume(){
    let liters = (num * 0.264).toFixed(2)
    let gallons = (num * 3.785).toFixed(2)
    volumeResult.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`
}

function convertMass(){
    let kilos = (num * 2.204).toFixed(2)
    let pounds = (num * 0.455).toFixed(2)
    massResult.textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`
}


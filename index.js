/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//  <h3 id="mass">20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos</h3>

const numToConvert = document.getElementById("num-to-convert")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

function convertLength(num) {
    let feet = (num * 3.281).toFixed(3)
    let meters = (num / 3.281).toFixed(3)
    return `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`
}

function convertVolume(num) {
    let gallons = (num * 0.264).toFixed(3)
    let liters = (num / 0.264).toFixed(3)
    return `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`
}

function convertMass(num) {
    let pounds = (num * 2.204).toFixed(3)
    let kilos = (num / 2.204).toFixed(3)
    return `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`
}

convertBtn.addEventListener("click", function() {
    let num = numToConvert.value
    lengthEl.textContent = convertLength(num)
    volumeEl.textContent = convertVolume(num)
    massEl.textContent = convertMass(num)
})
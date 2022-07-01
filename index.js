function getVal() {
    
let feet = 0.3048;
let gallon = 0.2641;
let pounds = 2.2046;
let num1 = document.getElementById("numinput").value;

// metersFeet
let feetMeter = document.getElementById("feetm")
let metersToFeet = (num1 / feet).toFixed(3)
let feetToMeter = (num1 * feet).toFixed(3)
feetMeter.textContent = num1 + " meters " + " = " + metersToFeet + " Feet | " + num1 + " feet " + " = " + feetToMeter + " meters";


//LiterGaloons
let literCl = document.getElementById("litergal")
let litertogalon = (num1 * gallon).toFixed(3)
let galontoliter = (num1 / gallon).toFixed(3)
literCl.textContent = num1 + " Gallons " + " = " + litertogalon + " liters | " + num1 + " gallons " + " = " + galontoliter + " liters";


//kilostopound
let kiloPound = document.getElementById("kilond")
let kilotopound = (num1 * pounds).toFixed(3)
let poundtokilo = (num1 / pounds).toFixed(3)
kiloPound.textContent = num1 + " kilos " + " = " + kilotopound + " pounds | " + num1 + " pounds " + " = " + poundtokilo + " kilos";

}
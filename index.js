// Import stylesheets
import './style.css';

// Write Javascript code!

var weight = prompt("What is your weight in kilograms?");
var height = prompt("What is your height in meters?");

function bmiCalc(weight, height){
  var bmi = weight / (height * height);
  bmi = Math.round(bmi);

  if (bmi <18.5){
alert("Your BMI is " + bmi + ", so you are underweight");
}

  if (bmi >= 18.5 && bmi <= 24.9){
alert("Your BMI is " + bmi + ", so you have a normal weight");
}

  if (bmi >24.9){
alert("Your BMI is " + bmi + ", so you are overweight");
}


}

var bmi = bmiCalc(weight, height);
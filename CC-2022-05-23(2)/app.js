// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//P: weight and height
//R: calculate BMI and return body "status"
//E: given (80,1.8), result "Normal"
//PC: create a function to calculate bmi and return "Underweight", "Normal", "Overweight", or "Obese"
function bmi(weight, height) { 
    let bmi = weight / (height * height);
    return (bmi <= 18.5) ? "Underweight" : (bmi <= 25.0) ? "Normal" : (bmi <= 30.0) ? "Overweight" : "Obese";
}
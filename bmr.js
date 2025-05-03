// Calculate BMI
function calculateBMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let category = "";

    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obesity";

    document.getElementById("bmiResult").innerText = `BMI: ${bmi} (${category})`;
}

// Calculate Daily Calories
function calculateCalories() {
    const age = document.getElementById("age").value;
    const weight = document.getElementById("calWeight").value;
    const height = document.getElementById("calHeight").value;
    const activityLevel = document.getElementById("activityLevel").value;

    // Calculate BMR for Males using Mifflin-St Jeor Equation
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    const dailyCalories = (bmr * activityLevel).toFixed(0);

    document.getElementById("caloriesResult").innerText = `Daily Calories: ${dailyCalories} kcal`;
}

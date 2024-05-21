document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100;
    const age = document.getElementById('Age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const bmi = weight / (height * height);
    document.getElementById('BMI').value = bmi.toFixed(2);
    document.querySelector('.desc').textContent = getBmiDescription(bmi, gender);
  });
  
  function getBmiDescription(bmi, gender) {
  
    if (gender === '1') {
      if (bmi < 18.5) {
        return document.getElementById('Underweight');
      }
       else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal';
      } 
      else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
      } 
      else {
        return 'Obese';
      }
    } 
    else {
      if (bmi < 18.5) {
        return 'Underweight';
      }
       else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'Normal';
      } 
      else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight';
      } 
      else {
        return 'Obese';
      }
    }
}
  
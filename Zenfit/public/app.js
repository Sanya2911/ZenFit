document.getElementById('calorie-form').addEventListener('submit', function(e){
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateCalories, 2000);

  e.preventDefault();
});

function calculateCalories(e) {
  
  const age = document.getElementById('age');
  const gender = document.querySelector('input[name="customRadioInline1"]:checked');
  const weight = document.getElementById('weight');
  const height = document.getElementById('height');
  const activity = document.getElementById('list').value;
  const totalCalories = document.getElementById('total-calories');
  
  
  if (age.value === '' || weight.value === '' || height.value === '' || 80 < age.value || age.value < 15) {
    errorMessage('Please make sure the values you entered are correct')
  } else if(gender.id === 'male' && activity === "1") {
    totalCalories.value = 1.2 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  } else if(gender.id === 'male' && activity === "2") {
    totalCalories.value = 1.375 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  } else if (gender.id === 'male' && activity === "3") {
    totalCalories.value = 1.55 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  } else if(gender.id === 'male' && activity === "4") {
    totalCalories.value = 1.725 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)));
  } else if(gender.id === 'male' && activity === "5") {
    totalCalories.value = 1.9 * (66.5 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(height.value)) - (6.755 * parseFloat(age.value)))
    ;
  } else if(gender.id === 'female' && activity === "1") {
    totalCalories.value = 1.2 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  } else if(gender.id === 'female' && activity === "2") {
    totalCalories.value = 1.375 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  } else if(gender.id === 'female' && activity === "3") {
    totalCalories.value = 1.55 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  } else if(gender.id === 'female' && activity === "4") {
    totalCalories.value = 1.725* (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height.value)) - (4.676 * parseFloat(age.value)));
  } else {
    totalCalories.value = 1.9 * (655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(height)) - (4.676 * parseFloat(age.value)));
  } 

  document.getElementById('results').style.display = 'block';

  document.getElementById('loading').style.display = 'none';
}

function errorMessage(error) {
  document.getElementById('results').style.display = 'none';

  document.getElementById('loading').style.display = 'none';
  const errorDiv = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv, heading);

  setTimeout(clearError, 4000);
}

function clearError() {
  document.querySelector('.alert').remove();
}

const smallCups = document.querySelectorAll('.cup-small')

const liters = document.getElementById('liters')

const percentage = document.getElementById('percentage')

const remained = document.getElementById('remained')



updateBigCup()



smallCups.forEach((cup, idx) => {
    
    cup.addEventListener('click', () => highlightCups(idx))
    
})



function highlightCups(idx) {
    
    if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
    
    else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        
        idx--
        
    }
    
    
    
    smallCups.forEach((cup, idx2) => {
        
        if (idx2 <= idx) {
            
            cup.classList.add('full')
            
        } else {
            
            cup.classList.remove('full')
            
        }
        
    })
    
    
    
    updateBigCup()
    
}



function updateBigCup() {
    
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    
    
    if (fullCups === 0) {
        
        percentage.style.visibility = 'hidden'
        
        percentage.style.height = 0
        
    } else {
        
        percentage.style.visibility = 'visible'
        
        percentage.style.height = `${fullCups / totalCups * 330}px`
        
        percentage.innerText = `${fullCups / totalCups * 100}%`
        
    }
    
    
    
    if (fullCups === totalCups) {
        
        remained.style.visibility = 'hidden'
        
        remained.style.height = 0
        
    } else {
        
        remained.style.visibility = 'visible'
        
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
        
    }
    
}






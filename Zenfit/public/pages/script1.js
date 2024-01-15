document.getElementById('getRecipeSuggestions').addEventListener('click', function() {
    var dietaryPreferences = document.getElementById('dietaryPreferences').value;
    var ingredients = document.getElementById('ingredients').value;
    var cookingInstructions = document.getElementById('cookingInstructions').value;

    var request = new XMLHttpRequest();
    request.open('POST', '/recipe_suggestion', true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.response);
            document.getElementById('result').innerHTML = data.recipe_suggestion;
        } else {
            console.error('Error fetching data from server');
        }
    };

    request.onerror = function() {
        console.error('Connection error');
    };

    var requestData = {
        dietary_preferences: dietaryPreferences,
        ingredients: ingredients,
        cooking_instructions: cookingInstructions
    };

    request.send(JSON.stringify(requestData));
});
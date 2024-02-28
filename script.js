document.addEventListener('DOMContentLoaded', function() { // Loading DOM content before executing

    // Selecting elements from the DOM
    
    var counterElement = document.querySelector('h3'); 
    var counterTextElement = document.querySelector('p'); 

    // Initializing variables
    
    var counterValue = 0; 
    var translations = []; // Translations array that will get data from API in the later stage
    var translationIndex = 0; // Index to keep track of current translation

    // Function to fetch translations from an API 
    
    function fetchTranslations() {
        fetch('https://mocki.io/v1/f75f3f33-672f-4b7e-8fdf-5e75019c52e9') 
            .then(response => response.json()) // Parsing the JSON response
            .then(data => {
                translations = data.translations.map(entry => entry.translation); // Storing translations in the translations array and choosing the right entry
            })
            .catch(error => {
                console.error('Error fetching translations:', error); 
            });
    }

    // Function to update the counter and display random colors
    
    function updateCounter() {
        counterValue++; 
        counterElement.textContent = counterValue; 

        // Generating random colors for the counter and text
        
        var randomColour = '#' + Math.floor(Math.random()*16777215).toString(16); // Generating random color hex code, 16777215 is equal to FFFFFF, so its able get every colour
        counterElement.style.color = randomColour; // Setting the color of the counter element
        counterTextElement.style.color = randomColour; // Setting the color of the text element

        // Generating random background color
        
        var randomBackgroundColour = '#' + Math.floor(Math.random()*16777215).toString(16); 
        document.body.style.backgroundColor = randomBackgroundColour; 

        // Displaying translations
        counterTextElement.textContent = translations[translationIndex]; // Setting the text content to the current translation
        translationIndex = (translationIndex + 1) % translations.length; // Updating the translation index for the next translation
    }

    // Call fetch of translations
    
    fetchTranslations();

    // Fetching translations every second
    
    setInterval(fetchTranslations, 1000);

    // Updating the counter and colors every second
    
    setInterval(updateCounter, 1000);

});

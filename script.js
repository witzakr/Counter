document.addEventListener('DOMContentLoaded', function() {
    
    var counterElement = document.querySelector('h3');
    var counterTextElement = document.querySelector('p');

    var counterValue = 0;
    var translations = [];
    var translationIndex = 0;

    function fetchTranslations() {
        fetch('https://mocki.io/v1/f75f3f33-672f-4b7e-8fdf-5e75019c52e9')
            .then(response => response.json())
            .then(data => {
                translations = data.translations.map(entry => entry.translation);
            })
            .catch(error => {
                console.error('Error fetching translations:', error);
            });
    }

    function updateCounter() {
        counterValue++;
        counterElement.textContent = counterValue;

        var randomColour = '#' + Math.floor(Math.random()*16777215).toString(16);
        counterElement.style.color = randomColour;
        counterTextElement.style.color = randomColour;

        var randomBackgroundColour = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomBackgroundColour; 

        counterTextElement.textContent = translations[translationIndex];
        translationIndex = (translationIndex + 1) % translations.length;
    }

    fetchTranslations();

    setInterval(fetchTranslations, 1000);

    setInterval(updateCounter, 1000);

}); 

document.addEventListener('DOMContentLoaded', function() {
    
    var counterElement = document.querySelector('h3');
    
    var counterValue = 0;

    function updateCounter() {
        counterValue++;
        counterElement.textContent = counterValue;

        var randomColour = '#' + Math.floor(Math.random()*16777215).toString(16);
        counterElement.style.color = randomColour;

        
        var randomBackgroundColour = '#' + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomBackgroundColour; 

    }

    setInterval(updateCounter, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
    
    var counterElement = document.querySelector('h3');
    var counterValue = 0;

    function updateCounter() {
        counterValue++;
        counterElement.textContent = counterValue;

        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        counterElement.style.color = randomColor;

    }

    setInterval(updateCounter, 1000);
});

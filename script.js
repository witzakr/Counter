document.addEventListener('DOMContentLoaded', function() {
    
    var counterElement = document.querySelector('h3');
    var counterValue = 0;

    function updateCounter() {
        counterValue++;
        counterElement.textContent = counterValue;
    }

    setInterval(updateCounter, 1000);
});

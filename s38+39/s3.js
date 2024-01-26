let overlay = document.getElementById('overlay');
let loadingText = document.getElementById('loading-text');

let counter = 0;
let opacity = 0.7;
let interval = setInterval(function() {
    if (counter === 100) {
        clearInterval(interval);
        overlay.style.background = 'rgba(0, 0, 0, 0)';
        loadingText.style.opacity = '0';
    } else {
        counter++;
        opacity -= 0.007;
        overlay.style.background = 'rgba(0, 0, 0, ' + opacity + ')';
        loadingText.innerHTML = counter + '%';
    }
}, 20);
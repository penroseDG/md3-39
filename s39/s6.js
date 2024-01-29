let totalWater = 0;
let goal = 2000;
let smallGlassAmount = 250;
let smallGlassesCount = goal / smallGlassAmount;
let smallGlassesContainer = document.getElementById('smallGlasses');
for (let i = 0; i < smallGlassesCount; i++) {
    let smallGlassButton = document.createElement('button');
    smallGlassButton.innerText = 'Drink 250ml';
    smallGlassButton.className = 'button';
    smallGlassButton.onclick = function() {
        drinkWater(smallGlassAmount);
        this.style.backgroundColor = 'lightblue';
    };
    smallGlassesContainer.appendChild(smallGlassButton);
}
function drinkWater(amount) {
    totalWater += amount;
    let waterLevel = document.getElementById('waterLevel');
    waterLevel.style.height = (totalWater / goal * 100) + '%';
    if (totalWater >= goal) {
        alert('You reached your goal!');
    }
}
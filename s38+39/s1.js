let currentStep = 1;

function nextStep() {
    if (currentStep < 4) {
        currentStep++;
        document.getElementById('step' + currentStep).classList.add('active');
    }
    checkButtons();
}
function prevStep() {
    if (currentStep > 1) {
        document.getElementById('step' + currentStep).classList.remove('active');
        currentStep--;
    }
    checkButtons();
}

function checkButtons() {
    document.getElementById('nextButton').disabled = (currentStep === 4);
    document.getElementById('prevButton').disabled = (currentStep === 1);
}

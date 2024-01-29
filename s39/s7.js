function generatePassword() {
    let length = document.getElementById('length').value;
    let includeUppercase = document.getElementById('uppercase').checked;
    let includeLowercase = document.getElementById('lowercase').checked;
    let includeNumbers = document.getElementById('numbers').checked;
    let includeSymbols = document.getElementById('symbols').checked;
    let password = '';
    let characters = '';
    if (includeUppercase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowercase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
        characters += '0123456789';
    }
    if (includeSymbols) {
        characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    }
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('password').value = password;
}
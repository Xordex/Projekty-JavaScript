class PasswordGenerator {
    constructor() {
        this.resultPassword = document.querySelector("#result");
        this.clipboardButton = document.querySelector("#clipboard");
        this.length = document.querySelector("#length");
        this.uppercaseCheckbox = document.querySelector("#uppercase");
        this.lowercaseCheckbox = document.querySelector("#lowercase");
        this.numbersCheckbox = document.querySelector("#numbers");
        this.symbolsCheckbox = document.querySelector("#symbols");
        this.generateButton = document.querySelector("#generate-password");

        this.init();
    }

    init() {
        document.querySelectorAll('.options input[type="checkbox"]').forEach(a => a.addEventListener("click", this.updateOptions));

        this.generateButton.addEventListener("click", this.generatePassword);
        this.updateOptions();
        this.clipboardButton.addEventListener("click", this.copyToClipboard);
    }

    updateOptions = () => {
        const optionMethods = [];
        if (this.uppercaseCheckbox.checked) optionMethods.push(this.getRandomUppercase);
        if (this.lowercaseCheckbox.checked) optionMethods.push(this.getRandomLowercase);
        if (this.numbersCheckbox.checked) optionMethods.push(this.getRandomNumber);
        if (this.symbolsCheckbox.checked) optionMethods.push(this.getRandomSymbol);

        this.optionMethods = optionMethods;
    }

    getRandomUppercase() { //od 65 do 90
        return String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }

    getRandomLowercase() { //od 97 do 120
        return String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }

    getRandomSymbol() {
        const symbols = `!@#$%^&*()-_=+[{;:'",<.>/?}]`;
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    generatePassword = () => {
        if (!this.length.value) return;
        if (this.optionMethods.length === 0) return;

        let password = "";
        const length = this.length.value;

        for (let i = length; i > 0; i--) {
            let randomMethod = Math.floor(Math.random() * this.optionMethods.length);
            password += this.optionMethods[randomMethod]();
        }

        this.resultPassword.innerHTML = password;
    }

    copyToClipboard = () => {
        const v = this.resultPassword.innerHTML;
        const cb = navigator.clipboard;
        cb.writeText(v).then(() => alert('Hasło zostało skopiowane'));
    }
}

const passwordGenerator = new PasswordGenerator();
class TextToSpeech {
    constructor() {
        this.textarea = document.querySelector("#textarea");
        this.voiceSelect = document.querySelector("#voice");
        this.volumeSelect = document.querySelector("#volume");
        this.pitchSelect = document.querySelector("#pitch");
        this.rateSelect = document.querySelector("#rate");
        this.speakSelect = document.querySelector("#speak");
        this.stopSelect = document.querySelector("#stop");

        this.init();
    }

    init() {
        this.addListeners();
        this.getVoices();
    }

    addListeners() {
        this.speakSelect.addEventListener("click", this.speakText);
        this.stopSelect.addEventListener("click", this.stopText);
        window.speechSynthesis.onvoiceschanged = this.getVoices;
    }

    speakText = () => {
        window.speechSynthesis.cancel();

        const text = this.textarea.value;
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.voice = window.speechSynthesis.getVoices().find(voice => voice.name === this.voiceSelect.value);
        msg.pitch = this.pitchSelect.value;
        msg.rate = this.rateSelect.value;
        msg.volume = this.volumeSelect.value;

        window.speechSynthesis.speak(msg);
    }

    stopText = () => {
        window.speechSynthesis.cancel();
    }

    getVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        console.log(voices);
        this.voiceSelect.innerHTML = voices.filter(voice => this.isLangAllowed(voice)).map(voice => {
            return `<option value="${voice.name}">
                ${voice.name} - ${voice.lang}
             </option>`;
        }).join("");
    }

    isLangAllowed = (langToCheck) => {
        const allowedLanguges = ["pl", "en"];
        return allowedLanguges.some(allowedLanguges =>
            langToCheck.lang.includes(allowedLanguges)
        );
    }
}

const textToSpeech = new TextToSpeech();
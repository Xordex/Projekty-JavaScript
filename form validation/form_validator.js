class FormValidator {
    constructor() {
        this.formFields = [];

        this.form = document.getElementById("form");

        this.init();
    }

    init() {
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            this.validateForm();
        })
    }

    validateForm = () => {
        const formResults = this.formFields.map(e => e.validate());
        if (formResults.includes(false)) {
            console.log("Formularz ma błędy");
        } else {
            console.log("Formularz poprawnie uzupełniony");
        }
    }
}
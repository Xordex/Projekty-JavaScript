class FormValidator {
    constructor() {
        this.formFields = [];

        this.form = document.getElementById("form");

        this.addFormField("#username", {
            minlength: 4, maxlength: 20
        });
        this.addFormField("#email", {
            minlength: 4, maxlength: 100
        });
        this.addFormField("#password", {
            minlength: 5, maxlength: 30
        });
        this.addFormField("#password", {
            minlength: 5, maxlength: 30, matchWithPassId: "#password"
        })

        console.log(this.formFields);

        this.init();
    }

    addFormField = (cssSelector, options) => {
        const formField = new FormField(cssSelector, options);
        this.formFields.push(formField);
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
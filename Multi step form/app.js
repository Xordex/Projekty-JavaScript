class MultiStepForm {
    constructor() {

    }

    init() {
        this.form = document.querySelector("form");
        this.steps = Array.from(document.querySelectorAll(".step"));

        const nextbtn = document.querySelectorAll(".next-btn");
        const prevbtn = document.querySelectorAll(".previous-btn");
        const submitbtn = document.querySelector(".submit-btn");

        nextbtn.forEach(e => e.addEventListener("click", () => {
            if (this.checkStepValidity()) {
                this.changeStep(1);
            }
        }));

        prevbtn.forEach(e => e.addEventListener("click", () => this.changeStep(-1)));

        submitbtn.addEventListener("click", () => {
            if (this.checkStepValidity()) {
                this.submitClick();
            }
        });
    }

    changeStep(n) {
        const actualStep = document.querySelector(".active");
        actualStep.classList.remove("active");

        let index = this.steps.indexOf(actualStep);
        this.steps[index + n].classList.add("active");
    }

    submitClick(e) {
        e.preventDefault();
        this.form.reset();
    }

    checkStepValidity() {
        const actualStep = document.querySelector(".active");
        let index = this.steps.indexOf(actualStep);
        const inputs = actualStep.querySelectorAll("input");

        let inputsCorrect = true;

        for (const el of inputs) {
            const valid = el.checkValidity();

            if (valid) {
                el.classList.remove("invalid-input");
            } else {
                el.classList.add("invalid-input");
                inputsCorrect = false;
            }
        }

        return inputsCorrect;
    }
}

const StepForm = new MultiStepForm();
StepForm.init();
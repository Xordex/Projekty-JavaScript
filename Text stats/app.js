const countdisplay = document.querySelector("#charms");
const countdisplaywords = document.querySelector("#words");
const countdisplaysentences = document.querySelector("#sentences");
const textareaarea = document.querySelector("textarea");


textareaarea.addEventListener("input", () => {
    let lettersum = 0;
    let wordsum = 1;
    let sentencessum = 0;

    for (i in textareaarea.value) {
        lettersum++;
        if (textareaarea.value[i] === " ") {
            if (i != textareaarea.value.length - 1) {
                wordsum++;
            }
        }
        if (textareaarea.value[i] === ".") {
            sentencessum++;
        }
    }

    countdisplay.innerHTML = lettersum;
    countdisplaywords.innerHTML = wordsum;
    countdisplaysentences.innerHTML = sentencessum;
})
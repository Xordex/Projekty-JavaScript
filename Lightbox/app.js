class Lightbox {
    constructor() {
        this.init();
    }

    init() {
        this.container = document.createElement("div");
        this.container.id = "lightbox";
        document.body.appendChild(this.container);

        this.lightboxImg = document.createElement("img");
        this.container.appendChild(this.lightboxImg);

        this.addListeners();
    }

    addListeners() {
        const images = document.querySelectorAll(".gallery img");
        images.forEach(img => {
            img.addEventListener("click", () => this.galleryImgClicked(img))
        })

        this.container.addEventListener("click", () => this.container.classList.remove("active"))
        document.addEventListener("keydown", (down) => {
            if (down.key === "Escape") {
                this.container.classList.remove("active");
            }
        })
    }

    galleryImgClicked = (img) => {
        this.lightboxImg.src = img.src;
        this.container.classList.add("active");
    }

}

const lightbox = new Lightbox();
class ConnectionTest {
    init() {
        this.status = document.querySelector(".status");
        this.addListeners();
    }

    addListeners() {
        window.addEventListener('load', this.pageLoaded);
        window.addEventListener("online", () => this.updateNetworkStatus(true));
        window.addEventListener("offline", () => this.updateNetworkStatus(false));
    }

    pageLoaded = () => {
        if (navigator.onLine) {
            this.updateNetworkStatus(true);
        } else {
            this.updateNetworkStatus(false);
        }
    }

    updateNetworkStatus = (flag) => {
        if (flag) {
            this.status.textContent = "your device is Online"
        } else {
            this.status.textContent = "your device is Offline"
        }
    }
}

const connectionTest = new ConnectionTest();
connectionTest.init();
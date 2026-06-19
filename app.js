document.addEventListener("DOMContentLoaded", () => {
    const isHomePage = document.querySelector(".feed") !== null;
    const isSettingsPage = document.querySelector(".settings-card") !== null;
    if (isHomePage) {
        setupHomePage();
    }
    if (isSettingsPage) {
        setupSettingsPage();
    }
});

const slides = ["anime update ","coding update ","gaming update "];
let currentSlide = 0;
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    document.getElementById("slider").textContent = slides[currentSlide];
}

function setupHomePage() {
    let actionButton = document.querySelector(".feed button");
    let inputField = document.querySelector("#post-input");
    let postBox = document.querySelector(".post");

    alert("Welcome to social media application!");
    let userAge = prompt("Please enter your age:");
    if (userAge) {
        alert("Your age is " + userAge+" ?");
    }
    actionButton.addEventListener("click", () => {
        let userTypedThis = inputField.value.trim();
        let processedData = userTypedThis;
        if (userTypedThis === "") {
            alert("Please enter some text before posting.");
            return;
        }
        document.cookie = "username=Yeswanth;max-age=3600;path=/";

        postBox.innerHTML += "<hr><strong>@Yeswanth</strong>: <p>" + processedData + "</p><hr>";
        inputField.value = "";
    });
}
function setupSettingsPage() {
    let randomNumber = Math.floor(Math.random() * 900000) + 100000;
    
    let settingsCard = document.querySelector(".settings-card");
    
    let regDisplay = document.createElement("p");
    
    regDisplay.innerHTML = "<strong>Registration ID:</strong> " + randomNumber;
    
    settingsCard.appendChild(regDisplay);
}

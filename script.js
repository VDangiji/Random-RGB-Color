const rgbBtn = document.querySelector(".rgb-btn");
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyBtn = document.querySelector(".rgb-copy-color");
const rgbColorValue = document.querySelector(".rgb-color-value");


rgbBtn.addEventListener("click", () => {
    let extractRedValue = getRedInputRange.value;
    let extractGreenValue = getGreenInputRange.value;
    let extractBlueValue = getBlueInputRange.value;

    rgbColorValue.textContent = `rgb(${extractRedValue},${extractGreenValue}, ${extractBlueValue}`;
    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue},${extractGreenValue}, ${extractBlueValue}`;
    rgbBtn.style.color = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue}`;
});

// copy rgb color
rgbCopyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(rgbColorContainer.style.backgroundColor);
    alert("RGB color copied to clipboard");
});

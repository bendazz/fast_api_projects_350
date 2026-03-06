const btn = document.getElementById("get-number-btn");
const display = document.getElementById("number-display");

btn.addEventListener("click", async () => {
    const response = await fetch("/rand_int");
    const number = await response.json();
    display.textContent = number;

    // quick pop animation
    display.classList.add("pop");
    setTimeout(() => display.classList.remove("pop"), 300);
});

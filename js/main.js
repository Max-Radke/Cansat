// Countdown bis zum 03.03.2026 mit Raketenanimation
function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const rocketElement = document.getElementById("rocket");
    const launchDate = new Date("2026-03-03T00:00:00").getTime();
    const now = new Date().getTime();
    const distance = launchDate - now;

    if (distance < 0) {
        countdownElement.innerText = "🚀 Der Start ist erfolgt!";
        rocketElement.classList.add("launch");
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

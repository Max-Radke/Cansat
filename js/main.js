// main.js - robuster Countdown (ersetze komplett)

document.addEventListener('DOMContentLoaded', function () {
  const countdownElement = document.getElementById('countdown');
  const rocketElement = document.getElementById('rocket');

  if (!countdownElement) {
    console.warn('Countdown: Element mit id="countdown" nicht gefunden.');
    return; // abbrechen – kein Element zum Anzeigen
  }

  // Startdatum / Uhrzeit (UTC/local je nach Browser)
  const launchDate = new Date('2026-03-11T12:00:00').getTime();

  let intervalId = null;

  function updateCountdown() {
    const now = Date.now();
    const distance = launchDate - now;

    if (distance <= 0) {
      // Start erfolgt
      countdownElement.innerText = '🚀 Der Start ist erfolgt!';
      if (rocketElement) rocketElement.classList.add('launch');
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Template literal mit Backticks (wichtig)
    countdownElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  // Erstaufruf (sorgt für sofortige Anzeige) und dann Intervall
  updateCountdown();
  intervalId = setInterval(updateCountdown, 1000);
});

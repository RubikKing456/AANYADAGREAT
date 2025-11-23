// Set their next birthday (YYYY, MM-1, DD)
const birthday = new Date('2025-12-08T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        document.getElementById("timer").innerText = "🎉 Happy Birthday! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerText =
        `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

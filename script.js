
function openWebsite() {
    document.getElementById("opening").style.display = "none";

    document.getElementById("mainContent").style.display = "block";

    // Mulai musik setelah pengunjung menekan tombol
    const music = document.getElementById("myMusic");

    music.play().catch(() => {
        console.log("Silakan tekan tombol play untuk memutar musik.");
    });
}

function showLetter() {
    const message = document.getElementById("message");
    const button = document.getElementById("letterButton");

    message.classList.remove("hidden");
    button.style.display = "none";
}

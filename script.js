//your JS code here. If required.
document.getElementById("openModal").onclick = function() {
    document.getElementById("modal").style.display = "flex";
};

document.querySelector(".close-modal").onclick = function() {
    document.getElementById("modal").style.display = "none";
};

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

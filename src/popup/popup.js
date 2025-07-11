function sendMessage(msg) {
    browser.tabs.query({active: true, currentWindow: true}, tabs => {
        browser.tabs.sendMessage(tabs[0].id, msg);
    });
}

// ===== COMPLETE =====

complete = document.querySelector("#complete");

complete.addEventListener("click", (e) => {
    sendMessage({
        type: "complete"
    });
});

// ===== SPEED =====

const speed = document.querySelector("#speed");
const speedLabel = document.querySelector("#speedLabel");

speed.addEventListener("input", (e) => {
    speedLabel.textContent = `Video speed: ${e.target.value}x`;
    sendMessage({
        type: "speed",
        value: e.target.value
    });
});

// ===== VIDEO LESSONS ======

const videoSkip = document.querySelector("#videoSkip");

videoSkip.addEventListener("click", (e) => {
    sendMessage({
        type: "videoSkip",
    });
});

const colorsContainer = document.getElementById('colors-container');

window.onload = function() {
    const name = prompt("Please enter your name:");
    if (name && name.trim()) {
        createColors();
        displayMessage(name.trim());
    }
};

function createColors() {
    const colors = ['#ff9933', '#ffffff', '#138808']; // Saffron, White, Green colors
    for (let i = 0; i < 150; i++) {
        const color = document.createElement('div');
        color.classList.add('color');
        color.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        color.style.left = `${Math.random() * 100}vw`;
        color.style.animationDelay = `${Math.random() * 3}s`;
        color.style.opacity = Math.random();
        colorsContainer.appendChild(color);
    }
}

function displayMessage(name) {
    const popupMessage = document.createElement('div');
    popupMessage.classList.add('popup');
    popupMessage.innerHTML = `<p>${name}, "Happy Independence Day"</p>`;
    document.body.appendChild(popupMessage);

    setTimeout(() => {
        popupMessage.style.display = 'none';
    }, 2000);
}

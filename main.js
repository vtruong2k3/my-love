function showPasswordInput() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('password-screen').classList.remove('hidden');
}

function showCustomMessage(message) {
    const notification = document.getElementById('notification');
    document.getElementById('notification-text').innerText = message;
    notification.style.display = 'block';
    notification.style.animation = 'slideDown 0.5s forwards';
}

function closeNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'none';
}

function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === '142003') {
        document.getElementById('password-screen').classList.add('hidden');
        const card = document.getElementById('love-card');
        card.style.display = 'block';
        card.style.animation = 'openCard 1s forwards';
        playMusic();
        generateHearts();
    } else {
        showCustomMessage('Sai mật khẩu! Hãy thử lại.');
    }
}

function playMusic() {
    const music = document.getElementById('bg-music');
    music.play();
}

function generateHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 5 + 7 + 's';
        document.body.appendChild(heart);
        // setTimeout(() => {
        //     heart.remove();
        // }, 40000);
    }
}

// Add animation listener to remove hearts after animation ends
function removeHeartsAfterAnimation(heart) {
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

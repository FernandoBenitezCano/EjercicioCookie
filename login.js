let loginElement = document.getElementById("login");

document.addEventListener('DOMContentLoaded', function () {
    if (loginElement) {
        loginElement.addEventListener('click', login);
    }
});



window.onload = function() {
    const isLoggedIn = document.cookie.split('; ').find(row => row.startsWith(`isLoggedIn`));
    
    if (isLoggedIn && isLoggedIn.split('=')[1] === 'true') {
        // Si isLoggedIn es true, redirigir a la página principal
        window.location.href = 'dashboard.html';
    }
}

function login() {
    const username = document.getElementById('name').value;
    document.cookie = `cesta_de_la_compra=true; expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}`;
    document.cookie = `${username}=${generateRandomToken()}`;
    document.cookie = `isLoggedIn=true`;
    window.location.href = 'dashboard.html';
}

function generateRandomToken() {
    return [...Array(64)].map(() => (Math.random() * 36 | 0).toString(36)).join('');
}
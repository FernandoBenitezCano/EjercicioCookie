let logOut = document.getElementById("logout");

document.addEventListener('DOMContentLoaded', function () {
    if (logOut) {
        logOut.addEventListener('click', logout);
    }
});

function logout() {
    document.cookie = `isLoggedIn=false`;
    window.location.href = `registro.html`;
}

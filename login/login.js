firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "index.html";
    }
})

function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function login() {
    showLoading();
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
        ).then(response => {
            hideLoading();
            window.location.href = "index.html";
    }).catch(error => {
        hideLoading();
        alert("Usuário não encontrado ou credenciais inválidas")
    });
}


function register() {
    window.location.href = "register.html";
}


function toggleEmailErrors() {
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none" : "block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
}

function togglePasswordErrors() {
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none" : "block";
}

function toggleButtonsDisable() {
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    form.loginButton().disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
    const email = form.email().value;
    if (!email) {
        return false;
    }
    return validateEmail(email);
}

function isPasswordValid() {
    return form.password().value ? true : false;
}

const form = {
    email: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
}

function criarImagem() {
    window.location.href = "prompt.html";
}

function onPasswordEnterKeyPress(event) {
    if (event.key === 'Enter') {
        login();
    }
}

document.getElementById('password').addEventListener('keydown', onPasswordEnterKeyPress);
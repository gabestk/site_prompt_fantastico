function showLoading() {
    const div = document.createElement('div');
    div.classList.add('loading');

    const label = document.createElement('label');
    label.innerText = "Carregando...";

    div.appendChild(label);

    document.body.insertBefore(div, document.body.firstChild);
}

function hideLoading() {
    const loadings = document.querySelector('.loading');
    if (loadings) {
        loadings.remove();
    }
}

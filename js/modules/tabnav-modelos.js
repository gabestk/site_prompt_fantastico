export default function initAlternarModelo() {
    const modelLinks = document.querySelectorAll('.modelos-menu a');

    modelLinks.forEach(link => {
        link.addEventListener('click', function (e) {
        e.preventDefault();
        modelLinks.forEach(link => link.classList.remove('ativo'));

        this.classList.add('ativo');
        const tabId = this.getAttribute('data-tab');
        const modelTabs = document.querySelectorAll('.modelos-lista');
        modelTabs.forEach(tab => tab.classList.remove('ativo'));
        document.getElementById(tabId).classList.add('ativo');

        const modelDescriptions = document.querySelectorAll('.modelos-descricao');
        modelDescriptions.forEach(desc => desc.classList.remove('ativo'));

        const descriptionId = tabId + '-content';
        const descriptionElement = document.getElementById(descriptionId);
        if (descriptionElement) {
            descriptionElement.classList.add('ativo');
        }
        });
    });
}

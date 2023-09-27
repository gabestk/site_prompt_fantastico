export default function initTabNav(){
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    const ativo = "ativo";

    if(tabMenu.length && tabContent.length) {
        tabContent[0].classList.add(ativo);

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove(ativo);
            });
            const direcao = tabContent[0].dataset.anime
            tabContent[index].classList.add(ativo, direcao);
        };
        const direcao = tabContent[0].dataset.anime
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}
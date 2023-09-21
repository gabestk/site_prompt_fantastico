function initTabNav(){
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
initTabNav();

function initAccordion(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const ativo = "ativo";

    if(accordionList.length) {
        accordionList[0].classList.add(ativo);
        accordionList[0].nextElementSibling.classList.add(ativo);

        function activeAccordion() {
            this.classList.toggle(ativo);
            this.nextElementSibling.classList.toggle(ativo);
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}
initAccordion();

function initiScrollSuave (){
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute("href");
            const section = document.querySelector(href);

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        linksInternos.forEach((link) => {
            link.addEventListener("click", scrollToSection);
        });
};
initiScrollSuave();

function initAnimationScroll () {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    if (sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll (){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top ;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    section.classList.add("ativo");
                }
            })
        }
        animaScroll();

        window.addEventListener("scroll", animaScroll);
    }
}

initAnimationScroll();
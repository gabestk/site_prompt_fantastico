export default function initAccordion(){
    const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
    const ativo = "ativo";

    if(accordionList.length) {
        accordionList[0].classList.add(ativo);
        accordionList[0].nextElementSibling.classList.add(ativo);

        function activeAccordion() {
            this.classList.toggle(ativo);
            this.nextElementSibling.classList.toggle(ativo);
            accordionList.forEach((item) => {
                if (item !== this) {
                    item.classList.remove(ativo);
                    item.nextElementSibling.classList.remove(ativo);
                }
            });
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}
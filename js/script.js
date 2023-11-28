import initiScrollSuave from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initAlternarModelo from "./modules/tabnav-modelos.js";
import SlideNav from './modules/slide.js';


initiScrollSuave();
initAnimationScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initAlternarModelo();

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addControl('.custom-controls'); 

document.getElementById('registerBtn').onclick = function() {
    window.location.href = 'login.html'
}


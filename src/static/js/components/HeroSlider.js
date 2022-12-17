import Swiper, { Pagination } from 'swiper';

export default class HeroSlider {
    init(){
        const swiper = new Swiper('.c-hero-slider', {
            modules: [Pagination]
        });
    }
}


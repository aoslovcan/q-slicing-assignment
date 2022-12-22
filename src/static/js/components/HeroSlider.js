import Swiper, { Pagination } from "swiper";

export default class HeroSlider {
  init() {
    const swiper = new Swiper(".c-hero-slider", {
      direction: "horizontal",
      loop: true,
      modules: [Pagination],

      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
}

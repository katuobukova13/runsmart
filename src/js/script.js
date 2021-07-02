$(".carousel__inner").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: `<button type="button" class="slick-prev"><img src="icons/prev.svg" alt="arrow"></button>`,
  nextArrow: `<button type="button" class="slick-next"><img src="icons/next.svg" alt="arrow"></button>`,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
  ],
});

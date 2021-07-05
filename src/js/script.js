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

$("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
  $(this)
    .addClass("catalog__tab_active")
    .siblings()
    .removeClass("catalog__tab_active")
    .closest("div.container")
    .find("div.catalog__content")
    .removeClass("catalog__content_active")
    .eq($(this).index())
    .addClass("catalog__content_active");
});

function toggleContent(item) {
  $(item).each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".catalog-item__content")
        .eq(i)
        .toggleClass("catalog-item__content_active");
      $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
    });
  });
}
toggleContent(".catalog-item__link");
toggleContent(".catalog-item__back");

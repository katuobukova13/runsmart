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

function addItemsToI() {
  let i = 1;

  while (i < 6) {
    $("#i0")
      .clone(true)
      .attr("id", "i" + i++)
      .appendTo(".catalog__content_1");
  }
}

addItemsToI();

// toggle tabs + content
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

//modal work
$("[data-modal=consultation]").on("click", function () {
  $(".overlay, #modal-consultation").fadeIn();
});

$(".modal__close").on("click", function () {
  $(".overlay, #modal-consultation, #modal-thanks, #modal-order").fadeOut();
});

$(".button_mini").each(function (i) {
  $(this).on("click", function () {
    $("#modal-order .modal__desc").text(
      $(".catalog-item__subtitle").eq(i).text()
    );
    $(".overlay, #modal-order").fadeIn();
  });
});

//form validation with jquery.validate.min.js
$(".form").validate();
$("#modal-consultation form").validate();
$("#modal-order form").validate();

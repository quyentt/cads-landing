$(document).ready(function () {
  $(".menu-item").each(function () {
    if ($(this).children(".child-menu").length > 0) {
      $(this).addClass("has-child");
      $(this)
        .children(".menu-item-label")
        .click(function (e) {
          e.preventDefault();
          $(".child-menu").collapse("hide");

          $(".child-menu-toggle").removeClass("rotate");

          $(this).parent().find(".child-menu").collapse("toggle");
          $(this).parent().find(".child-menu-toggle").toggleClass("rotate");
          $(this).parent().find(".child-menu-toggle").toggleClass("rotate");
          $(this).parent().find(".child-menu-toggle").addClass("rotate");
        });
    }
  });
  $(".menu-mobi-toggle").click(function () {
    $(".menu-group").addClass("show");
    $("body").addClass("has-menu-show");
  });
  $(".menu-mobi-close").click(function () {
    $("body").removeClass("has-menu-show");
    $(".menu-group").removeClass("show");
  });
  var swiper = new Swiper(".customer-slider", {
    spaceBetween: 30,
    slidesPerView: 1,
    freeMode: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

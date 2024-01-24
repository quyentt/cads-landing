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
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $(".customer-slider").mouseenter(function () {
    swiper.autoplay.stop();
  });
  $(".customer-slider").mouseleave(function () {
    swiper.autoplay.start();
  });
  // $("#register").modal("show");

  // Gets the video src from the data-src on each button

  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  console.log($videoSrc);

  // when the modal is opened autoplay it
  $("#video_pop").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#video_pop").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    $("#video").attr("src", $videoSrc);
  });

  // go top
  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "300"
    );
  });
});

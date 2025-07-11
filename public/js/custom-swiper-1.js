(function() {
  // Asegúrate que Swiper está definido
  if (typeof Swiper !== "undefined") {
    new Swiper('.swiper', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      direction: 'horizontal',
      loop: true,
      speed: 1200,
      watchSlidesProgress: true,
      parallax: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    console.warn("Swiper no está cargado aún.");
  }
})();

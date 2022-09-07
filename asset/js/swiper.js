var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  function minus(min) {
    document.getElementById("num").value = parseInt(document.getElementById("num").value) - 1;
    if (document.getElementById("num").value <= parseInt(min)) {
      document.getElementById("num").value = min;
    }
  }
  function plus(max) {
    document.getElementById("num").value = parseInt(document.getElementById("num").value) + 1;
    if (document.getElementById("num").value >= parseInt(max)) {
      document.getElementById("num").value = max;
    }
  }
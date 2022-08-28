var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  $(function () {
    var texto = 1;
    var string;

    setInterval(function () {
      switch (texto) {
        case 1:
          string = "ASSOCIÇÃO";
          break;
        case 2:
          string = "COMUNITÁRIA";
          break;
        case 3:
          string = "CATOLÉ";
          break;
        case 4:
          string = "CABACEIRAS";
          break;
      }

      $(".texto").html(string);

      texto != 4 ? texto++ : (texto = 1);
    }, 3000);
  });
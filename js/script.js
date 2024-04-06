document.addEventListener('DOMContentLoaded', function() {
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var kracma = document.querySelector(".kracma");
  var infoClose = document.querySelector(".portfolio_info_top .close");
  var infoTwo = document.querySelector(".portfolio_info_box");
 
kracma.addEventListener("click", function() {
    infoTwo.classList.add("on");
});
infoClose.addEventListener("click", function() {
    infoTwo.classList.remove("on");
});


  // 여기에 실행할 코드를 작성합니다.
});
document.addEventListener("DOMContentLoaded", function(){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

       // gnb 링크를 클릭했을 때 스크롤 이벤트 처리
    document.querySelectorAll('.gnb a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작(링크 이동) 방지
            const targetId = this.getAttribute('href').substring(1); // 링크의 href 속성값을 가져와 # 제거
            const targetElement = document.getElementById(targetId); // 해당 섹션 요소를 가져옴
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); // 부드러운 스크롤 이동
            }
        });
    });
   });
   
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.move3d').forEach(wrap => {
  const y = wrap.getAttribute('data-y') || -130;
  gsap.to(wrap, {
    y: y,
    scrollTrigger: {
      trigger: wrap,
      start: 'top bottom',
      end: 'bottom top',
      scrub: .7
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // すべてのSVGパス要素を取得
  const textPaths = document.querySelectorAll('path');

  textPaths.forEach(textPath => {
    const pathLength = textPath.getTotalLength();

    // パスの初期状態を設定
    textPath.style.strokeDasharray = pathLength;
    textPath.style.strokeDashoffset = pathLength;
    textPath.style.fillOpacity = 0;

    // アウトラインを描画するアニメーションを設定
    gsap.to(textPath, {
      strokeDashoffset: 0,
      duration: 3,
      ease: "power1.inOut",
      onComplete: () => {
        // アウトライン描画完了後に中身の色をフェードイン
        gsap.to(textPath, {
          fillOpacity: 1,
          duration: 2,
          ease: "power1.inOut"
        });
      }
    });
  });
});


// ホバーアニメーション
const hoverAnimate = document.querySelectorAll(".hover-img");
const hoverDefault = document.querySelectorAll(".hover-default");

hoverDefault.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    hoverAnimate[index].classList.add("active");
  });

  element.addEventListener("mouseout", () => {
    hoverAnimate[index].classList.remove("active");
  });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const openBtn = document.querySelector('.openbtn1');
  
    openBtn.addEventListener('click', function(event) {
      event.preventDefault(); 
      modal.classList.toggle('open');
    });
  
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.classList.remove('open');
      }
    });
  
    document.querySelector('.modal-inner').addEventListener('click', function(event) {
      event.stopPropagation(); 
    });
  });
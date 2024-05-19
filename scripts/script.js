gsap.registerPlugin(ScrollTrigger);

window.addEventListener('resize', function() {
  const viewportWidth = window.innerWidth;
  const heroImages = document.querySelectorAll('.hero img, .hero svg');
  heroImages.forEach(heroImage => {
    heroImage.style.width = `${viewportWidth * 0.1}px`;
  });
});

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
// スクロールイベントでナビゲーションを表示・非表示（768px以上の時のみ）
window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    var windowWidth = window.innerWidth; // 現在の画面幅を取得

    // 768px以上の場合のみスクロールイベントを適用
    if (windowWidth > 768) {
        if (window.scrollY > 300) {
            nav.style.display = 'block'; // 300pxスクロールで表示
        } else {
            nav.style.display = 'none'; // スクロール前は非表示
        }
    }
});


// Strengthsのバブルアニメーション
const bubbles = document.querySelectorAll(".bubble");

bubbles.forEach((bubble) => {
  bubble.addEventListener("mouseenter", function () {
    bubble.classList.add("animated");
  });

  bubble.addEventListener("mouseleave", function () {
    bubble.classList.remove("animated");
  });
});


// ハンバーガーメニューの開閉機能
var hamburger = document.getElementById('hamburger');
var nav = document.getElementById('nav');
hamburger.addEventListener('click', function () {
    nav.classList.toggle('show'); // メニューの表示/非表示を切り替え
});

// メイン写真上のテキストアニメーション
const animationTargetElements = document.querySelectorAll(".textanimation");
for (let i = 0; i < animationTargetElements.length; i++) {
    const targetElement = animationTargetElements[i];
    texts = targetElement.textContent;
    textsArray = [];

    targetElement.textContent = "";

    for (let j = 0; j < texts.split("").length; j++) {
        textsArray.push('<span><span style="animation-delay: ' + (j * 0.15) + 's" >' + texts.split("")[j] + '<span></span>')
    }

    for (let k = 0; k < textsArray.length; k++) {
        targetElement.innerHTML += textsArray[k];
    }
}

// 一つずつ現れるアニメーション
document.addEventListener("DOMContentLoaded", function () {
    const garallies = document.querySelectorAll('.garally');

    const options = {
        threshold: 0.1, // 要素が10%表示されたら
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateX(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // .garally にアニメーションを順番に設定
    garallies.forEach((garally, index) => {
        garally.style.opacity = 0;
        garally.style.transform = "translateX(30px)"; // 右からスライドイン
        garally.style.transition = `opacity 0.6s ease-out ${index * 0.2}s, transform 0.6s ease-out ${index * 0.2}s`;

        // IntersectionObserverで監視
        observer.observe(garally);
    });
});


// TImelineアニメーション
document.addEventListener("DOMContentLoaded", function () {
    const works = document.querySelectorAll('#timeline .work'); // 各 li.work 要素を取得

    const options = {
        threshold: 0.1, // 要素が10%表示されたら
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    works.forEach(work => {
        // 初期状態を設定
        work.style.opacity = 0;
        work.style.transform = "translateY(30px)"; // 下から30px移動している位置から始まる
        work.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

        // IntersectionObserverで監視を開始
        observer.observe(work);
    });
});

// 各ページスライドインするアニメーション
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateX(0)";
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 }); // optionsで適切な閾値を設定

// スライドイン対象の要素を取得して監視
document.querySelectorAll('.slide-in-left, .slide-in-right').forEach(element => {
    observer.observe(element);
});

var splide = new Splide( '.splide', {
  rewind:true,
  pagination:false,
} );
  
  splide.mount();

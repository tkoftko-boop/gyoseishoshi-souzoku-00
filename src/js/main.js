// スマートフォン表示時のメニュー開閉
(function () {
  var toggleButton = document.getElementById("menu-toggle");
  var nav = document.getElementById("site-nav");

  if (!toggleButton || !nav) return;

  toggleButton.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      nav.classList.remove("is-open");
      toggleButton.setAttribute("aria-expanded", "false");
    }
  });
})();

// FAQアコーディオンの開閉
(function () {
  var triggers = document.querySelectorAll(".faq-trigger");

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      var isOpen = trigger.getAttribute("aria-expanded") === "true";
      var answer = document.getElementById(trigger.getAttribute("aria-controls"));

      trigger.setAttribute("aria-expanded", String(!isOpen));
      if (answer) {
        answer.hidden = isOpen;
      }
    });
  });
})();

// トップへ戻るボタンの表示切替
(function () {
  var backToTop = document.getElementById("back-to-top");
  if (!backToTop) return;

  var showAfter = window.innerHeight;
  var isMobile = window.matchMedia("(max-width: 767px)");
  var faqInView = false;

  function updateVisibility() {
    var hideForFaq = isMobile.matches && faqInView;
    backToTop.classList.toggle("is-visible", window.scrollY > showAfter && !hideForFaq);
  }

  window.addEventListener("scroll", updateVisibility, { passive: true });
  updateVisibility();

  backToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  // モバイル表示時、FAQセクションが画面内にある間はボタンを隠す
  var faqSection = document.getElementById("faq");
  if (faqSection && "IntersectionObserver" in window) {
    var faqObserver = new IntersectionObserver(function (entries) {
      faqInView = entries[0].isIntersecting;
      updateVisibility();
    });
    faqObserver.observe(faqSection);
  }
})();

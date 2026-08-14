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

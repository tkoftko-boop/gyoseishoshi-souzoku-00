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

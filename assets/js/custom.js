document.addEventListener("DOMContentLoaded", function () {
  const btnMenu = document.querySelector(".menu__button");
  const menu = document.querySelector(".menu");

  // Se não achar os elementos, sai silenciosamente
  if (!btnMenu || !menu) return;

  btnMenu.addEventListener("click", function () {
    const isOpen = menu.classList.contains("menu--open");

    if (isOpen) {
      // Fecha o menu
      menu.classList.remove("menu--open");
      menu.classList.add("menu--close");
    } else {
      // Abre o menu
      menu.classList.add("menu--open");
      menu.classList.remove("menu--close");
    }
  });
});

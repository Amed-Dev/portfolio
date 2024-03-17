const navItems = document.querySelectorAll(".nav-menu a");
const observer = new IntersectionObserver(
  (entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const id = "#" + entrada.target.id;
        history.pushState({}, entrada.target.textContent, id);

        navItems.forEach((navItem) => {
          navItem.classList.remove("active");

          const href = navItem.attributes.href.nodeValue;
          if (href === id) {
            navItem.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.65,
    rootMargin: "0px",
  }
);

export default observer;

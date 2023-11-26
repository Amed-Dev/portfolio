const sections = document.querySelectorAll(".container .content section");
const navItems = document.querySelectorAll(".nav-menu a");

const observer = new IntersectionObserver(
  (entradas, observador) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const id = "#" + entrada.target.id;
        history.pushState({}, entrada.target.innetText, id);

        navItems.forEach((navItem) => {
          navItem.classList.remove("active");

          const href = navItem.attributes.href.nodeValue;
          console.log(id);
          if (href === id) {
            navItem.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "65% 0px -10% 0px",
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

const sectionLinks = Array.from(navigation.querySelectorAll('a[href^="#"]'));
const pageSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && pageSections.length > 0) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleSection) return;

    sectionLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${visibleSection.target.id}`) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }, { rootMargin: "-25% 0px -65% 0px" });

  pageSections.forEach((section) => sectionObserver.observe(section));
}

const headerEls = document.querySelectorAll(".list-section__header-touch");

if (headerEls) {
  headerEls.forEach((header) =>
    header.addEventListener("click", (e) => {
      if (e.target.parentNode.lastElementChild.classList[0].includes("items")) {
        const display = window.getComputedStyle(
          e.target.parentNode.lastElementChild
        ).display;

        e.target.parentNode.lastElementChild.style.display =
          display === "none" ? "block" : "none";
      }
    })
  );
}

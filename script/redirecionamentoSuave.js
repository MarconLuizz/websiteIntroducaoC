document.querySelectorAll("header nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElem = document.getElementById(targetId);
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: "smooth" });
    }
  });
});

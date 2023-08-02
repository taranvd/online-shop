import _vars from "../_vars";

// _vars.cardDescLink.forEach((el) => {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();

//     let target = e.currentTarget.getAttribute("href");

//     _vars.cardDescLink.forEach((el) => el.classList.remove("card-desc__link--active"));
//     document.querySelectorAll(".card-desc__content").forEach((el) => el.classList.remove("card-desc__content--active"));

//     e.currentTarget.classList.add("card-desc__link--active");
//     document.querySelector(`[data-target=${target}]`).classList.add("card-desc__content--active");
//   });
// });

_vars.cardDescLink.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    let target = e.currentTarget.getAttribute("href");

    _vars.cardDescLink.forEach((el) => el.classList.remove("card-desc__link--active"));
    document.querySelectorAll(".card-desc__content").forEach((el) => el.classList.remove("card-desc__content--active"));

    e.currentTarget.classList.add("card-desc__link--active");
    document.querySelector(`[data-target="${target}"]`).classList.add("card-desc__content--active");
  });
});

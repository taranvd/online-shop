import _vars from "../_vars";

_vars.catalogFiltersTop.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.currentTarget
      .closest(".catalog-filter")
      .classList.toggle("catalog-filter--open");
  });
});

_vars.hideFilters.addEventListener("click", () => {
  _vars.catalogFiltersTop.forEach((el) => {
    console.log(el);
    el.closest(".catalog-filter").classList.remove("catalog-filter--open");
  });
});

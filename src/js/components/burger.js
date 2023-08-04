import _vars from "../_vars";

_vars.burger.addEventListener("click", () => {
  _vars.nav.classList.add("nav--visible");
});

_vars.navClose.addEventListener("click", () => {
  _vars.nav.classList.remove("nav--visible");
});

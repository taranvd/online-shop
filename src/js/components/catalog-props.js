import _vars from "../_vars";

_vars.catalogColumns.addEventListener("click", (e) => {
  if (
    e.target.classList.contains(".catalog-columns__btn") ||
    e.target.closest(".catalog-columns__item")
  ) {
    let columns = e.target.dataset.columns;
    let columnsBtn = document.querySelectorAll(".catalog-columns__btn");

    columnsBtn.forEach((el) => {
      el.classList.remove("catalog-columns__btn--current");
    });

    e.target.classList.add("catalog-columns__btn--current");

    _vars.catalogGridContent.dataset.gridColumns = columns;
  }
});

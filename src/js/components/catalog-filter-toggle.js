import _vars from "../_vars";

if (document.querySelector(".catalog")) {
  _vars.catalogFiltersTop.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.currentTarget.closest(".catalog-filter").classList.toggle("catalog-filter--open");
    });
  });

  _vars.hideFilters.addEventListener("click", () => {
    _vars.catalogFiltersTop.forEach((el) => {
      console.log(el);
      el.closest(".catalog-filter").classList.remove("catalog-filter--open");
    });
  });

  const createChoiceItem = (text) => {
    return `    <button class="btn-reset catalog-choice__item" data-choice-text="${text}">
    ${text}
    <svg aria-hidden="true">
      <use xlink:href="img/sprite.svg#choice-close"></use>
    </svg>
  </button>`;
  };

  _vars.catalogFilterItems.forEach((el) => {
    el.querySelector("input").addEventListener("change", (e) => {
      let checked = el.querySelector("input").checked;

      if (checked) {
        el.querySelector(".custom-checkbox").classList.add("custom-checkbox--active");
        let text = el.querySelector(".custom-checkbox__text").textContent;

        _vars.catalogChoise.insertAdjacentHTML("afterbegin", createChoiceItem(text));
      } else {
        el.querySelector(".custom-checkbox").classList.remove("custom-checkbox--active");

        let text = el.querySelector(".custom-checkbox").dataset.text;

        document.querySelector(`[data-choice-text='${text}']`).remove();
      }

      el.closest(".catalog-filter").querySelector(".catalog-filter__quantity").textContent = el
        .closest(".catalog-filter__items")
        .querySelectorAll(".custom-checkbox--active").length;

      let activeCheckboxes = document.querySelectorAll(".custom-checkbox--active");

      if (activeCheckboxes.length > 0) {
        _vars.catalogChoise.style.display = "block";
      } else {
        _vars.catalogChoise.style.display = "none";
      }
    });
  });

  _vars.catalogChoise.addEventListener("click", (e) => {
    if (e.target.classList.contains("catalog-choice__item")) {
      e.target.remove();

      let text = e.target.textContent.trim();

      console.log(text);

      document.querySelector(`[data-text='${text}']`).querySelector("input").checked = false;

      document.querySelector(`[data-text='${text}']`).classList.remove("custom-checkbox--active");
    }

    if (e.target.classList.contains("catalog-choice__clear")) {
      Array.from(e.currentTarget.children).forEach((el) => {
        if (!el.classList.contains("catalog-choice__clear")) {
          el.remove();
        }

        document.querySelectorAll(".catalog-filter__quantity").forEach((el) => (el.textContent = 0));

        _vars.catalogFilterItems.forEach((el) => {
          el.querySelector("input").checked = false;
          el.querySelector(".custom-checkbox").classList.remove("custom-checkbox--active");
        });
      });

      e.currentTarget.style.display = "none";
    }

    if (e.currentTarget.children.length === 1) {
      e.currentTarget.style.display = "none";
    }
  });
}

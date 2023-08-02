import _vars from "../_vars";

if (_vars.cardSliderThumbs) {
  _vars.cardSliderThumbs.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-slider__thumb")) {
      let src = e.target.querySelector("img").getAttribute("src");

      _vars.sliderImg.setAttribute("src", src);
    }
  });
}

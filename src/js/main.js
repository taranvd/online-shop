import "./_vendor";
import vars from "./_vars";
import "./_functions";
import "./_components";
import "../products.json";
import SimpleBar from "simplebar";

if (document.querySelector(".card")) {
  new SimpleBar(document.querySelector(".card-desc__nav"));
}

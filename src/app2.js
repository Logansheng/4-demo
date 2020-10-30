import $ from "jquery";
import "./app2.css"
const $app2 = $(".app2");
const $page1 = $(".app2 .page1");
const $page2 = $(".app2 .page2");
$page1.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li
  .addClass("acb")
  .siblings()
  .removeClass("acb");
  const index = $li.index();
  $page2
  .children()
  .eq(index)
  .addClass("act")
  .siblings()
  .removeClass("act");
});
$page1.children().eq(0).trigger('click')
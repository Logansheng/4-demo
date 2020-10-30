import "./app1.css";
import $ from "jquery";
const $number = $(".number");
const $addButton = $(".addButton");
const $subtractButton = $(".subtractButton");
const $multiplyButton = $(".multiplyButton");
const $divideButton = $(".divideButton");
const  n=localStorage.getItem("n")
$number.text( n || 100)

$addButton.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem('n',n)
  $number.text(n);
  console.log(n);
}); //+1
$subtractButton.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem('n',n)
  $number.text(n);
  console.log(n);
}); //-1
$multiplyButton.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem('n',n)
  $number.text(n);
  console.log(n);
});
$divideButton.on("click", () => {
    let n = parseInt($number.text());
    n /= 2;
  localStorage.setItem('n',n)
    $number.text(n);
    console.log(n);
  });

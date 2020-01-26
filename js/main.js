//  this is self-invoking anonymous function
// also called (function()
// also called a module


(() => {
  console.log("some message - from Javascript");
  // find the button element on page by its id with javascript
  let
  // theButton = document.querySelector("#myButton"),
  theHeading = document.querySelector ('h1'),
  // svgImage = document.querySelector("#svggraphic"),
  allSVGs = document.querySelectorAll(".svg");

  // this function changes the heading text
  function changeText() {
   theHeading.textContent = "hello there from console";
 }
 // log the id of the svg to the console when a uer hovers on it
 function logsvg() {
  console.log(this.id);
}


 // theButton.addEventListener("click", changeText);
 // svgImage.addEventListener("click", logsvg);
 // svgImage2.addEventListener("click", logsvg);

 // loop through the collection and apply our event handling to each element
 allSVGs.forEach(item => item.addEventListener('click', logsvg));
// document.querySelector('h1').textContent = "hello there from console";

})();

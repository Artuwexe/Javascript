const elementName = document.querySelector("#elementName");
const form = document.querySelector("form");
const display = document.querySelector(".display");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const element = document.createElement(elementName.value);
  element.innerHTML = "jakis tekst";
  display.append(element); //podpięcie
});

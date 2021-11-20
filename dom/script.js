var hearts = document.getElementsByClassName("fa-heart");
console.log(hearts);
var buttonsdel = document.getElementsByClassName("fa-times");
console.log(buttonsdel);
var items = document.getElementsByClassName("item");
console.log(items);
var plus = document.getElementsByClassName(" fa-plus-square");
var minus = document.getElementsByClassName("fa-minus-square");

// fct heart
for (let i = 0; i < hearts.length; i++) {
  var heart = hearts[i];
  heart.addEventListener("click", (event) => {
    var clickedheart = event.target;
    clickedheart.classList.toggle("color");
  });
}

// //fct plus
for (let i = 0; i < plus.length; i++) {
  var plusquare = plus[i];
  plusquare.addEventListener("click", (event) => {
    var clickedplusquare = event.target;

    clickedplusquare.nextElementSibling.value =
      parseFloat(clickedplusquare.nextElementSibling.value) + 1;
    console.log(clickedplusquare.nextElementSibling.value);
  });
}
//fnt mius
for (let i = 0; i < minus.length; i++) {
  var minusquare = minus[i];
  minusquare.addEventListener("click", (event) => {
    var clickedminusquare = event.target;

    clickedminusquare.previousElementSibling.value =
      parseFloat(clickedminusquare.previousElementSibling.value) - 1;
    console.log(clickedminusquare.previousElementSibling.value);
  });
}
//fnct delet
for (let i = 0; i < buttonsdel.length; i++) {
  var buttondel = buttonsdel[i];
  buttondel.addEventListener("click", (event) => {
    var clickedbuttondel = event.target;
    console.log(event.target.parentElement.parentElement);
    clickedbuttondel.parentElement.parentElement.parentElement.parentElement.remove();
    UpdateTotal();
  });
}

//fnct somme total=(price.produit)plus(price.produit).....
function UpdateTotal() {
  var cartPages = document.getElementsByClassName("item")[0];
  var total = 0;
  for (i = 0; i < cartPages.length; i++) {
    var cartPage = cartPages[i];
    var priceEelment = cartPage.getElementsByClassName("pric")[0];
    var quantityElement = cartPage.getElementsByClassName("quant-input")[0];
    var price = parseFloat(priceEelment.innerText.replace("" + "$"));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("total-pri")[0].innerText = total + "$";
}

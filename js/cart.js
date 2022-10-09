/* onhover:state -> lets make this field color yellow to indicate that its a hotspot of actions where something can be performed.a

add some more physicality to the add to cart button, to indicate and make the users really feel that it is a button. So as to click it more easily. 

cart more colourish once something is in it to pull in the user to actually buy somezing.

make actions change color on hover to let them know action is possible and imminent.

*/

let addButton = document.querySelector(".add-item-button-cart");
let subtractButton = document.querySelector(".subtract-item-button-cart");
let numberOfItems = document.querySelector(".cart-item-counter");
let priceContainer = document.querySelector(".price-span");
let totalPriceContainer = document.querySelector(".price-span-sum");
let deleteButton = document.querySelector(".cart-item-delete-icon");
let productItemContainer = document.querySelector(".cart-purchase-item-div");

let itemCounter = 1;
let itemPrice = 75;

addButton.addEventListener('click',()=> {
    itemCounter++;
    updateItemCounter();
});

subtractButton.addEventListener('click',()=> {
    itemCounter--;
    updateItemCounter();
});

function updateItemCounter() {
    numberOfItems.innerHTML = itemCounter;
    totalPriceContainer.innerHTML = itemCounter * itemPrice;
};

deleteButton.addEventListener("click",()=> {
    deleteProduct();
});

function deleteProduct() {
    productItemContainer.remove();
  };
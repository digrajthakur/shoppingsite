const add = document.querySelector("#h3");
const additem = document.querySelector("#addItem");
const removeitem = document.querySelector("#removeItem");

additem.addEventListener("click", function () {
  (add.innerHTML = "Order Placed"),
    alert("Your Order has been Placed Successfully");
  add.style.color = "Blue";
});
removeitem.addEventListener("click", function () {
  (add.innerHTML = "Buy Now"),
    alert("Your Order has been Cancelled Successfully");
  add.style.color = "Black";
});

// temp 1

const plus = document.querySelector("#h4");
const additem1 = document.querySelector("#addItem1");
const removeitem1 = document.querySelector("#removeItem1");

additem1.addEventListener("click", function () {
  (plus.innerHTML = "Order Placed"), alert("Your Order has been Placed Successfully");
  plus.style.color = "Blue";
});

removeitem1.addEventListener("click", function () {
  (plus.innerHTML = "Buy Now"),
    alert("Your Order has been Cancelled Successfully");
  plus.style.color = "black";
});

// temp 2

const addplus = document.querySelector('#h5');
const additem2 = document.querySelector('#addItem2');
const removeitem2 = document.querySelector('#removeItem2');

additem2.addEventListener('click',function(){
  addplus.innerHTML='Order Placed',alert('Your Order has been Place Successfully');
  addplus.style.color='blue'
})

removeitem2.addEventListener('click',function(){
  addplus.innerHTML='Buy Now',alert('Your Order has been Cancelled Successfully');
  addplus.style.color='black';
})

// temp3

const addplus1 = document.querySelector('#h6');
const additem3 = document.querySelector('#addItem3');
const removeitem3 = document.querySelector('#removeItem3');

additem3.addEventListener('click',function(){
  addplus1.innerHTML='Order Placed',alert('Your Order has been Place Successfully');
  addplus1.style.color='blue'
})

removeitem3.addEventListener('click',function(){
  addplus1.innerHTML='Buy Now',alert('Your Order has been Cancelled Successfully');
  addplus1.style.color='black';
})










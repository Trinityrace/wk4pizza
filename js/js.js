
function getSizeValue() {
  var selectedValue = document.getElementById("size").value;
  return parseInt(selectedValue);
}
function getCrust() {
  var selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}
function getToppings() {
  var selectedToppings = document.getElementById("toppings").value;
  return parseInt(selectedToppings);
}
function getQuantity() {
  var selectedQuantity = document.getElementById("quantity").value;
  return parseInt(selectedQuantity);
}
function getTotalAmount() {
  var totalAmount = (getSizeValue() + getCrust() + getToppings()) * getQuantity();
  alert("Order of" + getQuantity("")  +  " pizza has been processed"  +  ""  + 
   " The Total Amount is kshs "  +  (totalAmount)  +  ""  +  
  " Thank you for shopping with us, welcome again.");
  prompt("enter your location")
  alert("You order will be delivered warmly!")
  alert("Shop with us next and every time.")
  alert("Pizza O'clock values our customers enjoyment.")
}
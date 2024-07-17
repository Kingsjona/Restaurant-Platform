/*This javascript code updates the price of the food item based on selected quantity*/
function TotalAmount (quantityId, priceId, defaultprice) {//function calculates the total price, Accepts quantityId, priceId and defaultprice
    var total_amount;

    var Quantity =document.getElementById(quantityId).value;//access and gets the value of the quantity slider in the html file
    var PriceElement = document.getElementById(priceId)

    if (isNaN(Quantity)){//checks if quantity is not a number...
        total_amount = "Price:$" + defaultprice;//and if quantity is Not a number, set price to default price
    }
    else{//but if quantity is a number...
        total_amount = "Price:$" + (defaultprice * Quantity);//calculate total price(defaultprice x Quantity)
    }
     PriceElement.textContent= total_amount;//update the price displayed with the calculated total
}

//initial call to update prices based on default quantities
  TotalAmount("rice_quantity", "rice_price", 13);//this updates price for fried rice
  TotalAmount('pizza_quantity', 'pizza_price', 7);//this updates price for pizza
  TotalAmount('falafel_quantity', 'falafel_price', 10);//this updates price for falafel

  
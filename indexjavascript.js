/*This javascript code updates the price of the food item based on selected quantity*/
function UpdatePrice (quantityId, priceId, defaultprice) {//function calculates the total price, Accepts quantityId, priceId and defaultprice
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
UpdatePrice('rice_quantity', 'rice_price', 13);//this updates price for fried rice base on selected quantity
UpdatePrice('pizza_quantity', 'pizza_price', 7);//this updates price for pizza based on selected quantity
UpdatePrice('pizza_quantity', 'pizza_price', 7);//this updates price for falafel based on selected quantity


function PopUpForm(buttonId){
         document.getElementById(buttonId).addEventListener("click", function (event){
            event.preventDefault();
         document.querySelector('.order_container').style.display = "flex";
    })
};

PopUpForm('order_button1');//calls the PopUpForm function to enable the pop-up for the "order" button related to Fried rice.
PopUpForm('order_button2');//calls the PopUpForm function to enable the pop-up for the "order" button related to Pizza.
PopUpForm('order_button2');//calls the PopUpForm function to enable the pop-up for the "order" button related to Falafel.

function closeform(){//defines function to close the order form
    document.querySelectorAll('.close').forEach(function(closebutton){//For each elements with the class named 'close",kindly execute the inside code
        closebutton.addEventListener("click", function () {//Adds a click event listener to the "close" button in the form
            document.querySelector('.order_container').style.display ="none";//Hides the order container by setting its display to "none"
        });
    });
}

// Call the function to add event listeners to all close buttons
closeform();

  
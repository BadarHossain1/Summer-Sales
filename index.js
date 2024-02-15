
const cards = document.querySelectorAll('.card');

let titleCount = 1;
let totalPrice = 0;

for(let i = 0; i < cards.length; i++) {
    const card = cards[i];

    card.addEventListener('click', function () {
        const title = card.querySelector("h3").innerText;

        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);

        const titleContainer = document.getElementById("title-container");


        const p = document.createElement("p");
        p.innerText = titleCount + ". "  + title;
        titleCount++;
        titleContainer.appendChild(p);

        //Calculate total price
        totalPrice += price;

       if(totalPrice>0){
        document.getElementById("purchased").addEventListener('click', function(event){
            const text = document.getElementById("purchase-text");
            text.innerText = "You have purchased " + totalPrice + " worth of items.";
        });
       }
       
        
       

        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
        document.getElementById("total").innerText = totalPrice.toFixed(2);
        
    });

}


const btn = document.getElementById("apply-btn");
btn.addEventListener('click', function (){
    //get the value from input

    const couponElement = document.getElementById("input-field");
    const couponValue = couponElement.value;
    const couponCode = couponValue.split(" ").join("").toUpperCase();

    if(totalPrice>=200){
        if(couponCode === "SELL200"){
            const discountElement = document.getElementById("discountPrice");
            const discountAmount = totalPrice * 0.2;
            discountElement.innerText = discountAmount.toFixed(2);

            //rest total price

            const restTotal = document.getElementById("total");
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById("input-field").value = "";


        }
        else{
            alert("Invalid coupon code. Please try again")
        
        }
    }
    else{
        alert("You need to spend at least 200 to use the coupon. Shop more bruv!")
    }

});







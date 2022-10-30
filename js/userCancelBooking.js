function openPaymentWindow() {
    document.querySelector(".billOverlay").style.display= "flex";
    document.body.style.overflow = "hidden";
}


function makePayment(){
    alert("Payment has been made!");
    document.querySelector(".billOverlay").style.display= "none";
    document.body.style.overflow = "scroll";
    document.getElementById("invoiceToPaid").innerHTML = "Completed";
    document.querySelector(".paymentBTN").style.display = "none";
    document.querySelector(".statusReturned").style.backgroundColor = "rgb(101, 101, 101)";
}








function cancelBooking () {
    document.querySelector("#toBeCancelled").style.display ="none";
    alert("Booking Cancelled!");
    document.querySelector("#warningWindowOverlay").style.display= "none";
    document.body.style.overflow = "scroll";
}

function openCancelWindow() {
    document.querySelector("#warningWindowOverlay").style.display= "flex";
    document.body.style.overflow = "hidden";
}

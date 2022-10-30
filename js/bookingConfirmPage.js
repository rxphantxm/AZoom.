
// For Booking summary Window
document.getElementById("checkoutBTN").addEventListener("click", function(){
    document.querySelector(".popupConfirmationOverlay").style.display = "flex";
});

document.querySelector(".pay").addEventListener("click", function(){
    alert("Reservation has been made!! Yay");
})

function closeSummary(){
    document.querySelector(".popupConfirmationOverlay").style.display = "none";
};


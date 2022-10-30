function showBill() {
    document.querySelector(".billOverlay").style.display = "flex";
}


document.querySelector(".billOverlay").addEventListener("click", function(){
    document.querySelector(".billOverlay").style.display = "none";
});



function sendBill() {
    alert("Bill has been send to Customer's Email!");
    document.querySelector(".billOverlay").style.display = "none";
}
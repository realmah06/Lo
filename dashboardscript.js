document.addEventListener("DOMContentLoaded", function() {
    const popupli = document.getElementById("popupli");
    const popup = document.getElementById("popup");
    const closeli = document.getElementById("close");
    const confirmli = document.getElementById("confirmli");
  
    // Event listener for popup li click
    popupli.addEventListener("click", function() {
      popup.style.display = "block";
    });
  
    // Event listener for close li click
    closeli.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    // Event listener for confirm li click
    confirmli.addEventListener("click", function() {
      // Perform actions when confirm li is clicked
      // For demonstration purposes, let's just close the popup
      popup.style.display = "none";
    });
  
    // Close the popup when clicking outside of it
    window.addEventListener("click", function(e) {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  function showFields() {
    var transactionType = document.getElementById("transactionType").value;
    var schoolFeesFields = document.getElementById("schoolFeesFields");
    var paymentToStaffFields = document.getElementById("paymentToStaffFields");
    var paymentToExpensesFields = document.getElementById("paymentToExpensesFields");

    if (transactionType === "schoolFees") {
        schoolFeesFields.style.display = "block";
        paymentToStaffFields.style.display = "none";
        paymentToExpensesFields.style.display = "none";
    } else if (transactionType === "paymentToStaff") {
        schoolFeesFields.style.display = "none";
        paymentToStaffFields.style.display = "block";
        paymentToExpensesFields.style.display = "none";
    } else if (transactionType === "paymentToExpenses") {
        schoolFeesFields.style.display = "none";
        paymentToStaffFields.style.display = "none";
        paymentToExpensesFields.style.display = "block";
    }
}
  
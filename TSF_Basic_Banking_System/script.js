function sendMoney() { 
   var enterDonorName = document.getElementById("enterDonorName").value;
   var enterRecipientName = document.getElementById("enterRecipientName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
 
   var donorBankAccount = enterDonorName + "BankBalance";
   var recipientBankAccount = enterRecipientName + "BankBalance";
   
   var donorBalanceElement = document.getElementById(donorBankAccount);
   var recipientBalanceElement = document.getElementById(recipientBankAccount);
 
   var donorBalance = parseInt(donorBalanceElement.innerHTML);
   var recipientBalance = parseInt(recipientBalanceElement.innerHTML);
 
   if (isNaN(donorBalance) || isNaN(recipientBalance)) {
     alert("Donor or recipient not found.");
   } else if (enterAmount > donorBalance) {
     alert("Insufficient Balance.");
   } else {
     var updatedDonorBalance = donorBalance - enterAmount;
     var updatedRecipientBalance = recipientBalance + enterAmount;
 
     donorBalanceElement.innerHTML = updatedDonorBalance;
     recipientBalanceElement.innerHTML = updatedRecipientBalance;
 
     alert("Transaction Successful!!\n₹" + enterAmount + " is sent from " + enterDonorName + "@gmail.com to " + enterRecipientName + "@gmail.com.");
 
     var createPTag = document.createElement("li");
     var textNode = document.createTextNode("₹" + enterAmount + " is sent from donor with Email-id " + enterDonorName + "@gmail.com to recipient with Email-id " + enterRecipientName + "@gmail.com on " + new Date().toLocaleString());
     createPTag.appendChild(textNode);
     var element = document.getElementById("transaction-history-body");
     element.insertBefore(createPTag, element.firstChild);
   }
 }
 
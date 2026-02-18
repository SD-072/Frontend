const promotionMessage = document.createElement("div");

promotionMessage.textContent = "Special Offer: Get 20% off your next purchase!";

promotionMessage.className = "p-4 rounded-lg shadow-lg bg-red-300 font-bold";

promotionMessage.classList.add("hidden");

const messageContainer = document.getElementById("message-container");
messageContainer.append(promotionMessage);

function showPromotion() {
  promotionMessage.classList.remove("hidden");
  console.log("Promotion message is now visible");
}

function hidePromotion() {
  promotionMessage.classList.add("hidden");
  console.log("Promotion message is now hidden");
}

setTimeout(showPromotion, 3000);

setTimeout(hidePromotion, 30000);

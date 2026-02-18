// # Use `setTimeout` to schedule the creation of a DOM element that displays a promotion message styled with Tailwind CSS.

// * Step 1: Use `setTimeout` to schedule the creation of a promotion message after 3 seconds.
setTimeout(() => {
  // * Step 2: Create a new DOM element (e.g., a `<div>`) for the promotion message.
  const promotionMessage = document.createElement("div");

  // * Step 3: Add some text to the promotion message, like "Special Offer: Get 20% off your next purchase!".
  promotionMessage.textContent = "Special Offer: Get 20% off your next purchase!";

  // * Step 4: Use Tailwind CSS to style the message with a background color, padding, rounded corners, and centered text.
  promotionMessage.className = "p-4 rounded-lg shadow-lg bg-red-300 font-bold";

  // * Step 5: Append the new element to the `message-container` div.
  const messageContainer = document.getElementById("message-container");
  messageContainer.append(promotionMessage);
}, 3000);

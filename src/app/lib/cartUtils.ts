type CartItem = {
  id: number;
  quantity: number;
};

export const addToCart = (productId: number, quantity: number = 1) => {
  // Get the existing cart from local storage or initialize an empty array
  const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
  console.log("Current cart from localStorage:", cart);

  // Check if the product already exists in the cart
  const existingProduct = cart.find((item) => item.id === productId);

  if (existingProduct) {
    // Update the quantity if the product is already in the cart
    existingProduct.quantity += quantity;
    console.log(
      `Updated quantity for product ID ${productId}:`,
      existingProduct.quantity
    );
  } else {
    // Add the new product to the cart
    cart.push({ id: productId, quantity });
    console.log(
      `Added new product ID ${productId} to cart with quantity:`,
      quantity
    );
  }

  // Save the updated cart back to local storage
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log("Updated cart saved to localStorage:", cart);
};

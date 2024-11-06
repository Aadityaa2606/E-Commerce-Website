"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Define the type for cart items
type CartItem = {
  id: number;
  quantity: number;
  price: number;
  name: string;
  image: string;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const storedCart: { id: number; quantity: number }[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      if (storedCart.length === 0) return;

      const fetchedItems: (CartItem | null)[] = await Promise.all(
        storedCart.map(async (item) => {
          try {
            const response = await fetch(
              `https://fakestoreapi.com/products/${item.id}`
            );
            if (!response.ok) return null;

            const productData = await response.json();
            return {
              id: item.id,
              quantity: item.quantity,
              price: productData.price,
              name: productData.title,
              image: productData.image,
            };
          } catch (error) {
            console.error(`Error fetching product ${item.id}:`, error);
            return null;
          }
        })
      );

      const validItems: CartItem[] = fetchedItems.filter(
        (item): item is CartItem => item !== null
      );

      setCartItems(validItems);
    };

    fetchCartItems();
  }, []);

  const updateCart = (productId: number, quantity: number) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(
        updatedCart.map((item) => ({ id: item.id, quantity: item.quantity }))
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-10">

      <div className="border-b pb-4 mb-4">
        <div className="flex justify-between font-semibold text-gray-700">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
      </div>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded object-cover"
              />
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>
            <span className="text-gray-700">${item.price.toFixed(2)}</span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateCart(item.id, parseInt(e.target.value))}
              className="w-16 text-center border rounded"
            />
            <span className="text-gray-700 font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
        <button className="px-4 py-2 bg-gray-200 rounded">
          Return To Shop
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded">Update Cart</button>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border p-2 w-full rounded"
          />
          <button className="px-4 py-2 bg-red-500 text-white rounded w-full md:w-auto">
            Apply Coupon
          </button>
        </div>

        <div className="p-4 border rounded space-y-2">
          <h2 className="text-lg font-bold">Cart Total</h2>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded mt-4">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

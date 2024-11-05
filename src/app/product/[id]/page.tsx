// src/app/product/[id]/page.tsx
import ColorSelection from "@/app/components/ProductScreen/ColorPicker";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define the Product type for TypeScript
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  // Fetch the product data directly in the server-side component
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);

  // If the product is not found, show the 404 page
  if (!res.ok) {
    notFound();
  }

  const product: Product = await res.json();

  return <ProductDetails product={product} />;
};

const ProductDetails = ({ product }: { product: Product }) => {
  const productImages = Array(4).fill(product.image);


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section: Thumbnail Images */}
        <div className="flex flex-col space-y-4">
          {productImages.map((image, index) => (
            <div
              key={index}
              className={`rounded-lg cursor-pointer p-5 bg-secondary`}
            >
              <Image
                src={image}
                alt={`Product Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Main Image Section */}
        <div className="flex-1 flex items-center justify-center bg-secondary p-10">
          <Image
            src={product.image}
            alt="Main Product Image"
            width={400}
            height={400}
            className="object-contain w-full h-full rounded-lg"
            style={{ maxHeight: "100%", maxWidth: "100%" }} // Ensures it does not exceed the container
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${
                    i < Math.round(product.rating.rate)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.282 3.936a1 1 0 00.95.69h4.129c.969 0 1.371 1.24.588 1.81l-3.344 2.432a1 1 0 00-.364 1.118l1.282 3.935c.3.92-.755 1.688-1.54 1.118l-3.344-2.432a1 1 0 00-1.176 0l-3.344 2.432c-.785.57-1.84-.198-1.54-1.118l1.282-3.935a1 1 0 00-.364-1.118L2.231 9.363c-.783-.57-.38-1.81.588-1.81h4.13a1 1 0 00.95-.69l1.15-3.935z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.rating.count} Reviews) |
            </span>
            <span className="text-green-600 font-semibold">In Stock</span>
          </div>
          <p className="text-2xl">${product.price.toFixed(2)}</p>
          <p className="text-gray-600">{product.description}</p>
          <hr className="border-t border-gray-500" />
          {/* Colour Options */}
          <ColorSelection />
          {/* Size Options */}
          <div className="mt-4">
            <h3 className="text-md font-semibold mb-2">Size:</h3>
            <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          {/* Quantity and Buy Button */}
          <div className="flex items-center mt-6 space-x-4">
            <div className="flex items-center border rounded-lg">
              <button className="px-3 py-2">-</button>
              <span className="px-4">1</span>
              <button className="px-3 py-2">+</button>
            </div>
            <button className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600">
              Buy Now
            </button>
            <button className="border p-3 rounded-lg hover:bg-gray-100">
              ❤️
            </button>
          </div>
          {/* Additional Information */}
          <div className="border-t pt-4 mt-6 space-y-2">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8h18M3 16h18M3 12h18M3 20h18M3 4h18"
                />
              </svg>
              <span>Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Return Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

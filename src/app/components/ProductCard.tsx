import React from "react";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { addToCart } from "../lib/cartUtils";
// Define the props interface for the ProductCard
interface ProductCardProps {
  imageSrc: string;
  discount?: number;
  isNew?: boolean;
  name: string;
  productId: number;
  currentPrice: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  persistentAddToCart?: boolean;
  inWishlist?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  discount,
  isNew = false,
  name,
  currentPrice,
  originalPrice,
  rating,
  reviews,
  persistentAddToCart = false,
  inWishlist = false,
  productId,
}) => {
  // Helper function to render star ratings
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <Link href={`/product/${productId}`}>
      <div className="w-64">
        <div className="relative rounded-lg overflow-hidden group bg-secondary p-4 w-64 h-64 flex">
          {/* Discount Badge or New Badge */}
          {isNew ? (
            <div className="absolute top-4 left-4 bg-green-500 text-white text-xs px-3 py-1 rounded">
              New
            </div>
          ) : (
            discount && (
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded">
                - {discount}%
              </div>
            )
          )}

          {/* Conditional rendering for Wishlist and View icons */}
          <div className="absolute top-4 right-4 flex flex-col gap-4 text-black">
            {inWishlist ? (
              <div className="rounded-full bg-white">
                <Image src="/trash.svg" alt="Delete" width={35} height={35} />
              </div>
            ) : (
              <>
                <div className="rounded-full bg-white p-2">
                  <AiOutlineHeart className="cursor-pointer" size={20} />
                </div>
                <div className="rounded-full bg-white p-2">
                  <AiOutlineEye className="cursor-pointer" size={20} />
                </div>
              </>
            )}
          </div>

          {/* Product Image */}
          <div className="flex justify-center items-center mb-2 flex-grow">
            <Image
              src={imageSrc}
              alt={name}
              width={150}
              height={150}
              objectFit="contain"
            />
          </div>

          {/* Add to Cart Button - Hover Effect with Animation */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-10 flex justify-center items-center bg-black text-white font-semibold transition-all duration-300 ${
              persistentAddToCart
                ? "flex"
                : "hidden group-hover:flex group-hover:opacity-100 opacity-0"
            }`}
            onClick={() => addToCart(productId)}
          >
            Add To Cart
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-4">
          {/* Product Name */}
          <h4 className="font-semibold text-sm mb-1 truncate">{name}</h4>

          {/* Prices */}
          <div className="flex items-center gap-2 mb-1">
            <span className="text-red-500">${currentPrice}</span>
            <span className="line-through text-gray-400">${originalPrice}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-1">
            {renderStars()}
            <span className="text-gray-600 ml-2">({reviews})</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

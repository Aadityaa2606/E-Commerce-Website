import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="mt-20 mb-20 ml-20">
      <ProductCard
        imageSrc="/controller.png"
        discount={40}
        name="HAVIT HV-G92 Gamepad"
        currentPrice={120}
        originalPrice={160}
        rating={4.5}
        reviews={88}
        persistentAddToCart={true}
        isNew={true}
        inWishlist={true}
      />
    </div>
  );
}

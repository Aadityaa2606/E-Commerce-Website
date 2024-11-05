import { Category } from "./components/HomeScreen/Category";
import { FlashDeals } from "./components/HomeScreen/FlashDeals";
import HeroSection from "./components/HomeScreen/HeroSection";
import NewArrival from "./components/HomeScreen/NewArrival";

interface CategoryType {
  name: string;
  imageSrc: string;
}

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

// Server Component (without getServerSideProps)
const Home = async () => {
  // Fetch FlashDeals product data directly
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  const products = await res.json();

  // Map the fetched products to match the expected structure

  const productData = products.map((product: ProductType) => ({
    imageSrc: product.image,
    discount: 40, // Default discount
    name: product.title,
    productId: product.id,
    currentPrice: parseFloat(product.price.toFixed(2)),
    originalPrice: parseFloat((product.price + 10).toFixed(2)),
    rating: parseFloat(product.rating.rate.toFixed(2)),
    reviews: product.rating.count,
    persistentAddToCart: true,
    isNew: true, // Default value for new products
    inWishlist: false, // Default value for wishlist status
  }));

  // Define category data
  const categoryData: CategoryType[] = [
    { name: "Phones", imageSrc: "/categories/Category-CellPhone.svg" },
    { name: "Computers", imageSrc: "/categories/Category-Computer.svg" },
    { name: "SmartWatch", imageSrc: "/categories/Category-SmartWatch.svg" },
    { name: "Camera", imageSrc: "/categories/Category-Camera.svg" },
    { name: "Headphones", imageSrc: "/categories/Category-Headphone.svg" },
    { name: "Gaming", imageSrc: "/categories/Category-Gamepad.svg" },
    { name: "Phones", imageSrc: "/categories/Category-CellPhone.svg" },
    { name: "Computers", imageSrc: "/categories/Category-Computer.svg" },
    { name: "SmartWatch", imageSrc: "/categories/Category-SmartWatch.svg" },
    { name: "Camera", imageSrc: "/categories/Category-Camera.svg" },
    { name: "Headphones", imageSrc: "/categories/Category-Headphone.svg" },
    { name: "Gaming", imageSrc: "/categories/Category-Gamepad.svg" },
  ];

  const endDate = new Date("2024-11-07T23:59:59");

  return (
    <section className="mb-20 flex flex-col w-full items-center">
      <HeroSection />
      <div className="h-20" />
      <div className="w-[85%]">
        <FlashDeals products={productData} endDate={endDate} />
      </div>
      <div className="h-20" />
      <div className="w-[85%]">
        <Category categories={categoryData} />
      </div>
      <div className="h-20" />
      <div className="w-[85%]">
        <NewArrival />
      </div>
    </section>
  );
};

export default Home;

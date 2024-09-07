import { all_products } from "@/assets/images/data";
import ProductCard from "@/components/ProductCard";
import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <section className="my-10 py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5">
          <TitleSection title="Get Product" />

          <div>
            <Button asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 place-items-center gap-5">
          {all_products
            .sort(() => Math.random() - Math.random())
            .slice(0, 10)
            .map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
        </div>
      </div>
    </section>
  );
};
export default ProductSection;

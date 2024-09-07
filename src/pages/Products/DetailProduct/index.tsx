import { all_products } from "@/assets/images/data";
import { useParams } from "react-router-dom";
import DetailBreadcrumb from "./DetailBreadcrumb";
import ProductCarousel from "./ProductCarousel";
import ColorSelect from "./ColorSelect";
import SizeSelect from "./SizeSelect";
import { Button } from "@/components/ui/button";
import { MoveUpRight, ShoppingCart } from "lucide-react";

const DetailProduct = () => {
  const { id } = useParams();
  console.log(id);

  const data = all_products.find((item) => item._id === id);

  if (!data) {
    return <div>Product not found</div>;
  }
  return (
    <section>
      <div className="hidden w-full h-14 bg-gray-200 lg:flex items-center">
        <div className="container">
          <DetailBreadcrumb title={data?.name} />
        </div>
      </div>

      <div className="mt-5 container lg:h-[calc(100vh-120px)] flex items-center">
        <div className="w-full lg:h-[400px] grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0">
          <div className="flex items-center justify-center">
            <ProductCarousel img={data.image} />
          </div>

          <div className="bg-rose-300 lg:bg-transparent py-5 lg:py-0 flex flex-col items-center lg:items-start justify-between gap-5 rounded-lg">
            <div>
              <h3 className="text-xl lg:text-4xl font-semibold text-center lg:text-start">
                {data.name}
              </h3>
            </div>

            <div className="inline-flex items-center gap-4">
              <p className="text-xl lg:text-4xl font-semibold text-rose-500">
                $ {data.price}
              </p>

              <div className="inline-flex items-center gap-2">
                <div>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>

                <div>
                  <span>(5 Reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-4">
              <ColorSelect />
              <SizeSelect />
            </div>

            <div className="flex items-center gap-4">
              <Button>❤️</Button>
              <Button className="lg:w-[200px]">
                Go to Cart <MoveUpRight className="size-4 ml-2" />
              </Button>
              <Button>
                <ShoppingCart />
              </Button>
            </div>

            <div>
              <p>
                Category : <span>{data.category} | Shirt</span>
              </p>
              <p>Tags: Modern | New Arrival</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailProduct;

import { categories } from "@/assets/images/data";
import TitleSection from "@/components/TitleSection";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="my-10 py-10">
      <div className="container">
        <TitleSection title="Select Categories" />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 place-items-center gap-5">
          {categories.map((item, index) => (
            <Link
              to={`/products/?category=${item.slug}`}
              key={index}
              className="hover:scale-110 transition-all duration-300 ease-in-out">
              <div className="space-y-2">
                <div className="size-28 bg-rose-300 flex items-center justify-center rounded-lg">
                  <img src={item.image} alt={item.name} className="size-full" />
                </div>

                <div className="text-center text-lg font-medium">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Categories;

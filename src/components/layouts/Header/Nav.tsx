import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const NavData = [
  {
    title: "Home",
    slug: "/",
  },
  {
    title: "Categories",
    slug: "/categories",
  },
  {
    title: "Shop",
    slug: "/shop",
  },
  {
    title: "Contact",
    slug: "/contact",
  },
];

const Nav = ({ className }: { className?: string }) => {
  const { pathname } = useLocation();

  return (
    <>
      {NavData.map((item, index) => (
        <Link
          to={item.slug}
          key={index}
          className={cn(
            "font-semibold hover:underline",
            className,
            pathname == item.slug && "underline"
          )}>
          {item.title}
        </Link>
      ))}
    </>
  );
};
export default Nav;

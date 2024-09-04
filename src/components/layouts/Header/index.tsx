import Logo from "@/components/Logo";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProfileDropdown from "@/components/ProfileDropdown";
import CartDropdown from "@/components/CartDropdown";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const login = false;

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <header
      className={cn(
        "w-full shadow-sm",
        scroll
          ? "sticky top-0 left-0 bg-white shadow-md transition-all duration-300 z-10"
          : "block bg-transparent"
      )}>
      <div className="container h-14 sm:h-16 flex items-center justify-between">
        <div className="flex items-center gap-x-10">
          <Logo />

          <div className="hidden lg:block space-x-4">
            <Nav />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <CartDropdown />

          {login ? (
            <ProfileDropdown />
          ) : (
            <Button asChild>
              <Link to="/auth/login">Login</Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-4">
          {login && <ProfileDropdown />}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;

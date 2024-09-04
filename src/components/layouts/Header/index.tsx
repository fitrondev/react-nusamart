import Logo from "@/components/Logo";
import Nav from "./Nav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ProfileDropdown from "@/components/ProfileDropdown";
import CartDropdown from "@/components/CartDropdown";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const login = false;

  return (
    <header className="shadow-sm">
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

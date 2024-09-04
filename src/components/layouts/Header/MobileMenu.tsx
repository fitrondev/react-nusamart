import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const login = false;
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustify className="size-6" />
      </SheetTrigger>
      <SheetContent>
        {/* untuk mengatasi error */}
        <SheetHeader className="hidden">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <nav className="size-full flex flex-col items-center justify-center gap-4">
          <Nav className="text-2xl" />

          {!login && (
            <Link
              to="/auth/login"
              className="font-semibold hover:underline text-2xl">
              Login
            </Link>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;

import {
  DropdownMenu,
  DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const CartDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative p-2 bg-primary rounded-sm">
        <ShoppingBag className="size-5 text-background" />
        <span className="absolute -top-1 -right-1 px-1 text-xs font-semibold bg-red-500 text-primary-foreground rounded-full select-none">
          2
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="size-56">asasas</DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CartDropdown;

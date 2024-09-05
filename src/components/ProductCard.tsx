import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({
  item,
}: {
  item: {
    image: string;
    name: string;
    price: number;
    description: string;
  };
}) => {
  return (
    <Card>
      <Link to={`/product/${item.name}`}>
        <CardHeader className="bg-rose-300 rounded-t-lg items-center">
          <img src={item.image} alt="" className="size-40" />
        </CardHeader>
      </Link>
      <CardContent className="space-y-2">
        <Link to={`/product/${item.name}`}>
          <CardTitle className="text-2xl line-clamp-2 hover:underline">
            {item.name}
          </CardTitle>
        </Link>
        <CardDescription className="line-clamp-2">
          {item.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="items-center justify-between">
        <p className="text-lg font-bold text-rose-500">$ {item.price}</p>

        <Button className="mt-4">
          <ShoppingCart className="size-5 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};
export default ProductCard;

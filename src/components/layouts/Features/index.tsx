import { Box, CircleDollarSign, Headset, Truck } from "lucide-react";

const Features = () => {
  return (
    <section className="bg-rose-300 my-10 py-10">
      <div className="container grid grid-cols-1 sm:grid-cols-4 sm:place-items-center">
        <div className="flex items-center gap-4">
          <div>
            <Truck className="size-10" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Free Shipping</h2>
            <p className="font-medium">On above $100 order</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <CircleDollarSign className="size-10" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">10% Cashback</h2>
            <p className="font-medium">On all orders using credit card</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <Headset className="size-10" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Customer Support</h2>
            <p className="font-medium">24 X 7 CS available</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <Box className="size-10" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">30 Days Return Policy</h2>
            <p className="font-medium">No questions asked return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;

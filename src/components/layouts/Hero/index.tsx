import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import HeroImg from "@/assets/images/hero.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="container h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="w-full h-full lg:h-[31.25rem] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:flex-1 flex flex-col items-center lg:items-start justify-center gap-4 lg:gap-6">
            <div className="text-center lg:text-start">
              <h1 className="text-xl lg:text-2xl font-semibold uppercase text-red-500">
                Modern Collection 🔥
              </h1>
              <p className="lg:text-lg">
                Grab Up to 20% Off On Selected Products.
              </p>
            </div>
            <p className="sm:w-[550px] sm:text-lg text-muted-foreground text-center lg:text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              facilis dolorem soluta expedita quaerat sunt aut accusantium ullam
              non adipisci pariatur. Consequuntur, veritatis a distinctio
              numquam ea debitis.
            </p>

            <div>
              <Button asChild>
                <Link to="/products">
                  Latest Product <ArrowRight className="size-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:flex-1 flex items-center justify-center">
            <img
              src={HeroImg}
              alt=""
              className="size-[350px] sm:size-[450px] md:size-[600px] lg:size-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

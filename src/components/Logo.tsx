import LogoImg from "@/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img src={LogoImg} alt="Logo" className="size-6" />
      <span className="text-xl -ml-1 font-semibold">usa Mart</span>
    </Link>
  );
};
export default Logo;

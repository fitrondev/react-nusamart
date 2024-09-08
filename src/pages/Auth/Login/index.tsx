import LoginImg from "@/assets/images/login.svg";
import LoginForm from "@/components/layouts/LoginForm";

const Login = () => {
  return (
    <section className="h-screen grid lg:grid-cols-2">
      <div className="bg-rose-300 flex items-center justify-center">
        <LoginForm />
      </div>

      <div className="hidden lg:flex items-center justify-center">
        <img src={LoginImg} alt="" className="size-[500px] 2xl:size-[600px]" />
      </div>
    </section>
  );
};
export default Login;

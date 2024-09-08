import registerImg from "@/assets/images/register.svg";
import RegisterForm from "@/components/layouts/RegisterForm";

const Register = () => {
  return (
    <section className="h-screen grid lg:grid-cols-2">
      <div className="hidden lg:flex items-center justify-center">
        <img
          src={registerImg}
          alt=""
          className="size-[500px] 2xl:size-[600px]"
        />
      </div>

      <div className="bg-rose-300 flex items-center justify-center">
        <RegisterForm />
      </div>
    </section>
  );
};
export default Register;

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { forgotPasswordSchema } from "../../formSchema/schema";
import Button from "../button/Button";

import TextInput from "../textInput/TextInput";

// import Loader from "../loader/Loader";
const ForgotPassword = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotPasswordSchema),
  });

  // Registering form fields
  const onSubmit = (data) => {
    // setLoading(true);
    console.log(data);
  };

  return (
    <div className="sign-up">
      <div className="form-wrapper">
        <div className="form-design">
          <div className="marquee-container">
            <div className=" marquee">
              Experience durability and tech prowess with our cars. We deal on
              quality and affordable cars.
            </div>
          </div>
        </div>
        <div className="form-container">
          <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="h2">Forgot Password</h2>

            <TextInput
              label="email"
              placeholder="Enter email"
              isError={errors?.email}
              errorMessage={errors?.email?.message || ""}
              type="text"
              register={register("email")}
            />

            <Button
              type="submit"
              label={"Send"}
              // disabled={loading}
              // loader={loading && <Loader />}
            />
            {/* {error && <p className="server-error"> {error}</p>} */}
            <div className="registered">
              <Link to="/login" className="sign-in">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

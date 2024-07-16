import "../register/Register.css";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { loginSchema } from "../../formSchema/schema";
import Button from "../button/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TextInput from "../textInput/TextInput";

import { useState } from "react";
const Login = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [email, setEmail] = useState("");
  console.log(email);
  const togglePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("form submitted successfully");
  };
  return (
    <div className="sign-up">
      <div className="form-wrapper">
        <div className="form-design"></div>
        <div className="form-container">
          <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="h2">Sign in</h2>

            <TextInput
              label="email"
              placeholder="Enter email"
              isError={errors?.email}
              errorMessage={errors?.email?.message}
              type="text"
              register={register("email")}
            />
            <TextInput
              label="password"
              placeholder="Enter password"
              isError={errors?.password}
              errorMessage={errors?.password?.message}
              type={visiblePassword ? "text" : "password"}
              register={register("password")}
              iconButton={
                <div onClick={togglePassword}>
                  {visiblePassword ? (
                    <FaEye className="eyeIcon" />
                  ) : (
                    <FaEyeSlash className="eyeIcon" />
                  )}
                </div>
              }
            />

            <Button type="submit" label={"Login"} />
            <div className="registered">
              Don't Have Account?{" "}
              <Link to="/register" className="sign-in">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

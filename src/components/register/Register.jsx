import "./Register.css";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { registerSchema } from "../../formSchema/schema";
import Button from "../button/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TextInput from "../textInput/TextInput";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
const Register = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setConfirmPassword] = useState(false);

  const togglePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const toggleConfirmPassword = () => {
    setConfirmPassword(!visibleConfirmPassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (data) => {
    const { email, password } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log(userCredential);
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..
      });
  };

  return (
    <div className="sign-up">
      <div className="form-wrapper">
        <div className="form-design"></div>
        <div className="form-container">
          <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="h2">Sign Up</h2>

            <TextInput
              label="email"
              placeholder="Enter email"
              isError={errors?.email}
              errorMessage={errors?.email?.message || ""}
              type="text"
              register={register("email")}
            />
            <TextInput
              label="password"
              placeholder="Enter password"
              isError={errors?.password}
              errorMessage={errors?.password?.message || ""}
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
            <TextInput
              label="confirm password"
              placeholder="Confirm password"
              isError={errors?.confirmPassword}
              errorMessage={errors?.confirmPassword?.message || ""}
              type={visibleConfirmPassword ? "text" : "password"}
              register={register("confirmPassword")}
              iconButton={
                <div onClick={toggleConfirmPassword}>
                  {visibleConfirmPassword ? (
                    <FaEye className="eyeIcon" />
                  ) : (
                    <FaEyeSlash className="eyeIcon" />
                  )}
                </div>
              }
            />

            <Button type="submit" label={"Sign up"} />
            <div className="registered">
              Already Registered?{" "}
              <Link to="/login" className="sign-in">
                Sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

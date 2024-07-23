import "./Register.css";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../formSchema/schema";
import Button from "../button/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TextInput from "../textInput/TextInput";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [visibleConfirmPassword, setConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // To toggle password visibility
  const togglePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  // To toggle confirm password visibility
  const toggleConfirmPassword = () => {
    setConfirmPassword(!visibleConfirmPassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  // Registering form fields
  const onSubmit = (data) => {
    setLoading(true);
    const { email, password } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        console.log(userCredential);
        const user = userCredential.user;
        if (user) {
          toast.success("Success");
        }
        reset();
        setLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        if (error) {
          console.log(error.message);
          setError(error.code);
          setLoading(false);
        }
      });
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
              placeholder="Re-enter password"
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

            <Button
              type="submit"
              label={loading ? "processing..." : "Sign up"}
              disabled={loading}
              loader={loading && <Loader />}
            />
            {error && <p className="server-error"> {error}</p>}
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

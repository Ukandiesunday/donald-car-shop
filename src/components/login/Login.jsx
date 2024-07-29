//  eslint-disable-next-line

import "../register/Register.css";

import { useForm } from "react-hook-form";
import "./login.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../formSchema/schema";
import Button from "../button/Button";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import TextInput from "../textInput/TextInput";
import { useState } from "react";
import Loader from "../loader/Loader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../redux1/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const navigate = useNavigate();

  // Toggling password visibility
  const togglePassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Registering form fields
  const onSubmit = async (data) => {
    setLoading(true);
    const { email, password } = data;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential?.user?.accessToken;

        if (user) {
          dispatch(login(user));
          toast.success("logged in successfully");
          reset();
          navigate("/");
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error.code);
        if (error) {
          setError(error.code);

          setLoading(false);
        }
      });
  };
  return (
    <div className="login-container">
      <div className="form-wrapper">
        <div className="form-design">
          <div className="marquee-container">
            <div className="marquee">
              Experience durability and tech prowess with our cars. We deal on
              quality and affordable cars.
            </div>
          </div>
        </div>

        <div className="form-container">
          <form className="form" action="" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="h2">Sign in</h2>
            <div className="credentials">
              <p>
                Email: <span>sam123@gmail.com</span>
              </p>
              <p>
                password: <span>Sam!@123 </span>
              </p>
            </div>
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
            {error && <p className="server-error">{error}</p>}

            <div className="checkbox-container">
              <div className="checkbox-wrapper">
                <input
                  className="input-check"
                  type="checkbox"
                  name=""
                  value={isChecked}
                  id="check"
                  onChange={(e) => setChecked(e.target.checked)}
                />

                <label htmlFor="check" className="checkbox-label">
                  <span className="custom-checkbox">
                    {isChecked && <FaCheck className="checkmark" />}
                  </span>
                  Remember me
                </label>
              </div>

              <Link to={"/forgotpassword"} className="sign-in">
                Forgot Password
              </Link>
            </div>
            <Button
              type="submit"
              label={loading ? "processing..." : "Login"}
              disabled={loading}
              loader={loading && <Loader />}
            />
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

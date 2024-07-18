import "../register/Register.css";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../formSchema/schema";
import Button from "../button/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import TextInput from "../textInput/TextInput";
import { useState } from "react";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { storeItem } from "../utility/storage";
import { useDispatch } from "react-redux";
import { login } from "../redux1/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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

        console.log(user);

        if (user) {
          storeItem("user", user);
          console.log("logging in user", user);
          dispatch(login(user));

          reset();
          toast.success("login successfully");
          navigate("/");
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        setError(error.message);
      });
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
            {error && <p className="server-error">{error}</p>}
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

import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Input a valid email!")
    .required(" Please input your email!"),
  password: yup
    .string()
    .required(" Please input your password!")
    .matches(
      passwordRegex,
      "Password must be at least 8 characters containing uppercase, lowercase, number and  special character!"
    )
    .max(18),

  confirmPassword: yup
    .string()
    .required("Re-enter password!")
    .matches(
      passwordRegex,
      "Password must be at least 8 characters containing uppercase, lowercase, number and special character!"
    )
    .oneOf([yup.ref("password"), null], "Password don't match!"),
});
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Input a correct email!")
    .required(" Please input your email!"),
  password: yup
    .string()
    .required(" Please input your password")
    .matches(
      passwordRegex,
      "Password must be at least 8 characters containing uppercase, lowercase, number and special character"
    )
    .max(18),
});

export const messageSchema = yup.object().shape({
  surname: yup.string().required("Enter surname!"),
  otherNames: yup.string().required("Enter other names!"),
  email: yup.string().email(" Invalid email!").required(" Enter email!"),
  phone: yup
    .string()
    .matches(/^[0-9]{11}$/, "Invalid phone number")
    .required("Enter phone number"),
  message: yup.string().required("Type your message"),
});

export const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required("Enter email").email("Enter a valid email"),
});

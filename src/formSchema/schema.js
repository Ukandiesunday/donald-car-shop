import * as yup from "yup";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Input a valid email!")
    .required(" Please input your email!"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 characters containing uppercase, lowercase, digit, special character"
    )
    .max(18)
    .required(" Please input your password"),
  confirmPassword: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 characters containing uppercase, lowercase, digit, special character"
    )
    .oneOf([yup.ref("password"), null], "Password don't match")
    .required("Confirm password"),
});
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Input a valid email!")
    .required(" Please input your email!"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 characters containing uppercase, lowercase, digit, special character"
    )
    .max(18)
    .required(" Please input your password"),
});

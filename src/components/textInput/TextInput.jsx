import React from "react";
import "./textInput.css";
const TextInput = ({
  register,
  label,
  type,

  iconButton,
  placeholder,
  errorMessage,
  isError,
}) => {
  return (
    <div className="item">
      <label htmlFor={label}>{label}</label>
      <div className="inputContainer">
        <input id={label} type={type} placeholder={placeholder} {...register} />
        <div className="eyeIcon">{iconButton}</div>
      </div>
      {isError && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default TextInput;

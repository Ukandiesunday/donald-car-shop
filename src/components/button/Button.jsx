import "./button.css";

const Button = ({ type, label, onClick, loader, disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className="button"
    >
      {label}
      {loader}
    </button>
  );
};

export default Button;

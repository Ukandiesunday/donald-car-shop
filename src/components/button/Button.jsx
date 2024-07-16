import "./button.css";

const Button = ({ type, label, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {label}
    </button>
  );
};

export default Button;

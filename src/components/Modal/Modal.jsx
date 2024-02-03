import { useDispatch } from "react-redux";
import "./Modal.css";
import { clearCart } from "../../Redux/cartReducer";
import { closeModal } from "./modalSlice";

const Modal = ({}) => {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <div className="modal-container">
        <div>
          <i className="ri-error-warning-line"></i>
        </div>
        <p>This action is not reversible!</p>
        <p>are you sure you want to continue?</p>
      </div>
      <div className="modal-btn">
        <button
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          YES
        </button>
        <button onClick={() => dispatch(closeModal())}>NO</button>
      </div>
    </div>
  );
};

export default Modal;

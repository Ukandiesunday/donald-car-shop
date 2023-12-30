import { useDispatch } from "react-redux";
import "./Modal.css";
import { clearCart } from "../../Redux/cartReducer";
import { closeModal } from "./modalSlice";

const Modal = ({}) => {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <div className="modal-container">
        <p>This action is irreversible!</p>
        <p>are you sure you want to proceed?</p>
      </div>
      <div className="modal-btn">
        <button
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Proceed
        </button>
        <button onClick={() => dispatch(closeModal())}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;

import { IoClose } from "react-icons/io5";
import "./checkoutModal.css";
const CheckoutModal = ({ toggleCheckoutModal }) => {
  return (
    <div className="checkout-modal">
      <IoClose
        className="close-icon close-checkout"
        onClick={toggleCheckoutModal}
      />
      <div className="checkout-details">
        <h3>Kindly make your payment</h3>
        <p>Account name {""}: Sam Donald</p>
        <p>Bank Name {""} : Opay</p>
        <p>Acoount number {""}: 91788346789</p>
        <p>Send mail {""}:carshop@gmail.com</p>
        <p>whatsapp or call {""} :+2349153678691</p>
      </div>
    </div>
  );
};

export default CheckoutModal;

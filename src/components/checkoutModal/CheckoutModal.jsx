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
        <h3>
          Kindly call or message us to negotiate your processes before payment
          and shipment.
        </h3>
        <p>Account name {""}: Sam Donald</p>
        <p>Bank Name {""} : Opay</p>
        <p>Account number {""}: 91788346789</p>
        <p>Send mail {""}:doncars@gmail.com</p>
        <p>whatsapp or call {""} :+2349153678691</p>
      </div>
      <p className="comingSoon">More features coming soon.......</p>
    </div>
  );
};

export default CheckoutModal;

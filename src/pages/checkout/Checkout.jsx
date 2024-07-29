import { useState } from "react";
import "./checkout.css";
import TextInput from "../../components/textInput/TextInput";
import { checkoutSchema } from "../../formSchema/schema";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/button/Button";

const Checkout = () => {
  const [isLoading, setLoading] = useState(false);
  const access_key = process.env.REACT_APP_ACCESS_KEY;

  // const { firstName, lastName } = useWatch({
  //   control,
  //   name: ["firstName", "lastName"],
  //   defaultValue: {
  //     firstName: "",
  //     lastName: "",
  //   },
  // });

  // // Determine if the button should be enabled
  // const isButtonDisabled = !firstName || !lastName;
  // const accesskey = process.env.REACT_APP_ACCESS_KEY;

  const {
    handleSubmit,
    register,
    reset,

    formState: { errors },
  } = useForm({ resolver: yupResolver(checkoutSchema) });

  const handleFormSubmit = async (data, e) => {
    e.preventDefault();

    console.log(data);
    try {
      setLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data, null, 2),
      });
      const json = await response.json();
      console.log(json);
      if (json.success) {
        console.log(json);
        toast.success(
          "We have received your response. Check your mail after 2 mins"
        );
        reset();
        setLoading(false);
      }
    } catch (error) {
      if (error) {
        console.log(error);

        setLoading(false);
      }
    }
  };

  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="contact-left">
          <h2>Payment Details</h2>
          <p>Account name {""}: Sam Donald</p>
          <p>Bank Name {""} : Opay</p>
          <p>Account number {""}: 91788346789</p>
          <p>Send mail {""}:doncars@gmail.com</p>
          <p>whatsapp or call {""} :+2349153678691</p>
        </div>
        <div className="contact-right">
          <div className="form-container">
            <form
              className="form2 form "
              action=""
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <h2>Carefully fill out this invoice </h2>
              <input
                type="hidden"
                {...register("access_key")}
                value={access_key}
              />
              <div className="form-item-container">
                <TextInput
                  register={register("fullName")}
                  placeholder={"Full name"}
                  label={"Your full Name"}
                  type={"text"}
                  errorMessage={errors.fullName?.message}
                  isError={errors}
                />

                <TextInput
                  register={register("address")}
                  placeholder={"Address"}
                  label={"Your Address"}
                  type={"text"}
                  errorMessage={errors.address?.message}
                  isError={errors}
                />
              </div>
              <div className="form-item-container">
                <TextInput
                  register={register("email")}
                  placeholder={"Email"}
                  label={"Your email"}
                  type={"text"}
                  errorMessage={errors?.email?.message}
                  isError={errors}
                />

                <TextInput
                  register={register("phone")}
                  placeholder={"+2349024678934"}
                  label={"phone(whatsapp)"}
                  type={"text"}
                  errorMessage={errors.phone?.message}
                  isError={errors}
                />
              </div>
              <div className="item">
                <textarea
                  id="message"
                  cols={8}
                  rows={8}
                  maxLength={300}
                  {...register("message")}
                  placeholder="Detail car description and amount ...."
                ></textarea>
                {errors?.message && (
                  <p className="error">{errors?.message?.message}</p>
                )}
              </div>
              <Button
                type={"submit"}
                disabled={isLoading}
                label={isLoading ? "Processing..." : "Send response"}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

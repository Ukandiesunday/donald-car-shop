import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import "./Contact.css";
import contact from "../../assets/images/contact.png";
import TextInput from "../../components/textInput/TextInput";
import Button from "../../components/button/Button";
import { messageSchema } from "../../formSchema/schema";
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(messageSchema),
  });

  const onSubmit = (data) => {
    alert("Request submitted");
    reset();
  };
  return (
    <div className="contact-wrapper">
      <div className="contact">
        <div className="contact-left">
          <h1>contact us</h1>
          <div className="contact-img-container">
            <img src={contact} alt="" />
          </div>
          <p>
            <i className="ri-map-pin-fill"></i> No.53 Elios Rumoudara
            PortHarcourt
          </p>
          <p>
            <i className="ri-mail-fill"></i>Support: supportdoncars@gmail.com
          </p>
          <p>
            <a
              href="tel:+2349153678691"
              style={{ color: "gold", cursor: "pointer" }}
            >
              <i className="ri-cellphone-fill"></i> HAS A QUESTION?
              :+2349153678691
            </a>
          </p>
        </div>
        <div className="contact-right">
          <div className="form-container">
            <form
              className="form2 form "
              action=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <h2>Leave a message </h2>

              <TextInput
                register={register("surname")}
                placeholder={"Surname"}
                label={"surname"}
                type={"text"}
                errorMessage={errors.surname?.message}
                isError={errors}
              />

              <TextInput
                register={register("otherNames")}
                placeholder={"Other names"}
                label={"Other names"}
                type={"text"}
                errorMessage={errors.otherNames?.message}
                isError={errors}
              />

              <TextInput
                register={register("email")}
                placeholder={"Email"}
                label={"email"}
                type={"text"}
                errorMessage={errors.email?.message}
                isError={errors}
              />

              <TextInput
                register={register("phone")}
                placeholder={"Phone"}
                label={"phone"}
                type={"text"}
                errorMessage={errors.phone?.message}
                isError={errors}
              />
              <div className="item">
                <textarea
                  {...register("message")}
                  name=""
                  id="Message"
                  rows="9"
                  placeholder="Send a message...."
                ></textarea>
                {errors?.message && (
                  <p className="error">{errors?.message?.message}</p>
                )}
              </div>
              <Button type={"submit"} label={"Send request"} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

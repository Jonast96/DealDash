import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../styles/checkout/checkout.scss";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("First name is required")
    .min(3, "First name must be at least 3 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(3, "Last name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email")
    .min(3, "Email must be at least 3 characters"),
  phone: yup
    .string()
    .required("Phone is required")
    .min(3, "Phone must be at least 3 characters"),
  countryRegion: yup
    .string()
    .required("Country/Region is required")
    .min(3, "Country/Region must be at least 3 characters"),
  townCity: yup
    .string()
    .required("Town/city is required")
    .min(3, "Town/city must be at least 3 characters"),
  street: yup
    .string()
    .required("Street is required")
    .min(3, "Street must be at least 3 characters"),
  postcode: yup
    .string()
    .required("Postcode is required")
    .min(3, "Postcode must be at least 3 characters"),
  option: yup.string().required(),
});

export default function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const renderInput = (name, label) => (
    <div className="labelInput">
      <span className="highlight"></span>
      <span className="bar"></span>
      <label htmlFor={name}>{label}</label>
      <input {...register(name)} />
      {errors[name] && (
        <span className="errorMessage">{errors[name].message}</span>
      )}
    </div>
  );

  const renderRadio = (id, value) => (
    <div className="radioContainer">
      <input type="radio" {...register("option")} value={value} id={id} />
      <label htmlFor={id}>{id}</label>
    </div>
  );

  return (
    <div className="checkoutContainer main-content">
      <form className="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <div className="input_sections">
            <p className="categories">Personal information:</p>
            {renderInput("firstName", "First name")}
            {renderInput("lastName", "Last name")}
            {renderInput("phone", "Phone")}
            {renderInput("email", "Email")}
          </div>
          <div className="input_sections">
            <p className="categories">Delivery details:</p>
            {renderInput("countryRegion", "Country/Region")}
            {renderInput("townCity", "Town/city")}
            {renderInput("street", "Street")}
            {renderInput("postcode", "Postcode")}
          </div>

          <div className="input_sections">
            <p className="categories">Payment:</p>
            <label>Choose an option:</label>
            {renderRadio("Apple pay", "Apple pay", "Apple pay")}
            {renderRadio("Google pay", "Google pay", "Google pay")}
            {renderRadio(
              "Credit or debit card",
              "Credit or debit card",
              "Credit or debit card"
            )}
            {errors.option && (
              <span className="errorMessage">{errors.option.message}</span>
            )}
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

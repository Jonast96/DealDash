import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { supportSchema } from "./supportSchema";
import image from "../../media/question.jpg";
import "../../styles/support/support.scss";
import { useNavigate } from "react-router-dom";

export default function Support() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(supportSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };

  /**
Render Input field.
@function
@param {string} name - The name of the input field.
@param {string} label - The label of the input field.
@returns {JSX.Element}
*/
  const renderInput = (name, label) => (
    <div className="labelInput">
      <span className="highlight"></span>
      <span className="bar"></span>
      <label htmlFor={name}>{label}</label>
      {name === "body" ? (
        <textarea {...register(name)} />
      ) : (
        <input {...register(name)} />
      )}
      {errors[name] && (
        <span className="errorMessage">{errors[name].message}</span>
      )}
    </div>
  );

  return (
    <main className="main-content support">
      <div className="support-content">
        <img src={image} alt="" />
        <h1>Support</h1>
        <p>
          Need help with your order? You've come to the right place. DealDash is
          committed to providing our customers with exceptional support to
          ensure your shopping experience is as seamless as possible.
        </p>
        <p>
          If you have any questions or concerns about our products, orders, or
          services, please don't hesitate to reach out to our support team using
          the contact form below. We're here to assist you with anything you
          need, from order status updates to product recommendations and more.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {renderInput("firstName", "First name")}
          {renderInput("lastName", "Last name")}
          {renderInput("email", "Email")}
          {renderInput("body", "Body")}
          <button type="submit">Submit</button>
        </form>
      </div>
    </main>
  );
}

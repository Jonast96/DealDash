/**
Checkout Component for completing the purchase.
@module Checkout
@default
*/
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../../styles/checkout/checkout.scss";
import Summary from "../cart/summary";
import { schema } from "./schema";
import { CartContext } from "../../components/Cart";

/**
Checkout Component.
@function
@returns {JSX.Element}
*/
export default function Checkout() {
  const { cart } = useContext(CartContext);
  const [debitContainer, setDebitContainer] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /**
Handle submit event.
@function
@param {object} data - The form data.
@returns {void}
*/
  const onSubmit = (data) => {
    console.log(data);
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
      <input {...register(name)} />
      {errors[name] && (
        <span className="errorMessage">{errors[name].message}</span>
      )}
    </div>
  );

  /**
Render Radio button.
@function
@param {string} id - The id of the radio button.
@param {string} value - The value of the radio button.
@param {function} onClick - The onClick event handler for the radio button.
@returns {JSX.Element}
*/
  const renderRadio = (id, value, onClick) => (
    <div className="radioContainer">
      <input
        onClick={onClick}
        type="radio"
        {...register("option")}
        value={value}
        id={id}
      />
      <label htmlFor={id}>{id}</label>
    </div>
  );

  /**
Show Debit container on Credit or debit card selection.
@function
@returns {void}
*/
  function showDebit() {
    setDebitContainer(true);
  }
  /**
Hide Debit container on Apple pay or Google pay selection.
@function
@returns {void}
*/
  function hideDebit() {
    setDebitContainer(false);
  }

  /**
Debit card container.
@function
@returns {JSX.Element}
*/
  function Debit() {
    return debitContainer ? (
      <div className="debitContainer">
        {renderInput("cardNumber", "Card number")}
        <div className="debitSmall">
          {renderInput("expirationDate", "Expiration date")}
          {renderInput("CVVCode", "CVV code")}
        </div>
      </div>
    ) : (
      ""
    );
  }

  /**
Handle button click event.
@function
@param {event} event - The button click event.
@returns {void}
*/
  const handleButtonClick = (event) => {
    event.preventDefault();
    handleSubmit(onSubmit)();
  };
  return (
    <div className="checkoutContainer main-content">
      <h1>Checkout</h1>
      <form className="checkoutForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid">
          <div className="input_sections personal">
            <p className="categories">Personal information:</p>
            <div className="inputRow">
              {renderInput("firstName", "First name")}
              {renderInput("lastName", "Last name")}
            </div>
            <div className="inputRow">
              {renderInput("phone", "Phone")}
              {renderInput("email", "Email")}
            </div>
          </div>
          <div className="input_sections delivery">
            <p className="categories">Delivery details:</p>
            <div className="inputRow">
              {renderInput("countryRegion", "Country/Region")}
              {renderInput("townCity", "Town/city")}
            </div>
            <div className="inputRow">
              {renderInput("street", "Street")}
              {renderInput("postcode", "Postcode")}
            </div>
          </div>

          <div className="input_sections">
            <p className="categories">Payment:</p>
            <label>Choose an option:</label>
            {renderRadio("Apple pay", "Apple pay", hideDebit)}
            {renderRadio("Google pay", "Google pay", hideDebit)}
            {renderRadio(
              "Credit or debit card",
              "Credit or debit card",
              showDebit
            )}
            <Debit />

            {errors.option && (
              <span className="errorMessage">{errors.option.message}</span>
            )}
          </div>
        </div>
        <div>
          <div className="itemsContainer">
            <h2>Your items</h2>
            {cart.map((item) => {
              return (
                <div key={item.id} className="item">
                  <p>{item.title}</p>
                  <p>{item.price},-</p>
                </div>
              );
            })}
          </div>
          <Summary
            type={"submit"}
            cart={cart}
            buttonName="Complete purchase"
            linkTo={"/"}
            onButtonClick={handleButtonClick}
          />
        </div>
      </form>
    </div>
  );
}

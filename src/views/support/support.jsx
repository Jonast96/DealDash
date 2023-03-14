import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
});

export default function Support() {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input {...register("firstName")} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div>
        <label htmlFor="lastName">Last name</label>
        <input {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      <div>
        <label htmlFor="Phone">Phone</label>
        <input {...register("Phone")} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="countryRegion">Country/Region</label>
        <input {...register("countryRegion")} />
        {errors.countryRegion && <span>{errors.countryRegion.message}</span>}
      </div>

      <div>
        <label htmlFor="townCity">Town/city</label>
        <input {...register("townCity")} />
        {errors.townCity && <span>{errors.townCity.message}</span>}
      </div>

      <div>
        <label htmlFor="street">Street</label>
        <input {...register("street")} />
        {errors.street && <span>{errors.street.message}</span>}
      </div>

      <div>
        <label htmlFor="postcode">Postcode</label>
        <input {...register("postcode")} />
        {errors.postcode && <span>{errors.postcode.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

import * as yup from "yup";
/**
 * Validation schema for user inputs.
 * @type {yup.ObjectSchema}
 *
 * */
export const schema = yup.object().shape({
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

  townCity: yup.string().required("Town/city is required"),
  street: yup.string().required("Street is required"),
  postcode: yup.string().required("Postcode is required"),
  cardNumber: yup.string().min(16, "Card number is required"),
  expirationDate: yup.string().min(4, "Month year format required (02/23)"),
  CVVCode: yup.string().min(3, "CVV must be exactly 3 characters"),
  option: yup.string().required(),
});

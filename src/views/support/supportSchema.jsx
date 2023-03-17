import * as yup from "yup";

export const supportSchema = yup.object().shape({
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

  body: yup
    .string()
    .required("Body is required")
    .min(3, "Body must be at least 3 characters"),
});

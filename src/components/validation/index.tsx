import * as Yup from "yup";

export const registerValidation = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(15, "Name cannot exceed 15 characters")
    .required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^01[0125][0-9]{8}$/, "Enter a valid Egyptian phone number"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must be at least 6 characters long and include at least one uppercase letter, lowercase letter, number, and special character (@$!%*?&)"
    ),
  rePassword: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export const loginValidation = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must be at least 6 characters long and include at least one uppercase letter, lowercase letter, number, and special character (@$!%*?&)"
    ),
});

export const onlinePaymentValidation = Yup.object({
  details: Yup.string()
    .min(3, "details must be at least 3 characters")
    .max(15, "details cannot exceed 15 characters")
    .required("details is required"),
  phone: Yup.string()
    .min(3, "phone must be at least 3 characters")
    .max(15, "phone cannot exceed 15 characters")
    .required("phone is required"),
  city: Yup.string()
    .min(3, "city must be at least 3 characters")
    .max(15, "city cannot exceed 15 characters")
    .required("city is required"),
});

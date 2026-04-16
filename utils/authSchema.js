import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
});

export default validationSchema;
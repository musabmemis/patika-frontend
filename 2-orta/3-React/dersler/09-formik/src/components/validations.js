import * as yup from "yup";

const validations = yup.object().shape({
  email: yup.string().email("geçerli bir email girin ").required("zorunlu alan "),
  password: yup.string().min(5, "parola en az 5 karakter").required(),
  passwordConfirm: yup.string().oneOf([yup.ref("password")]).required(),
});

export default validations;

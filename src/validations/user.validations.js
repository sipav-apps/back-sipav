import * as yup from 'yup';

export const userValidation = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email().min(8),
  password: yup.string().required().min(8),
  phoneNumber: yup.string().nullable().min(10),
  cpf: yup.string().required().min(8),
  birthdate: yup.date().required(),
  isResponsible: yup.boolean().required(),
  telegram: yup.string().nullable(),
})
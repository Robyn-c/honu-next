import { z } from 'zod';

// Sign In Schema
export const signInFormSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Contraseña tiene que tener al menos 6 caracteres'),
});

// Sign Up Schema
// TODO: Añadir rut
export const signUpFormSchema = z.object({
  name: z.string().min(3, 'Nombre debe tener al menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Contraseña tiene que tener al menos 6 caracteres'),
  confirmPassword: z.string().min(6, 'Confirmar contraseña tiene que tener al menos 6 caracters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Password don't match", 
  path: ['confirmPassword']
});
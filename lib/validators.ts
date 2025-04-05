import { z } from 'zod';

// Sign In Schema
export const signInFormSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Contraseña tiene que tener al menos 6 caracteres'),
});

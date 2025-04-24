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

// Cart Schema
export const cartItemSchema = z.object({
  productId: z.string().min(1, 'Producto es requerido'),
  name: z.string().min(1, 'Nombre es requerido'),
  slug: z.string().min(1, 'Slug es requerido'),
  qty: z.number().int().nonnegative('La cantidad debe ser un número positivo'),
  image: z.string().min(1, 'Imagen es requerida'),
  price: z.number().int().nonnegative('El precio no puede ser negativo')
});

// TODO : Pricing checkup
export const insertCartSchema = z.object({
  items: z.array(cartItemSchema),
  itemsPrice: z.number().int(),
  totalPrice: z.number().int(),
  shippingPrice: z.number().int(),
  sessionCartId: z.string().min(1, 'Id de session requerido'),
  userId: z.string().optional().nullable(),
});
import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Nome só pode conter letras e espaços'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Email inválido'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Senha deve ter pelo menos 8 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número'
    ),
});

export type FormData = z.infer<typeof formSchema>;
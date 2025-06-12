import { z } from 'zod';

export const taskSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'El título es obligatorio.' })
    .max(100, { message: 'El título no puede superar 100 caracteres.' }),
  description: z
    .string()
    .min(1, { message: 'La descripción es obligatoria.' })
    .max(300, { message: 'La descripción no puede superar 300 caracteres.' }),
});

export type TaskFormData = z.infer<typeof taskSchema>;

import { z } from "zod";

// Schema de cor
export const colorSchema = z.object({
  name: z.string(),
  value: z.string(),
});

// Schema de endereço
export const addressSchema = z.object({
  cep: z.string(),
  logradouro: z.string(),
  complemento: z.string().optional(),
  bairro: z.string(),
  localidade: z.string(),
  uf: z.string().length(2),
});

// Schema de produto
export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  images: z.array(z.string()),
  sizes: z.array(z.string()),
  colors: z.array(colorSchema),
});

// Schema para seleção do usuário
export const userSelectionsSchema = z.object({
  selectedSize: z.string().optional(),
  selectedColor: colorSchema.optional(),
  selectedImageIndex: z.number(),
  cep: z.string().optional(),
  address: addressSchema.optional(),
  timestamp: z.number(),
});

// Inferindo os types automaticamente
export type Product = z.infer<typeof productSchema>;
export type Color = z.infer<typeof colorSchema>;
export type Address = z.infer<typeof addressSchema>;
export type UserSelections = z.infer<typeof userSelectionsSchema>;

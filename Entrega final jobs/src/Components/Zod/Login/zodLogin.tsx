import { z } from "zod";

export const login_form = z.object({
  email: z
    .string()
    .nonempty("O email é obrigatório")
    .email("Digite um email valido!"),
  password: z.string().nonempty("Digite sua senha"),
});

export type login_company = z.infer<typeof login_form>;

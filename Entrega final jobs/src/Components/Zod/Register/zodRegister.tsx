import { z } from "zod";

export const register_form = z.object({
    name:
        z.string()
            .nonempty("Digite o nome da empresa"),
    email:
        z.string()
            .nonempty("O email é obrigatório")
            .email("Digite um email valido!"),
    password:
        z.string()
            .nonempty("Digite sua senha")
            .min(8, "No mínimo 8 caracteres")
            .regex(/^(?=.*[A-Z]).+$/, "Precisa ter uma letra maiúscula")
            .regex(/^(?=.*[a-z]).+$/, "Precisa ter uma letra minúscula")
            .regex(/^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/, "Precisa ter uma caractere especial")
            .regex(/^(?=.*\d).+$/, "Precisa ter um número"),
    confirm_password:
        z.string()
            .nonempty("Digite sua senha")
            .min(8, "No mínimo 8 caracteres")
            .regex(/^(?=.*[A-Z]).+$/, "Precisa ter uma letra maiúscula")
            .regex(/^(?=.*[a-z]).+$/, "Precisa ter uma letra minúscula")
            .regex(/^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/, "Precisa ter uma caractere especial")
            .regex(/^(?=.*\d).+$/, "Precisa ter um número"),
})

export type register_company = z.infer<typeof register_form>
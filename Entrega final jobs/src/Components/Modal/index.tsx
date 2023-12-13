import { SubmitHandler, useForm } from "react-hook-form";
import { Background, ModalStyle } from "./style";
import { api } from "../../services/api";
import { StyledInput } from "../Input/style";
import {
  StyleErrorsInputs,
  StyleTexts,
  StyleTitles,
} from "../../styles/Typography";
import { toast } from "react-toastify";

import buttonCloseModal from "../../assets/buttonCloseModal.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface inputApply {
  name: string;
  email: string;
  linkedin: string;
}

type ModalProps = {
  isOpen: boolean;
  setOpenModal: (isOpen: boolean) => void;
  jobsId: number | null;
  jobsPosition: string | "";
};

const modalSchema = z.object({
  name: z.string().nonempty("Campo obrigatorio"),
  email: z
    .string()
    .nonempty("Campo obrigatorio")
    .email("Porfavor insira um email valido"),
  linkedin: z.string().nonempty("Campo obrigatorio"),
});

export const Modal = ({
  isOpen,
  setOpenModal,
  jobsId,
  jobsPosition,
}: ModalProps) => {
  if (isOpen) {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<inputApply>({
      resolver: zodResolver(modalSchema),
    });

    const application: SubmitHandler<inputApply> = (data) => {
      const postApply = {
        jobId: jobsId,
        name: data.name,
        email: data.email,
        linkedin: data.linkedin,
      };

      const application = async () => {
        try {
          const { data } = await api.post("/applications", postApply);
          toast.success("Candidatura realizada com sucesso!");
          data;
          setOpenModal(false);
          reset();
        } catch (error) {
          console.log(error);
          toast.error("Ops! Algo deu errado");
        }
      };

      application();
    };

    return (
      <Background>
        <ModalStyle>
          <div className="modalButtonClose">
            <img
              src={buttonCloseModal}
              alt=""
              className="modalButtonClose__button"
              onClick={() => {
                setOpenModal(false);
              }}
            />
          </div>
          <div className="modalMain">
            <div>
              <StyleTitles className="modalMin__Title">
                Candidatar-se
              </StyleTitles>
              <StyleTexts>
                Você está se canditando para <strong>{jobsPosition}</strong> em
                <strong> Kenzie Academy Brasil</strong>
              </StyleTexts>
            </div>
            <form
              className="modalMain__form"
              onSubmit={handleSubmit(application)}
            >
              <StyleErrorsInputs>{errors.name?.message}</StyleErrorsInputs>
              <StyledInput
                type="text"
                placeholder="Nome"
                {...register("name")}
              />
              <StyleErrorsInputs>{errors.email?.message}</StyleErrorsInputs>
              <StyledInput
                type="email"
                placeholder="E-mail"
                {...register("email")}
              />
              <StyleErrorsInputs>{errors.linkedin?.message}</StyleErrorsInputs>
              <StyledInput
                type="text"
                placeholder="Linkedin"
                {...register("linkedin")}
              />
              <div className="modalMain__form--divButton">
                <button className="modalMain__form--button">
                  Candidatar-se
                </button>
              </div>
            </form>
          </div>
        </ModalStyle>
      </Background>
    );
  }

  return null;
};

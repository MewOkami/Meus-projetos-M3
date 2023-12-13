import { StyledWelcome } from "./style";

interface UserInfo {
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
}

export const WelcomeMessage = () => {
  let nome = "";

  const storedUserInfo = localStorage.getItem("UserInfo");
  let parsedUserInfo: UserInfo | null = null;

  try {
    parsedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;
  } catch (error) {
    console.error("Error parsing stored user info:", error);
  }

  if (parsedUserInfo && parsedUserInfo.user) {
    nome = parsedUserInfo.user.name;
  }
  
  return (
    <StyledWelcome>
      <h1 className="title">{nome}</h1>
      <h2 className="subtitle">
        Seja bem vindo (a), selecione uma das opções abaixo:
      </h2>
    </StyledWelcome>
  );
};

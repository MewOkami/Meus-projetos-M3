import { ContainerSearch } from "./style";
import searchIcon from "../../../assets/search_icon_full.svg";
import { useEffect } from "react";

interface ContainerForSearchProps {
  text: string;
  setText: (text: string) => void;
  setResult: (result: boolean) => void;
  textSearch: () => void;
  result: boolean;
  array: IJob[];
}

interface IJob {
  id: number;
  position: string;
  salary: number;
  description: string;
}

export const ContainerForSearch = ({
  text,
  setText,
  setResult,
  textSearch,
  result,
  array,
}: ContainerForSearchProps) => {
  useEffect(() => {
    const handleKeyPress = (event: { key: string }) => {
      if (event.key === "Enter") {
        textSearch();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <ContainerSearch>
      <div className="search__jobs">
        <h1>Busca de Vagas</h1>
      </div>
      <p>Digite o que você está procurando</p>
      <div>
        <input
          value={text}
          placeholder="Pesquisa"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setText(event?.target.value);
            setResult(false);
          }}
        />
        <img src={searchIcon} onClick={() => textSearch()} />
      </div>

      {result ? (
        <span>
          {array.length} Resultado(s) encontrado para: {text}
        </span>
      ) : null}
    </ContainerSearch>
  );
};

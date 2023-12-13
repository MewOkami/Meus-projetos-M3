import { StyledInput } from "./style";

interface InputProps {
  value: string;
  type: string;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({ value, type, placeholder }) => {
  return <StyledInput value={value} type={type} placeholder={placeholder} />;
};

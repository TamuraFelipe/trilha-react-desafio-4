import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick }: IButtonProps) => {
  return <ButtonContainer type="button" onClick={onClick} disabled={disabled}>{title}</ButtonContainer>;
};

export default Button;

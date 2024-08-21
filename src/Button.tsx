import { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  disabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function Button({ children, disabled = false, onClick }: Props) {
  return (
    <button disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

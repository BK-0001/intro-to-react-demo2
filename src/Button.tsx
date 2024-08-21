import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Button({ children }: Props) {
  return <button>{children}</button>;
}
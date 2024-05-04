import { ReactNode } from "react";

export function OnlyOnClient({
  children,
}: {
  children: ReactNode;
}): JSX.Element | null;

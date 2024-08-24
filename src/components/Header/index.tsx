import { ComponentProps } from "react";

export default function Header({ children, ...props }: ComponentProps<"div">) {
  return <div {...props}>{children}</div>;
}

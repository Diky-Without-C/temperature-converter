import { ComponentProps } from "react";

export interface Value extends ComponentProps<"div"> {
  value: string;
}

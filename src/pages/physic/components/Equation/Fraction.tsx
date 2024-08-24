import { Value } from "./model.types";

export default function Fraction({ value, ...props }: Value) {
  const [top, bottom] = value.split("/");

  return (
    <div {...props} className="flex flex-col text-xl">
      <span className="text-center text-black">{top}</span>
      <hr className="mt-1 border border-black" />
      <span className="text-center text-black">{bottom}</span>
    </div>
  );
}

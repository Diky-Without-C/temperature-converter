import Expression from "./Expression";
import { Value } from "./model.types";

export default function Equation({ value }: Value) {
  const [left, right] = value.split("=");

  return (
    <div className="flex items-center">
      <Expression value={left} />
      <span className="mx-2">=</span>
      <Expression value={right} />
    </div>
  );
}

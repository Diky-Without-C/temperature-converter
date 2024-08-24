import simpleFraction from "@/libs/math/utils/getSimplefiedFraction";
import checkIsInteger from "@/libs/math/utils/checkIsInteger";
import { Temperature } from "./model.types";
import formatDecimal from "@/libs/math/utils/formatDecimal";

export default function getTemperature(
  num: number,
  x: Temperature,
  y: Temperature,
) {
  const xt = x.top;
  const xb = x.bottom;
  const yt = y.top;
  const yb = y.bottom;

  const deltaX = xt - xb;
  const deltaY = yt - yb;
  const X = num - xb;

  const equation = X / deltaX;
  const solve = equation * deltaY + yb;

  const newFraction = simpleFraction(deltaY, deltaX);

  const steps = {
    step1: `(x - xb) / (xt - xb) = (y - yb) / (yt - yb)`,
    step2: `(${num} - ${xb}) / (${xt} - ${xb}) = (y - ${yb}) / (${yt} - ${yb})`,
    step3: `${X} / ${deltaX} = (y - ${yb}) / ${deltaY}`,
    step4: `(y - ${yb}) = ${X} / ${deltaX} * ${deltaY}`,
    step5: `y = ${X} / ${deltaX} * ${deltaY} + ${yb}`,
    step6: `y = ${checkIsInteger(equation * deltaY) ? equation * deltaY : `${X} * ${newFraction}`} + ${yb}`,
    step7: `y = ${formatDecimal(solve)} ${y.unit || "°x"}`,
  };

  const result = `${num} ${x.unit || "°x"} = ${formatDecimal(solve)} ${y.unit || "°x"}`;

  return { steps, result };
}

import getExpressions from "@/pages/physic/components/Equation/utils/getExpression";
import Fraction from "./Fraction";
import NotFraction from "./NotFraction";
import { Value } from "./model.types";

export default function Expression({ value }: Value) {
  const expressions = getExpressions(value);

  return (
    <div className="flex items-center">
      {expressions.map((expression, index) => {
        const isfraction = expression.includes("/");

        return isfraction ? (
          <Fraction key={index} value={expression} />
        ) : (
          <NotFraction key={index} value={expression} />
        );
      })}
    </div>
  );
}

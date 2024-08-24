import { Value } from "./model.types";

export default function NotFraction({ value, ...props }: Value) {
  const texts = value.replace("*", "×").match(/[^0-9]+|[0-9\.]+/gi);

  return (
    <div {...props} className="text-xl">
      {texts?.map((text, index) => {
        return (
          <span key={index} className="mx-0.5">
            {text}
          </span>
        );
      })}
    </div>
  );
}

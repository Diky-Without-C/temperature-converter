import checkIsInteger from "./checkIsInteger";

export default function formatDecimal(num: number): string {
  if (checkIsInteger(num)) {
    return num.toString();
  } else {
    const [_, comma] = num.toFixed(2).split(".");
    return `${parseFloat(num.toFixed(2))} ${comma.length > 3 ? "..." : ""}`;
  }
}

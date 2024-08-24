export default function simpleFraction(nominator: number, denominator: number) {
  function gcd(a: number, b: number): number {
    return b === 0 ? a : gcd(b, a % b);
  }

  const FPB = gcd(nominator, denominator);

  const simplifyA = nominator / FPB;
  const simplifyB = denominator / FPB;

  return `${simplifyA}/${simplifyB}`;
}

export default function getExpressions(input: string) {
  const regex =
    /(\d+|\([^\)]+\)|[a-zA-Z]+|\-\d+)\s*\/\s*(\d+|\([^\)]+\)|[a-zA-Z]+|\-\d+)|([^\s]+)/g;
  let matches = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    if (match[1] && match[2]) {
      matches.push(match[0]);
    } else {
      matches.push(match[3]);
    }
  }

  return matches;
}

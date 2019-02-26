function generate(n) {
  if (n === 1) return [[1]];
  const triangle = generate(n - 1);
  const prevRow = triangle[n - 2];
  const currRow = [];
  let tl, tr;
  for (let i = 0; i < n; ++i) {
    tl = typeof prevRow[i - 1] === "number" ? prevRow[i - 1] : 0;
    tr = typeof prevRow[i] === "number" ? prevRow[i] : 0;
    currRow.push(tl + tr);
  }
  triangle.push(currRow);
  return triangle;
}

const output = generate(12);
console.table(output);

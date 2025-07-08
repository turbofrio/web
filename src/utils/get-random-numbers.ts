export function getRandomNumbers(size: number, min: number, max: number) {
  if (max - min + 1 < size) {
    throw new Error(
      "Range is too small to generate the required number of unique values."
    )
  }

  const result = new Set()
  while (result.size < size) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min
    result.add(num)
  }
  return result
}

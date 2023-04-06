function calculatePercentage(data: number[]): number[] {
  const total = data.reduce((sum, num) => sum + num, 0)
  const percentage = 100
  return data.map((num) => (num / total) * percentage)
}

export { calculatePercentage }

export function calculateUniqPercentage(
  value: number,
  percentage: number,
): number {
  return (percentage / 100) * value
}

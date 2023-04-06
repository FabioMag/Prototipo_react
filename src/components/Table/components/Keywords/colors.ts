const colors = ['blue', 'green', 'yellow', 'orange', 'teal']

export function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

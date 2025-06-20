export function calculateTimePastSinceTargetDate(date: Date | string) {
  const now = new Date().getTime()
  const past = new Date(date).getTime()
  const seconds = Math.floor((now - past) / 1000)

  const intervals = [
    { label: "ano", seconds: 31536000 },
    { label: "mês", seconds: 2592000 },
    { label: "semana", seconds: 604800 },
    { label: "dia", seconds: 86400 },
    { label: "hora", seconds: 3600 },
    { label: "minuto", seconds: 60 },
    { label: "segundo", seconds: 1 },
  ]

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds)

    if (count >= 1) {
      if (interval.label === "mês") {
        return `${count} ${count > 1 ? "meses" : interval.label} atrás`
      }

      return `${count} ${interval.label}${count > 1 ? "s" : ""} atrás`
    }
  }

  return "agora mesmo"
}

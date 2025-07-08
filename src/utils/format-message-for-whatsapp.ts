export function formatMessageForWhatsApp(
  numberInInternationalFormat: string,
  message: string
) {
  const baseURL = "https://wa.me"
  const validNumber = numberInInternationalFormat.replace(/[^\d]/g, "")
  const urlValidMessage = encodeURIComponent(message)

  return `${baseURL}/${validNumber}/?text=${urlValidMessage}`
}

const WHATSAPP_BASE_URL = "https://wa.me"

export function formatMessageForWhatsApp(
  numberInInternationalFormat: string,
  message: string
) {
  const validNumber = numberInInternationalFormat.replace(/[^\d]/g, "")
  const urlValidMessage = encodeURIComponent(message)

  return `${WHATSAPP_BASE_URL}/${validNumber}/?text=${urlValidMessage}`
}

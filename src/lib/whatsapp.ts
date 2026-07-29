// Canal principal de conversión: el WhatsApp del sitio lo responde nuestro propio agente.
export const WHATSAPP_NUMBER = "56951096594";

export function whatsappUrl(message = "Hola! Quiero probar el agente de Blue Analytics.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default whatsappUrl;

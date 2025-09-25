export const WHATSAPP = {
  // wa.me expects an international number without '+' or spaces
  waNumber: '917020425189',
  // Display-friendly number for UI
  displayNumber: '+91 70204 25189',
};

export function openWhatsAppWithText(text: string) {
  // 'text' should already be URL-encoded or assembled with %0A as needed by the caller
  const url = `https://wa.me/${WHATSAPP.waNumber}?text=${text}`;
  window.open(url, '_blank');
}


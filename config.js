// Paste the Apps Script web app URL (ends with /exec) after deploying the backend.
window.APP_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbwAlbmlyY0WcsKfcuMSzf7veotI2q7J6c-uv6f2ARhe6HRYzuOgh0mBAmqFTk2BgwwH3g/exec',
  // Photo compression: longest side is capped at MAX_SIDE pixels and JPEG quality lowered, so the PDF stays small
  // enough to email from the ship (about 12-18 KB per photo; ~220 photos is roughly 3-4 MB).
  MAX_SIDE: 400,
  JPEG_QUALITY: 0.55
};

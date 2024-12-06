import QRCode from 'qrcode';

export const generateQRCode = async (containerId, url) => {
  try {
    const qrCodeContainer = document.getElementById(containerId);
    if (!qrCodeContainer) {
      throw new Error('QR code container not found');
    }

    // Clear any existing content
    qrCodeContainer.innerHTML = '';
    
    // Create a new canvas element
    const canvas = document.createElement('canvas');
    qrCodeContainer.appendChild(canvas);

    await QRCode.toCanvas(canvas, url, {
      width: 200,
      margin: 1,
      color: {
        dark: '#1e293b',
        light: '#ffffff'
      }
    });
  } catch (err) {
    console.error('Error generating QR code:', err);
    // Display a user-friendly error message
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'Unable to generate QR code';
    errorMsg.style.color = '#ef4444';
    document.getElementById(containerId)?.appendChild(errorMsg);
  }
};
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export interface CertificateData {
  recipientName: string;
  actionId: string;
  blockNumber: number;
  date: string;
  systemName: string;
  auditScore: string;
}

/**
 * generateCertificatePDF: Creates a vector PDF certificate/receipt in-browser.
 * Zero server round-trip; 100% client-side compute.
 */
export async function generateCertificatePDF(data: CertificateData): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 420]);

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontMono = await pdfDoc.embedFont(StandardFonts.CourierBold);

  const { width, height } = page.getSize();

  // Background: Obsidian Deep (#0B0F19)
  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: rgb(0.043, 0.058, 0.098)
  });

  // Outer Border: Indigo Glow (#6366F1)
  page.drawRectangle({
    x: 20,
    y: 20,
    width: width - 40,
    height: height - 40,
    borderColor: rgb(0.388, 0.4, 0.945),
    borderWidth: 2
  });

  // Inner Subtle Bezel: Cyan Pulse (#06B6D4)
  page.drawRectangle({
    x: 26,
    y: 26,
    width: width - 52,
    height: height - 52,
    borderColor: rgb(0.023, 0.713, 0.831),
    borderWidth: 0.75
  });

  // Title: GODMODE VERIFIED ACTION CERTIFICATE
  page.drawText('PROJECT GODMODE', {
    x: 50,
    y: height - 60,
    size: 14,
    font: fontBold,
    color: rgb(0.388, 0.4, 0.945)
  });

  page.drawText('STATUTORY ARCHITECTURAL CLEARANCE', {
    x: 50,
    y: height - 85,
    size: 20,
    font: fontBold,
    color: rgb(0.972, 0.98, 0.988)
  });

  page.drawText('This document certifies that the following action was executed under The Rule of Everything,', {
    x: 50,
    y: height - 120,
    size: 10,
    font: fontRegular,
    color: rgb(0.58, 0.639, 0.721)
  });

  page.drawText('strictly observing Zero Local GPU constraints and cloud-hosted API grounding.', {
    x: 50,
    y: height - 135,
    size: 10,
    font: fontRegular,
    color: rgb(0.58, 0.639, 0.721)
  });

  // Details Panel
  page.drawRectangle({
    x: 50,
    y: height - 260,
    width: width - 100,
    height: 105,
    color: rgb(0.066, 0.094, 0.152),
    borderColor: rgb(0.2, 0.254, 0.333),
    borderWidth: 1
  });

  page.drawText(`OPERATOR: ${data.recipientName}`, {
    x: 70,
    y: height - 180,
    size: 12,
    font: fontBold,
    color: rgb(0.972, 0.98, 0.988)
  });

  page.drawText(`ACTION RECORD ID: ${data.actionId}`, {
    x: 70,
    y: height - 205,
    size: 10,
    font: fontMono,
    color: rgb(0.023, 0.713, 0.831)
  });

  page.drawText(`AUDITED LEDGER BLOCK: #${data.blockNumber}`, {
    x: 70,
    y: height - 225,
    size: 10,
    font: fontMono,
    color: rgb(0.062, 0.725, 0.505)
  });

  page.drawText(`VERIFICATION SCORE: ${data.auditScore} (100% PASS)`, {
    x: 70,
    y: height - 245,
    size: 10,
    font: fontBold,
    color: rgb(0.062, 0.725, 0.505)
  });

  // Footer & Timestamp
  page.drawText(`TIMESTAMP: ${data.date}`, {
    x: 50,
    y: 45,
    size: 8,
    font: fontMono,
    color: rgb(0.392, 0.454, 0.545)
  });

  page.drawText('VERIFIED IN-BROWSER VIA PDF-LIB • ZERO SERVER DEPENDENCY', {
    x: 270,
    y: 45,
    size: 8,
    font: fontMono,
    color: rgb(0.388, 0.4, 0.945)
  });

  return await pdfDoc.save();
}

/**
 * downloadCertificate: Helper to trigger in-browser vector PDF download.
 */
export async function downloadCertificate(data: CertificateData): Promise<void> {
  const pdfBytes = await generateCertificatePDF(data);
  const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `GODMODE-Certificate-${data.actionId}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

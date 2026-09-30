const BREVO_API_KEY = process.env.BREVO_API_KEY;
const FROM_EMAIL = process.env.BREVO_FROM_EMAIL || "no-reply@yourdomain.com";
const FROM_NAME = process.env.BREVO_FROM_NAME || "TOYCAC '27";
// Set this once you have the real group link.
const WHATSAPP_GROUP_LINK = process.env.WHATSAPP_GROUP_LINK || "https://chat.whatsapp.com/IvLxotMwpMq5S6SaFVskeO";

export async function sendConfirmationEmail(params: {
  to: string;
  fullName: string;
  houseNumber: string;
  category: string;
}) {
  if (!BREVO_API_KEY) {
    console.error("BREVO_API_KEY not set — skipping email send");
    return;
  }

  const { to, fullName, houseNumber } = params;

  const html = `
  <div style="background:#0d0d0d; padding:24px 0; font-family: Arial, Helvetica, sans-serif;">
    <div style="max-width:480px; margin:0 auto; border:1px solid #333; border-radius:16px; overflow:hidden;">

      <div style="background:#059669; padding:28px 24px; text-align:center;">
        <p style="margin:0; color:#ffffff; font-size:26px; font-weight:900; font-style:italic;">TOYCAC '27</p>
        <p style="margin:6px 0 0; color:#d1fae5; font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase;">Official Verification</p>
      </div>

      <div style="background:#111111; padding:28px 24px; color:#e5e5e5;">
        <p style="font-size:15px; line-height:1.6;">
          Assalamu Alaykum <strong style="color:#ffffff;">${fullName}</strong>,
        </p>
        <p style="font-size:15px; line-height:1.6; color:#cccccc;">
          Alhamdulillah! Your payment for <strong style="color:#ffffff;">TOYCAC '27</strong> has been verified.
          Your registration is now officially confirmed.
        </p>

        <div style="border:1px solid #333; border-radius:14px; padding:20px; text-align:center; margin:24px 0; background:#0d0d0d;">
          <p style="margin:0; font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#34d399;">
            Your Assigned House
          </p>
          <p style="margin:8px 0 0; font-size:32px; font-weight:900; color:#ffffff;">${houseNumber}</p>
        </div>

        <p style="text-align:center; font-size:11px; font-weight:700; letter-spacing:2px; text-transform:uppercase; color:#999999; margin-bottom:12px;">
          Next Step: Join The Community
        </p>
        <div style="text-align:center; margin-bottom:24px;">
          <a href="${WHATSAPP_GROUP_LINK}"
             style="display:inline-block; background:#059669; color:#ffffff; font-weight:700; font-size:14px; text-decoration:none; padding:14px 28px; border-radius:10px; border:1px solid #ffffff;">
            Join WhatsApp Group
          </a>
        </div>

        <div style="border-left:3px solid #d97706; background:#1a1206; padding:14px 16px; border-radius:6px; margin-bottom:20px;">
          <p style="margin:0; font-size:13px; color:#fbbf24; line-height:1.5;">
            <strong>Note:</strong> Please keep this email safe — you'll be asked to present it during accreditation.
          </p>
        </div>

        <p style="font-size:14px; color:#cccccc;">We look forward to hosting you!</p>
      </div>

      <div style="background:#111111; border-top:1px solid #333; padding:18px 24px; text-align:center;">
        <p style="margin:0; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#999999;">
          Tijaniyyah Muslim Students' Association of Nigeria (TIMSAN)
        </p>
        <p style="margin:4px 0 0; font-size:11px; color:#666666;">Oyo State Chapter Secretariat</p>
      </div>

    </div>
  </div>
  `;

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: to, name: fullName }],
      subject: "TOYCAC '27 — Official Verification",
      htmlContent: html,
    }),
  });

  if (!res.ok) {
    console.error("Brevo send failed", await res.text());
  }
}
const BREVO_API_KEY = process.env.BREVO_API_KEY;
// Must be an address on a domain you've verified in Brevo's dashboard
// (Senders, Domains & Dedicated IPs -> Domains). Swap this once TIMSAN's
// domain is verified there.
const FROM_EMAIL = process.env.BREVO_FROM_EMAIL || "no-reply@yourdomain.com";
const FROM_NAME = process.env.BREVO_FROM_NAME || "TCAC '26";

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

  const { to, fullName, houseNumber, category } = params;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px;">
      <h2 style="color:#006948;">Registration Confirmed 🎉</h2>
      <p>As-salamu alaykum ${fullName},</p>
      <p>Your payment for <strong>TCAC '26</strong> has been verified and your registration
      (${category}) is now confirmed.</p>
      <div style="background:#F0FDF4; border:2px solid #006948; border-radius:16px; padding:20px; text-align:center; margin:24px 0;">
        <p style="margin:0; font-size:11px; text-transform:uppercase; letter-spacing:1px; color:#006948;">Your House</p>
        <p style="margin:4px 0 0; font-size:28px; font-weight:900; color:#006948;">${houseNumber}</p>
      </div>
      <p>Please hold onto this email — you may be asked for your house number at check-in.</p>
      <p>See you at camp!<br/>TIMSAN Oyo State</p>
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
      subject: "TCAC '26 — Registration Confirmed ✅",
      htmlContent: html,
    }),
  });

  if (!res.ok) {
    console.error("Brevo send failed", await res.text());
  }
}
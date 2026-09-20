const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Must be an address on a domain you've verified in Resend's dashboard.
// Their default onboarding@resend.dev can only send to your own account
// email until you verify a real domain — swap this once TIMSAN's domain
// (or a Gmail alias via Resend's SMTP) is verified.
const FROM_ADDRESS = process.env.RESEND_FROM_ADDRESS || "TCAC '26 <onboarding@resend.dev>";

export async function sendConfirmationEmail(params: {
  to: string;
  fullName: string;
  houseNumber: string;
  category: string;
}) {
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not set — skipping email send");
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

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to,
      subject: "TCAC '26 — Registration Confirmed ✅",
      html,
    }),
  });

  if (!res.ok) {
    console.error("Resend send failed", await res.text());
  }
}

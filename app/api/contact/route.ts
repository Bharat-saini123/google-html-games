import nodemailer from "nodemailer";

export const runtime = "nodejs";

const inbox = "sainibharat277@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactMessage = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function isText(value: unknown): value is string {
  return typeof value === "string";
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) {
    return Response.json({ error: "Request origin is required." }, { status: 403 });
  }
  try {
    if (new URL(origin).host !== host) {
      return Response.json({ error: "Request origin is not allowed." }, { status: 403 });
    }
  } catch {
    return Response.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > 12000) {
    return Response.json({ error: "Message is too large." }, { status: 413 });
  }

  let payload: ContactMessage;
  try {
    payload = (await request.json()) as ContactMessage;
  } catch {
    return Response.json({ error: "Form data is invalid." }, { status: 400 });
  }

  if (!isText(payload.name) || !isText(payload.email) ||
      !isText(payload.subject) || !isText(payload.message) ||
      !isText(payload.website)) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  if (payload.website.trim()) {
    return Response.json({ error: "Unable to send this message." }, { status: 400 });
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const subject = payload.subject.trim();
  const message = payload.message.trim();

  if (
    !name || name.length > 100 ||
    !emailPattern.test(email) || email.length > 254 ||
    !subject || subject.length > 120 ||
    !message || message.length > 5000
  ) {
    return Response.json({ error: "Please check the form fields and try again." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  const port = Number(SMTP_PORT);
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !Number.isInteger(port) || port < 1 || port > 65535) {
    return Response.json(
      { error: "Email delivery is not configured yet. Please contact the site owner by phone." },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Game Arcade Contact" <${SMTP_USER}>`,
      to: inbox,
      replyTo: { name, address: email },
      subject: `Game Arcade message: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(
      "Contact email delivery failed:",
      error instanceof Error ? error.message : "Unknown SMTP error",
    );
    return Response.json(
      { error: "Message could not be delivered. Please try again later or contact us by phone." },
      { status: 502 },
    );
  }
}

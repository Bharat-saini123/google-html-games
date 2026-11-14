"use client";

import { FormEvent, useState } from "react";

const supportAmounts = [49, 99, 199] as const;

export default function ContactForm({ hasPaymentQr }: { hasPaymentQr: boolean }) {
  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(49);
  const [customAmount, setCustomAmount] = useState("");

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);
    setMessageStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok) {
        setMessageStatus(result.error ?? "Your message could not be sent. Please try again later.");
        return;
      }

      form.reset();
      setMessageStatus("Thank you! Your message has been sent.");
    } catch {
      setMessageStatus("A network error occurred. Check your connection and try again.");
    } finally {
      setIsSending(false);
    }
  }

  const amount = selectedAmount === "custom" ? Number(customAmount) : selectedAmount;
  const customAmountInvalid =
    selectedAmount === "custom" &&
    (!Number.isInteger(amount) || amount < 1 || amount > 100000);

  return (
    <div className="contact-tools">
      <section className="contact-card" aria-labelledby="contact-form-heading">
        <div className="contact-card-heading">
          <span className="eyebrow">Send a message</span>
          <h2 id="contact-form-heading">Contact us</h2>
          <p>Your message will be sent to our inbox. We can reply to the email address you provide.</p>
        </div>
        <div className="direct-contact">
          <a href="mailto:sainibharat277@gmail.com">
            <span aria-hidden="true">✉</span>
            <span><small>Email</small><strong>sainibharat277@gmail.com</strong></span>
          </a>
          <a href="tel:8570915006">
            <span aria-hidden="true">☎</span>
            <span><small>Call</small><strong>8570915006</strong></span>
          </a>
          <a href="https://wa.me/918570915006" target="_blank" rel="noreferrer">
            <span aria-hidden="true">↗</span>
            <span><small>WhatsApp</small><strong>Message us</strong></span>
          </a>
        </div>
        <form className="contact-form" onSubmit={submitMessage}>
          <div className="form-row">
            <label>
              <span>Your name</span>
              <input name="name" type="text" autoComplete="name" maxLength={100} required />
            </label>
            <label>
              <span>Email address</span>
              <input name="email" type="email" autoComplete="email" maxLength={254} required />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" type="text" maxLength={120} required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows={6} maxLength={5000} required />
          </label>
          <label className="contact-honeypot" aria-hidden="true">
            Leave this field empty
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="button button-primary contact-submit" type="submit" disabled={isSending}>
            {isSending ? "Sending…" : "Send message"} <span aria-hidden="true">→</span>
          </button>
          <p className="form-privacy-note">
            Gmail processes your email address and message so we can reply. Do not send payment details through this form.
          </p>
          <p className="form-status" role="status" aria-live="polite">{messageStatus}</p>
        </form>
      </section>

      <section className="support-card" aria-labelledby="support-heading">
        <span className="eyebrow">Optional support</span>
        <h2 id="support-heading">Enjoying the games? Support the site if you wish.</h2>
        <p>Support is voluntary. Games remain free, and contributions do not unlock paid features or access.</p>
        <div className="support-amounts" aria-label="Choose a suggested support amount">
          {supportAmounts.map((value) => (
            <button
              type="button"
              key={value}
              className={`support-amount${selectedAmount === value ? " active" : ""}`}
              aria-pressed={selectedAmount === value}
              onClick={() => setSelectedAmount(value)}
            >
              ₹{value}
            </button>
          ))}
          <button
            type="button"
            className={`support-amount${selectedAmount === "custom" ? " active" : ""}`}
            aria-pressed={selectedAmount === "custom"}
            onClick={() => setSelectedAmount("custom")}
          >
            Custom
          </button>
        </div>
        {selectedAmount === "custom" && (
          <>
            <label className="custom-amount">
              <span>Amount (₹)</span>
              <input
                type="number"
                min="1"
                max="100000"
                step="1"
                inputMode="numeric"
                value={customAmount}
                onChange={(event) => setCustomAmount(event.target.value)}
                aria-invalid={customAmountInvalid}
              />
            </label>
            {customAmountInvalid && (
              <p className="amount-error" role="alert">Enter a whole amount between ₹1 and ₹100,000.</p>
            )}
          </>
        )}
        {hasPaymentQr ? (
          <div className="payment-qr">
            <img src="/payment-qr.png" alt="QR code for voluntary support payments" width="240" height="240" />
            <p>
              Suggested amount: {Number.isInteger(amount) && amount > 0 ? `₹${amount}` : "enter an amount"}.
              Confirm the recipient and amount in your payment app before sending.
            </p>
          </div>
        ) : (
          <div className="qr-placeholder" role="status">
            <span aria-hidden="true">▦</span>
            <strong>Payment QR code has not been added yet</strong>
            <small>The QR code will appear here once the site owner adds the original image. Please do not send a payment yet.</small>
          </div>
        )}
        <p className="support-note">
          Suggested amounts are optional. A custom amount can be between ₹1 and ₹100,000.
        </p>
      </section>
    </div>
  );
}

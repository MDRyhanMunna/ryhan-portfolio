import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight } from "lucide-react";
export function ContactForm() {
  const ref = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ref.current || status === "sending") return;
    setStatus("sending");
    try {
      // Preserve the original site's EmailJS integration and field names.
      await emailjs.sendForm("service_152vrq4", "template_8qbjzwf", ref.current, {
        publicKey: "lOt03A_3lO8PHZJVr",
      });
      setStatus("sent");
      ref.current.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <form className="contact-form" ref={ref} onSubmit={submit}>
      <h3>Have something in mind?</h3>
      <div className="form-row">
        <div>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="contact-email">Email address</label>
          <input
            id="contact-email"
            name="email"
            autoComplete="email"
            type="email"
            required
            maxLength={254}
            placeholder="jane@company.com"
          />
        </div>
      </div>
      <label htmlFor="contact-message">Message</label>
      <textarea
        id="contact-message"
        name="message"
        required
        maxLength={5000}
        rows={5}
        placeholder="Tell me about your project or opportunity…"
      />
      <button className="button primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
        <ArrowUpRight size={17} />
      </button>
      <p className="form-status" role="status">
        {status === "sent"
          ? "Thanks — your message has been sent."
          : status === "error"
            ? "Your message could not be sent. Please try again later."
            : "Your message is sent through EmailJS."}
      </p>
    </form>
  );
}

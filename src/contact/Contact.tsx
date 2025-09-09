import React, { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const EMAIL_TO = "vidishasawantv@gmail.com";

type FormData = { fullName: string; email: string; subject: string; message: string };
type FormErrors = Partial<Record<keyof FormData, string>>;

const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
const validate = (data: FormData): FormErrors => {
  const e: FormErrors = {};
  if (!data.fullName.trim()) e.fullName = "Full name is required";
  if (!data.email.trim()) e.email = "Email is required";
  else if (!validateEmail(data.email)) e.email = "Enter a valid email";
  if (!data.subject.trim()) e.subject = "Subject is required";
  if (!data.message.trim()) e.message = "Message is required";
  return e;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(formData);
  const hasErrors = Object.keys(errors).length > 0;

  const onChange =
    (name: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    };

  const onBlur = (name: keyof FormData) => () => setTouched((t) => ({ ...t, [name]: true }));

  const handleLinkedIn = () =>
    window.open("https://www.linkedin.com/in/vidisha-vijay-sawant-23a63613a", "_blank");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mark all touched to show errors if any
    setTouched({ fullName: true, email: true, subject: true, message: true });
    if (hasErrors) return;

    const { fullName, email, subject, message } = formData;
    const body = `Name: ${fullName}\nEmail: ${email}\n\n${message}`;
    // Use location to open default mail client
    window.location.href = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  const inputBase =
    "w-full rounded-xl border border-gray-300 focus:border-black focus:ring-2 focus:ring-black/20 " +
    "text-sm sm:text-base p-3 sm:p-3.5 transition-colors";

  const errorText = "mt-1 block text-xs sm:text-sm text-red-600";

  return (
    <section id="contact" className="page-shell flex justify-center">
      <div className="mx-auto w-[92vw] lg:w-[80vw] max-w-6xl px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-16">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-2 items-start">
          {/* Left copy column */}
          <div className="text-left max-lg:text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">Let&apos;s chat.</h1>
            <h3 className="mt-4 mb-4 text-base sm:text-lg lg:text-xl text-black/80">
              I’m looking for a new full-time opportunity in 2025, available to join immediately, and open to relocation.
              I’d love to connect and explore how I can contribute to your team!
            </h3>

            <p className="text-sm sm:text-base">Connect with me on LinkedIn:</p>
            <button
              onClick={handleLinkedIn}
              className="mt-2 inline-flex items-center justify-center gap-2
                         border-2 border-[#0077b5] text-[#0077b5] rounded-xl
                         px-4 py-2 text-sm sm:text-base lg:text-lg
                         hover:bg-[#0077b5] hover:text-white transition-colors"
            >
              LinkedIn <ArrowCircleRightIcon fontSize="inherit" />
            </button>

            <div className="mt-6 text-sm sm:text-base">
              Or email me directly:&nbsp;
              <a
                className="font-semibold underline decoration-2 underline-offset-4"
                href={`mailto:${EMAIL_TO}`}
              >
                {EMAIL_TO}
              </a>
            </div>

            <p className="mt-6 text-base sm:text-lg">Let’s create something together ✨</p>
          </div>

          {/* Form column */}
          <div className="bg-white rounded-2xl border border-black/10 shadow-md ring-1 ring-black/5 p-6 sm:p-8">
            {!submitted ? (
              <>
                <h2 className="text-center text-lg sm:text-xl font-bold mb-4">Send me a message 🚀</h2>
                <form onSubmit={handleSubmit} noValidate>
                  {/* Full name */}
                  <label htmlFor="fullName" className="sr-only">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Full name*"
                    value={formData.fullName}
                    onChange={onChange("fullName")}
                    onBlur={onBlur("fullName")}
                    aria-invalid={!!(touched.fullName && errors.fullName)}
                    aria-describedby={touched.fullName && errors.fullName ? "err-fullName" : undefined}
                    autoComplete="name"
                    className={`${inputBase} ${touched.fullName && errors.fullName ? "border-red-500" : ""}`}
                  />
                  {touched.fullName && errors.fullName && (
                    <span id="err-fullName" className={errorText}>
                      {errors.fullName}
                    </span>
                  )}

                  {/* Email */}
                  <div className="mt-4">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email address*"
                      value={formData.email}
                      onChange={onChange("email")}
                      onBlur={onBlur("email")}
                      aria-invalid={!!(touched.email && errors.email)}
                      aria-describedby={touched.email && errors.email ? "err-email" : undefined}
                      autoComplete="email"
                      className={`${inputBase} ${touched.email && errors.email ? "border-red-500" : ""}`}
                    />
                    {touched.email && errors.email && (
                      <span id="err-email" className={errorText}>
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="mt-4">
                    <label htmlFor="subject" className="sr-only">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject*"
                      value={formData.subject}
                      onChange={onChange("subject")}
                      onBlur={onBlur("subject")}
                      aria-invalid={!!(touched.subject && errors.subject)}
                      aria-describedby={touched.subject && errors.subject ? "err-subject" : undefined}
                      className={`${inputBase} ${touched.subject && errors.subject ? "border-red-500" : ""}`}
                    />
                    {touched.subject && errors.subject && (
                      <span id="err-subject" className={errorText}>
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div className="mt-4">
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message*"
                      rows={5}
                      value={formData.message}
                      onChange={onChange("message")}
                      onBlur={onBlur("message")}
                      onKeyDown={(e) => {
                        if ((e.metaKey || e.ctrlKey) && e.key === "Enter") handleSubmit(e as any);
                      }}
                      aria-invalid={!!(touched.message && errors.message)}
                      aria-describedby={touched.message && errors.message ? "err-message" : undefined}
                      className={`${inputBase} resize-none ${touched.message && errors.message ? "border-red-500" : ""}`}
                    />
                    {touched.message && errors.message && (
                      <span id="err-message" className={errorText}>
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={hasErrors && Object.values(touched).length > 0}
                    className="mt-6 w-full rounded-xl bg-orange-600 text-white py-3
                               text-sm sm:text-base lg:text-lg font-semibold
                               hover:bg-orange-700 disabled:opacity-60 disabled:hover:bg-orange-600"
                  >
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center" aria-live="polite">
                <h2 className="text-2xl font-bold">Thank you! 🎉</h2>
                <p className="mt-1 text-black/70">Your message window should be open in your email client.</p>
                <button
                  className="mt-6 inline-flex items-center justify-center gap-2 border-2 border-black px-4 py-2 rounded-xl font-bold hover:bg-black hover:text-white"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: "", email: "", subject: "", message: "" });
                    setTouched({});
                  }}
                >
                  Send another
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

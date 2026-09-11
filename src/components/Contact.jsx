import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import Reveal from "./Reveal";
import Magnetic from "./Magnetic";
import { profile } from "../data/content";

/**
 * Contact form. Ships as a zero-backend mailto composer so it works the
 * moment you deploy. To make it submit silently (no mail client popup),
 * swap the handleSubmit body for a POST to Formspree / Getform / your
 * own serverless function — the markup below needs no changes.
 *
 *   await fetch("https://formspree.io/f/yourFormId", {
 *     method: "POST",
 *     headers: { Accept: "application/json" },
 *     body: new FormData(e.target),
 *   });
 */
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad py-28 pb-40 md:py-36 md:pb-48">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="kicker">Get in touch</p>
            <h2 className="mt-4 font-serif text-fluid-h2 text-ink-50">
              Open to Cyber Security Engineering, SOC, GRC and secure SWE roles.
            </h2>
            <p className="mt-6 max-w-md text-fluid-body text-ink-300">
              Based in {profile.location}. Happy to talk about full-time roles, freelance
              projects, or just trade notes on threat modelling.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-col gap-3">
            <Magnetic
              as="a"
              href={`mailto:${profile.email}`}
              className="btn-primary w-fit"
            >
              <Mail size={17} />
              {profile.email}
            </Magnetic>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 text-ink-300 transition-colors hover:border-accent hover:text-accent"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 text-ink-300 transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.05}>
            <form onSubmit={handleSubmit} className="glass rounded-xl2 p-6 shadow-glass sm:p-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-400">
                    Name
                  </span>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    type="text"
                    name="name"
                    placeholder="Jane Doe"
                    className="min-h-[44px] w-full rounded-xl border border-ink-600 bg-ink-950/60 px-4 py-3 text-ink-50 outline-none transition-colors placeholder:text-ink-500 focus:border-accent"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-400">
                    Email
                  </span>
                  <input
                    required
                    value={form.email}
                    onChange={update("email")}
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    className="min-h-[44px] w-full rounded-xl border border-ink-600 bg-ink-950/60 px-4 py-3 text-ink-50 outline-none transition-colors placeholder:text-ink-500 focus:border-accent"
                  />
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-400">
                  Message
                </span>
                <textarea
                  required
                  value={form.message}
                  onChange={update("message")}
                  name="message"
                  rows={5}
                  placeholder="Tell me a little about the role or project…"
                  className="w-full resize-none rounded-xl border border-ink-600 bg-ink-950/60 px-4 py-3 text-ink-50 outline-none transition-colors placeholder:text-ink-500 focus:border-accent"
                />
              </label>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Magnetic as="button" type="submit" className="btn-primary">
                  Send message
                  <ArrowUpRight size={17} />
                </Magnetic>
                {sent && <span className="text-sm text-accent-soft">Opening your mail client…</span>}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

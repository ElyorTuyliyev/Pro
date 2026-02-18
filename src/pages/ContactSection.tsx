import { type FormEvent, useState } from "react";
import {
  Clock3,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageSquareText,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CONTACT_ACTIONS,
  CONTACT_CONTENT,
  CONTACT_EMAIL,
  CONTACT_EMAIL_LABEL,
} from "@/constants/portfolio";

type ContactSectionProps = {
  className: string;
};

type FormStatus = "idle" | "sending" | "sent" | "error";

const ContactSection = ({ className }: ContactSectionProps) => {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  const handleContactFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!telegramBotToken || !telegramChatId) {
      setFormStatus("error");
      return;
    }

    setFormStatus("sending");

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: `New portfolio message\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`,
          }),
        },
      );

      const result = (await response.json()) as {
        ok?: boolean;
        description?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.description || "Telegram request failed");
      }

      setFormStatus("sent");
      setFormData({ name: "", phone: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`scroll-mt-36 px-6 py-24 transition-all duration-700 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Contact
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">{CONTACT_CONTENT.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">{CONTACT_CONTENT.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Card className="rounded-3xl border-slate-700/70 bg-slate-900/55">
              <CardContent className="p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                  Quick Channels
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a href={CONTACT_EMAIL}>
                    <Button
                      size="sm"
                      className="w-full justify-start bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:brightness-110 hover:shadow-[0_14px_30px_-12px_rgba(56,189,248,0.95)]"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      {CONTACT_EMAIL_LABEL}
                    </Button>
                  </a>

                  {CONTACT_ACTIONS.map((action) => {
                    const icon =
                      action.id === "linkedin" ? (
                        <Linkedin className="mr-2 h-4 w-4" />
                      ) : action.id === "github" ? (
                        <Github className="mr-2 h-4 w-4" />
                      ) : action.id === "instagram" ? (
                        <Instagram className="mr-2 h-4 w-4" />
                      ) : (
                        <Phone className="mr-2 h-4 w-4" />
                      );

                    return (
                      <a
                        key={action.id}
                        href={action.href}
                        target={action.external ? "_blank" : undefined}
                        rel={action.external ? "noreferrer" : undefined}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full justify-start border-slate-600 bg-slate-900/70 text-white transition-all duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:border-cyan-300 hover:bg-cyan-400/10 hover:text-cyan-100 hover:shadow-[0_14px_30px_-14px_rgba(34,211,238,0.95)]"
                        >
                          {icon}
                          {action.label}
                        </Button>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-700/70 bg-slate-900/55">
              <CardContent className="space-y-4 p-7">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 text-cyan-200" />
                  <div>
                    <p className="font-semibold text-white">Fast response</p>
                    <p className="text-sm text-slate-400">Usually within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquareText className="mt-0.5 h-5 w-5 text-cyan-200" />
                  <div>
                    <p className="font-semibold text-white">Clear communication</p>
                    <p className="text-sm text-slate-400">
                      Regular updates and transparent process.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-cyan-200" />
                  <div>
                    <p className="font-semibold text-white">Quality first</p>
                    <p className="text-sm text-slate-400">
                      Maintainable code and thoughtful user experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-3xl border-slate-700/70 bg-slate-900/72 text-left">
            <CardContent className="p-8 sm:p-10">
              <h3 className="text-2xl font-semibold text-white">{CONTACT_CONTENT.quickMessageTitle}</h3>
              <p className="mt-2 text-slate-300">{CONTACT_CONTENT.quickMessageDescription}</p>

              <form className="mt-7 space-y-4" onSubmit={handleContactFormSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input
                    type="text"
                    required
                    placeholder={CONTACT_CONTENT.formNamePlaceholder}
                    value={formData.name}
                    onChange={(event) => {
                      setFormStatus("idle");
                      setFormData((prev) => ({ ...prev, name: event.target.value }));
                    }}
                    className="border-slate-600 bg-slate-900/80 text-white placeholder:text-slate-400 focus-visible:ring-cyan-400"
                  />
                  <Input
                    type="tel"
                    required
                    inputMode="numeric"
                    pattern="[0-9]+"
                    placeholder={CONTACT_CONTENT.formPhonePlaceholder}
                    value={formData.phone}
                    onChange={(event) => {
                      setFormStatus("idle");
                      const onlyDigits = event.target.value.replace(/\D/g, "");
                      setFormData((prev) => ({ ...prev, phone: onlyDigits }));
                    }}
                    className="border-slate-600 bg-slate-900/80 text-white placeholder:text-slate-400 focus-visible:ring-cyan-400"
                  />
                </div>

                <Textarea
                  required
                  placeholder={CONTACT_CONTENT.formMessagePlaceholder}
                  value={formData.message}
                  onChange={(event) => {
                    setFormStatus("idle");
                    setFormData((prev) => ({ ...prev, message: event.target.value }));
                  }}
                  className="min-h-36 border-slate-600 bg-slate-900/80 text-white placeholder:text-slate-400 focus-visible:ring-cyan-400"
                />

                <div className="space-y-3">
                  <Button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:brightness-110 sm:w-auto"
                  >
                    {formStatus === "sending"
                      ? CONTACT_CONTENT.sendingButtonLabel
                      : CONTACT_CONTENT.sendButtonLabel}
                  </Button>

                  <div className="min-h-5">
                    {formStatus === "sent" && (
                      <span className="break-words text-sm text-emerald-300">
                        {CONTACT_CONTENT.sentMessage}
                      </span>
                    )}
                    {formStatus === "error" && (
                      <span className="break-words text-sm text-rose-300">
                        {CONTACT_CONTENT.errorMessage}
                      </span>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


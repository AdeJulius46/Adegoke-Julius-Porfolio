"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, CircleAlert, Loader2, Send } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Honeypot tripped — pretend it worked, send nothing.
    if (data.company) {
      setStatus("success");
      reset();
      return;
    }

    if (!FORM_ID) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: data.fullname,
          email: data.email,
          message: data.message,
        }),
      });

      if (!res.ok) throw new Error("Formspree request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border-border bg-muted flex items-center gap-3 rounded-content-card border p-6 text-[length:var(--fs-6)]">
        <CheckCircle2 className="text-primary shrink-0" size={22} />
        <p className="text-white-2">
          Message sent — thanks for reaching out. I&apos;ll get back to you
          soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from sighted users, present for bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullname" className="sr-only">
            Full name
          </label>
          <input
            id="fullname"
            type="text"
            placeholder="Full name"
            className="border-border bg-transparent text-white-2 focus:border-primary w-full rounded-[14px] border px-5 py-3.5 text-[length:var(--fs-6)] font-medium placeholder:font-medium placeholder:text-light-gray-70 outline-none transition-colors"
            {...register("fullname")}
          />
          {errors.fullname && (
            <p className="text-bittersweet-shimmer mt-1.5 text-[length:var(--fs-8)]">
              {errors.fullname.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email address"
            className="border-border bg-transparent text-white-2 focus:border-primary w-full rounded-[14px] border px-5 py-3.5 text-[length:var(--fs-6)] font-medium placeholder:font-medium placeholder:text-light-gray-70 outline-none transition-colors"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-bittersweet-shimmer mt-1.5 text-[length:var(--fs-8)]">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Your message
        </label>
        <textarea
          id="message"
          placeholder="Your message"
          rows={5}
          className="border-border bg-transparent text-white-2 focus:border-primary w-full resize-y rounded-[14px] border px-5 py-3.5 text-[length:var(--fs-6)] font-medium placeholder:font-medium placeholder:text-light-gray-70 outline-none transition-colors"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-bittersweet-shimmer mt-1.5 text-[length:var(--fs-8)]">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="border-bittersweet-shimmer/40 bg-bittersweet-shimmer/10 flex items-center gap-2.5 rounded-[14px] border px-4 py-3 text-[length:var(--fs-7)]">
          <CircleAlert className="text-bittersweet-shimmer shrink-0" size={17} />
          <span className="text-light-gray">
            {FORM_ID
              ? "Something went wrong sending your message — please try again, or email me directly."
              : "The contact form isn't fully configured yet — please email me directly for now."}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-primary text-primary-foreground flex w-full items-center justify-center gap-2 rounded-[14px] px-5 py-3.5 text-[length:var(--fs-6)] font-medium transition-opacity disabled:cursor-not-allowed disabled:opacity-70 sm:w-max"
      >
        {status === "submitting" ? (
          <Loader2 className="animate-spin" size={17} />
        ) : (
          <Send size={17} />
        )}
        Send message
      </button>
    </form>
  );
}

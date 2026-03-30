"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

interface Props {
  placeholder: string;
  submit: string;
  submitting: string;
  successMsg: string;
  errorMsg: string;
}

export default function NewsletterForm({ placeholder, submit, submitting, successMsg, errorMsg }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "loading") return;
    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        "template_ircblvw",
        { email },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-sm text-green-400 text-center py-2">{successMsg}</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        disabled={status === "loading"}
        className="flex-1 min-w-0 rounded-full border border-zinc-700 bg-zinc-800 px-5 py-3 text-sm text-zinc-100 placeholder-zinc-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:opacity-50 transition-colors duration-150"
      />
      <button
        type="submit"
        disabled={!email.trim() || status === "loading"}
        className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-primary-400 disabled:opacity-40 transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        {status === "loading" ? submitting : submit}
      </button>
      {status === "error" && (
        <p className="text-xs text-red-400 text-center w-full">{errorMsg}</p>
      )}
    </form>
  );
}

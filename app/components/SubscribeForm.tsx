"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "../context/LanguageContext";
import { t } from "../i18n/translations";

type FormState = "idle" | "submitting" | "success" | "error";

export default function SubscribeForm() {
  const { lang } = useLang();
  const tr = t[lang].form;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    goal: "",
    experience: "",
    agreed: false,
  });
  const [state, setState] = useState<FormState>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          first_name: form.firstName,
          last_name: form.lastName,
          full_name: `${form.firstName} ${form.lastName}`,
          time: new Date().toLocaleDateString(),
          email: form.email,
          phone: form.phone || "—",
          program: form.program,
          experience: form.experience || "—",
          goal: form.goal,
          to_email: "johntran@tontonfrancky.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setState("success");
    } catch {
      setState("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2.5 text-zinc-100 placeholder-zinc-500 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-colors duration-200";

  if (state === "success") {
    return (
      <div className="text-center py-12 px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 mb-4">
          <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-zinc-100 mb-2">{tr.successTitle}</h3>
        <p className="text-zinc-400">
          {tr.successMsg.replace("{name}", form.firstName)}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {state === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {tr.errorMsg}
        </div>
      )}

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="firstName">
            {tr.firstName} <span className="text-amber-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={form.firstName}
            onChange={handleChange}
            placeholder="Alex"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="lastName">
            {tr.lastName} <span className="text-amber-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={form.lastName}
            onChange={handleChange}
            placeholder="Johnson"
            className={inputClass}
          />
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="email">
            {tr.email} <span className="text-amber-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="alex@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="phone">
            {tr.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 555 000 0000"
            className={inputClass}
          />
        </div>
      </div>

      {/* Program */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="program">
          {tr.program} <span className="text-amber-500">*</span>
        </label>
        <select
          id="program"
          name="program"
          required
          value={form.program}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>{tr.programPlaceholder}</option>
          {tr.programs.map((p) => (
            <option key={p.id} value={p.id}>{p.label}</option>
          ))}
        </select>
      </div>

      {/* Experience */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="experience">
          {tr.experience}
        </label>
        <select
          id="experience"
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className={inputClass}
        >
          {tr.experienceOptions.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* Goal */}
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1" htmlFor="goal">
          {tr.goal} <span className="text-amber-500">*</span>
        </label>
        <textarea
          id="goal"
          name="goal"
          required
          rows={3}
          value={form.goal}
          onChange={handleChange}
          placeholder={tr.goalPlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="agreed"
          name="agreed"
          type="checkbox"
          required
          checked={form.agreed}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-amber-500 focus:ring-amber-500"
        />
        <label htmlFor="agreed" className="text-sm text-zinc-400">
          {tr.consent}{" "}
          <span className="text-amber-500 underline cursor-pointer">{tr.consentLink}</span>.
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-lg bg-amber-500 px-6 py-3.5 text-base font-semibold text-zinc-950 shadow-sm hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 disabled:opacity-60 transition-colors duration-200"
      >
        {state === "submitting" ? tr.submitting : tr.submit}
      </button>

      <p className="text-center text-xs text-zinc-500">{tr.note}</p>
    </form>
  );
}

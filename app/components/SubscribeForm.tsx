"use client";

import { useState } from "react";

const PROGRAMS = [
  { id: "mindset", label: "Mindset Reset (4 weeks)" },
  { id: "body", label: "Body & Energy (8 weeks)" },
  { id: "lifestyle", label: "Full Lifestyle Transformation (12 weeks)" },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function SubscribeForm() {
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    // Simulate async submission
    setTimeout(() => setState("success"), 1200);
  }

  if (state === "success") {
    return (
      <div className="text-center py-12 px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-2">You&apos;re in!</h3>
        <p className="text-stone-600">
          Thanks {form.firstName} — John will reach out within 48 hours to schedule your free discovery call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="firstName">
            First name <span className="text-amber-600">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
            placeholder="Alex"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="lastName">
            Last name <span className="text-amber-600">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={handleChange}
            placeholder="Johnson"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition"
          />
        </div>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="email">
            Email <span className="text-amber-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="alex@example.com"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 555 000 0000"
            className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition"
          />
        </div>
      </div>

      {/* Program */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="program">
          Program <span className="text-amber-600">*</span>
        </label>
        <select
          id="program"
          name="program"
          required
          value={form.program}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition bg-white"
        >
          <option value="" disabled>Select a program…</option>
          {PROGRAMS.map((p) => (
            <option key={p.id} value={p.id}>{p.label}</option>
          ))}
        </select>
      </div>

      {/* Experience */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="experience">
          Coaching experience
        </label>
        <select
          id="experience"
          name="experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition bg-white"
        >
          <option value="">Prefer not to say</option>
          <option value="none">No prior coaching experience</option>
          <option value="some">Tried it once or twice</option>
          <option value="regular">Regular coaching client</option>
        </select>
      </div>

      {/* Goal */}
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="goal">
          What&apos;s your #1 goal? <span className="text-amber-600">*</span>
        </label>
        <textarea
          id="goal"
          name="goal"
          required
          rows={3}
          value={form.goal}
          onChange={handleChange}
          placeholder="Tell John what you want to achieve in the next 3 months…"
          className="w-full rounded-lg border border-stone-300 px-4 py-2.5 text-stone-900 placeholder-stone-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition resize-none"
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
          className="mt-1 h-4 w-4 rounded border-stone-300 text-amber-600 focus:ring-amber-500"
        />
        <label htmlFor="agreed" className="text-sm text-stone-600">
          I agree to be contacted by John Tran Coaching and accept the{" "}
          <span className="text-amber-700 underline cursor-pointer">privacy policy</span>.
        </label>
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full rounded-lg bg-amber-600 px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:opacity-60 transition"
      >
        {state === "submitting" ? "Sending…" : "Apply for a free discovery call"}
      </button>

      <p className="text-center text-xs text-stone-400">
        No commitment. No spam. John reads every application personally.
      </p>
    </form>
  );
}

"use client";

import Image from "next/image";
import SubscribeForm from "./components/SubscribeForm";
import { useLang } from "./context/LanguageContext";
import { t } from "./i18n/translations";

function LanguagePicker() {
  const { lang, setLang } = useLang();
  return (
    <div
      aria-label="Language"
      className="flex items-center gap-1 rounded-full border border-zinc-700 p-0.5 text-xs font-semibold"
    >
      <button
        type="button"
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
        className={`px-3 py-2 rounded-full transition-colors duration-200 min-w-[40px] ${
          lang === "en"
            ? "bg-amber-500 text-zinc-950"
            : "text-zinc-400 hover:text-zinc-100"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        aria-pressed={lang === "vn"}
        onClick={() => setLang("vn")}
        className={`px-3 py-2 rounded-full transition-colors duration-200 min-w-[40px] ${
          lang === "vn"
            ? "bg-amber-500 text-zinc-950"
            : "text-zinc-400 hover:text-zinc-100"
        }`}
      >
        VN
      </button>
    </div>
  );
}

export default function Home() {
  const { lang } = useLang();
  const tr = t[lang];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-20 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-800">
        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-5xl px-6 flex items-center justify-between h-14"
        >
          <span className="font-bold tracking-tight text-zinc-100 whitespace-nowrap min-w-0 truncate">
            {tr.nav.brand}{" "}
            <span className="text-amber-500">{tr.nav.brandAccent}</span>
          </span>
          <div className="flex items-center gap-3 shrink-0 ml-4">
            <LanguagePicker />
            <a
              href="#apply"
              className="rounded-full bg-amber-500 px-4 py-1.5 text-sm font-semibold text-zinc-950 hover:bg-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 whitespace-nowrap"
            >
              {tr.nav.apply}
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/john_bw.jpg"
              alt="John Tran — lifestyle coach"
              fill
              className="object-cover object-[center_15%]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/75 to-zinc-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 py-16 sm:py-24 w-full">
            <div className="max-w-xl">
              <p className="inline-block mb-5 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-400">
                {tr.hero.tag}
              </p>
              <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                {tr.hero.heading1}
                <br />
                <span className="text-amber-400">{tr.hero.heading2}</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-10 leading-relaxed max-w-md">
                {tr.hero.sub}
              </p>
              <a
                href="#apply"
                className="inline-block rounded-full bg-amber-500 px-8 py-4 text-base font-semibold text-zinc-950 shadow-lg shadow-amber-500/20 hover:bg-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {tr.hero.cta}
              </a>
              <p className="mt-4 text-sm text-zinc-500">{tr.hero.note}</p>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="bg-zinc-900 border-y border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/john-tran.jpg"
                alt="John Tran, lifestyle coach"
                fill
                loading="lazy"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-3">
                {tr.about.eyebrow}
              </p>
              <h2 className="text-3xl font-bold text-zinc-100 mb-4">
                {tr.about.heading}
              </h2>
              <p className="text-zinc-400 mb-4 leading-relaxed">{tr.about.p1}</p>
              <p className="text-zinc-400 mb-6 leading-relaxed">{tr.about.p2}</p>
              <ul className="space-y-2 text-sm text-zinc-300">
                {tr.about.certs.map((cert) => (
                  <li key={cert} className="flex items-center gap-2">
                    <span className="text-amber-500" aria-hidden="true">✓</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Programs ── */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-2">
              {tr.programs.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-zinc-100">
              {tr.programs.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tr.programs.items.map((s) => {
              const highlighted = "highlight" in s && s.highlight;
              return (
                <div
                  key={s.title}
                  className={`rounded-2xl p-8 border transition-colors duration-200 ${
                    highlighted
                      ? "bg-amber-500 border-amber-500 shadow-xl shadow-amber-500/20"
                      : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <div className="text-3xl mb-4" aria-hidden="true">{s.icon}</div>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${highlighted ? "text-zinc-800" : "text-amber-500"}`}>
                    {s.duration}
                  </p>
                  <h3 className={`text-xl font-bold mb-3 ${highlighted ? "text-zinc-950" : "text-zinc-100"}`}>
                    {s.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${highlighted ? "text-zinc-800" : "text-zinc-400"}`}>
                    {s.description}
                  </p>
                  {highlighted && (
                    <span className="inline-block mt-4 rounded-full bg-zinc-950/20 px-3 py-1 text-xs font-medium text-zinc-900">
                      {tr.programs.mostPopular}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-zinc-900 border-y border-zinc-800">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-amber-500 mb-12">
              {tr.testimonials.eyebrow}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tr.testimonials.items.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-2xl bg-zinc-950 p-8 border border-zinc-800"
                >
                  <blockquote>
                    <p className="text-zinc-400 italic mb-6 leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </blockquote>
                  <figcaption>
                    <p className="font-semibold text-zinc-100">{item.name}</p>
                    <p className="text-sm text-zinc-500">{item.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── Application form ── */}
        <section id="apply" className="mx-auto max-w-2xl px-6 py-24 scroll-mt-16">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-2">
              {tr.apply.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-zinc-100 mb-3">
              {tr.apply.heading}
            </h2>
            <p className="text-zinc-400">{tr.apply.sub}</p>
          </div>
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-xl p-8 sm:p-10">
            <SubscribeForm />
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-zinc-800 bg-zinc-900">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <span>
            © {new Date().getFullYear()} John Tran Coaching. {tr.footer.rights}
          </span>
          <span>{tr.footer.made}</span>
        </div>
      </footer>
    </div>
  );
}

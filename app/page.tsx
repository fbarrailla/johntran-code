"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SubscribeForm from "./components/SubscribeForm";
import { useLang } from "./context/LanguageContext";
import { t } from "./i18n/translations";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/johntran_hp/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/john.tran68/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@johntran.hp",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://vn.linkedin.com/in/john-tran-6162a2393",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function parseStatValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function CountUp({ value }: { value: string }) {
  const { num, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1200;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * num));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [num]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-zinc-500 hover:text-blue-500 transition-colors duration-200"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

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
            ? "bg-blue-500 text-zinc-950"
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
            ? "bg-blue-500 text-zinc-950"
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reducedMotion.current) return;
    const hero = heroRef.current;
    if (!hero) return;

    const onScroll = () => {
      const { top, height } = hero.getBoundingClientRect();
      // Only animate while the hero is visible
      if (top < height && top > -height) {
        // Shift background at 40% of scroll speed
        setParallaxY(-top * 0.4);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-20 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800">
        <nav
          aria-label="Main navigation"
          className="mx-auto max-w-5xl px-6 flex items-center justify-between h-14"
        >
          <span className="font-bold tracking-tight text-zinc-100 whitespace-nowrap min-w-0 truncate">
            {tr.nav.brand}{" "}
            <span className="text-blue-500">{tr.nav.brandAccent}</span>
          </span>

          {/* Desktop right side */}
          <div className="hidden sm:flex items-center gap-3 shrink-0 ml-4">
            <SocialLinks />
            <LanguagePicker />
            <a
              href="#apply"
              className="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-semibold text-zinc-950 hover:bg-blue-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 whitespace-nowrap"
            >
              {tr.nav.apply}
            </a>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 shrink-0 ml-4 rounded-lg hover:bg-zinc-800 transition-colors duration-200"
          >
            <span className={`block w-5 h-0.5 bg-zinc-300 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-zinc-300 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-zinc-300 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* Mobile menu panel */}
        {menuOpen && (
          <div className="sm:hidden border-t border-zinc-800 bg-zinc-950/95 px-6 py-5 flex flex-col gap-5">
            <SocialLinks className="justify-center gap-6 [&_svg]:w-5 [&_svg]:h-5" />
            <div className="flex items-center justify-between">
              <LanguagePicker />
              <a
                href="#apply"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-zinc-950 hover:bg-blue-400 transition-colors duration-200"
              >
                {tr.nav.apply}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* ── Hero ── */}
        <section ref={heroRef} className="relative min-h-[92vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              transform: `scale(1.15) translateY(${parallaxY}px)`,
              willChange: "transform",
            }}
          >
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
              <p className="inline-block mb-5 rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-400">
                {tr.hero.tag}
              </p>
              <h1 className="text-5xl sm:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
                {tr.hero.heading1}
                <br />
                <span className="text-blue-400">{tr.hero.heading2}</span>
              </h1>
              <p className="text-lg text-zinc-300 mb-10 leading-relaxed max-w-md">
                {tr.hero.sub}
              </p>
              <a
                href="#apply"
                className="inline-block rounded-full bg-blue-500 px-8 py-4 text-base font-semibold text-zinc-950 shadow-lg shadow-blue-500/20 hover:bg-blue-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
              >
                {tr.hero.cta}
              </a>
              <p className="mt-4 text-sm text-zinc-500">{tr.hero.note}</p>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-b border-zinc-800 bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(59,130,246,0.1),transparent)] pointer-events-none" />
          <div className="relative mx-auto max-w-5xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-zinc-800/60">
            {tr.stats.map((stat) => (
              <div key={stat.label} className="px-4 first:pl-0 last:pr-0">
                <p className="text-3xl font-extrabold text-blue-400 tracking-tight"><CountUp value={stat.value} /></p>
                <p className="mt-1 text-sm text-zinc-400">{stat.label}</p>
              </div>
            ))}
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
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-3">
                {tr.about.eyebrow}
              </p>
              <h2 className="text-3xl font-bold text-zinc-100 mb-4">
                {tr.about.heading}
              </h2>
              <p className="text-zinc-400 mb-4 leading-relaxed">{tr.about.p1}</p>
              <p className="text-zinc-400 mb-6 leading-relaxed">{tr.about.p2}</p>
              <ul className="space-y-3 text-sm text-zinc-300">
                {tr.about.certs.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/15 ring-1 ring-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold" aria-hidden="true">✓</span>
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
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
              {tr.programs.eyebrow}
            </p>
            <h2 className="text-3xl font-bold text-zinc-100">
              {tr.programs.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tr.programs.items.map((s, i) => {
              const highlighted = "highlight" in s && s.highlight;
              const iconTheme = highlighted
                ? "bg-white/20"
                : (["bg-violet-500/15 ring-1 ring-violet-500/25", "bg-sky-500/15 ring-1 ring-sky-500/25", "bg-emerald-500/15 ring-1 ring-emerald-500/25"] as const)[i] ?? "bg-zinc-800";
              return (
                <div
                  key={s.title}
                  className={`rounded-2xl p-8 border transition-colors duration-200 ${
                    highlighted
                      ? "bg-blue-500 border-blue-500 shadow-xl shadow-blue-500/20"
                      : "bg-zinc-900 border-zinc-800 hover:border-zinc-600"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-5 ${iconTheme}`} aria-hidden="true">{s.icon}</div>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${highlighted ? "text-zinc-800" : "text-blue-500"}`}>
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
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-blue-500 mb-12">
              {tr.testimonials.eyebrow}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tr.testimonials.items.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-2xl bg-zinc-950 p-8 border border-zinc-800 border-t-2 border-t-blue-500/50 flex flex-col"
                >
                  <svg className="w-8 h-8 text-blue-500/40 mb-4 flex-shrink-0" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <blockquote className="flex-1">
                    <p className="text-zinc-400 italic mb-6 leading-relaxed">
                      {item.quote}
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
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-2">
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
          <SocialLinks />
          <span>
            {tr.footer.made}{" "}
            <a
              href={tr.footer.madeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-500 transition-colors duration-200"
            >
              {tr.footer.madeAuthor}
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";

// ── Change this to your desired secret code (case-insensitive) ──
const SECRET_CODE = "JOHNTRAN";

// ── Ebook downloads list ──
const EBOOKS = [
  {
    id: 1,
    title: "Design Your Life Blueprint",
    subtitle: "The complete guide to building sustainable habits",
    pages: "87 pages",
    format: "PDF",
    href: "/ebooks/design-your-life-blueprint.pdf",
  },
  {
    id: 2,
    title: "The Quiet Luxury Mindset",
    subtitle: "Confidence, style & the art of effortless presence",
    pages: "64 pages",
    format: "PDF",
    href: "/ebooks/quiet-luxury-mindset.pdf",
  },
  {
    id: 3,
    title: "Peak Performance Protocol",
    subtitle: "John's personal health & performance system",
    pages: "112 pages",
    format: "PDF",
    href: "/ebooks/peak-performance-protocol.pdf",
  },
];

export default function TelechargerPage() {
  const [typed, setTyped] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [shake, setShake] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerShake = useCallback(() => {
    setShake(true);
    setTimeout(() => setShake(false), 600);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (unlocked) return;
      // Only process printable single characters
      if (e.key.length !== 1) return;

      const next = (typed + e.key).toUpperCase();
      const target = SECRET_CODE.toUpperCase();

      // Reset any pending idle timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (target.startsWith(next)) {
        setTyped(next);
        if (next === target) {
          setUnlocked(true);
          setJustUnlocked(true);
          setTimeout(() => setJustUnlocked(false), 1200);
        } else {
          // Auto-reset after 3 s of inactivity
          timeoutRef.current = setTimeout(() => setTyped(""), 3000);
        }
      } else {
        // Wrong key — reset
        triggerShake();
        setTyped("");
      }
    },
    [typed, unlocked, triggerShake]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const progress = Math.round((typed.length / SECRET_CODE.length) * 100);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgb(var(--glow-rgb) / 0.07) 0%, transparent 70%)",
        }}
      />

      {/* Back link */}
      <Link
        href="/"
        className="fixed top-6 left-6 text-sm text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-1.5 group"
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        Retour
      </Link>

      {/* ── LOCKED STATE ── */}
      {!unlocked && (
        <div
          className={`flex flex-col items-center gap-8 max-w-md w-full text-center transition-transform ${
            shake ? "animate-[shake_0.4s_ease-in-out]" : ""
          }`}
        >
          {/* Lock icon */}
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgb(var(--glow-rgb) / 0.08)",
              border: "1px solid rgb(var(--glow-rgb) / 0.18)",
            }}
          >
            <svg
              className="w-9 h-9"
              style={{ color: "var(--p-400)" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
              Contenu exclusif
            </h1>
            <p className="text-zinc-400 text-base leading-relaxed">
              Tape le code secret sur ton clavier pour accéder aux
              téléchargements.
            </p>
            <p className="text-zinc-600 text-sm">
              Aucun champ à remplir — tape simplement.
            </p>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-3">
            {Array.from({ length: SECRET_CODE.length }).map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full transition-all duration-200"
                style={{
                  background:
                    i < typed.length
                      ? "var(--p-400)"
                      : "rgb(var(--glow-rgb) / 0.15)",
                  transform: i < typed.length ? "scale(1.2)" : "scale(1)",
                  boxShadow:
                    i < typed.length
                      ? "0 0 8px rgb(var(--glow-rgb) / 0.6)"
                      : "none",
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          {typed.length > 0 && (
            <div className="w-full max-w-xs">
              <div className="h-0.5 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                    background: "var(--p-500)",
                  }}
                />
              </div>
            </div>
          )}

          {/* Hint */}
          <p
            className="text-xs px-4 py-2 rounded-lg"
            style={{
              color: "var(--p-600)",
              background: "rgb(var(--glow-rgb) / 0.05)",
              border: "1px solid rgb(var(--glow-rgb) / 0.1)",
            }}
          >
            Tu as reçu le code dans le programme de John.
          </p>
        </div>
      )}

      {/* ── UNLOCKED STATE ── */}
      {unlocked && (
        <div
          className={`flex flex-col items-center gap-10 max-w-2xl w-full transition-all duration-700 ${
            justUnlocked ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {/* Unlock banner */}
          <div className="flex flex-col items-center gap-3 text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-1"
              style={{
                background: "rgb(var(--glow-rgb) / 0.12)",
                border: "1px solid rgb(var(--glow-rgb) / 0.25)",
                boxShadow: "0 0 40px rgb(var(--glow-rgb) / 0.15)",
              }}
            >
              <svg
                className="w-8 h-8"
                style={{ color: "var(--p-400)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100">
              Accès accordé
            </h1>
            <p className="text-zinc-400">
              Voici tes ressources exclusives, réservées aux membres du
              programme.
            </p>
          </div>

          {/* Ebooks grid */}
          <div className="w-full grid gap-4">
            {EBOOKS.map((book) => (
              <a
                key={book.id}
                href={book.href}
                download
                className="group flex items-center gap-5 p-5 rounded-2xl transition-all duration-200 hover:scale-[1.015]"
                style={{
                  background: "rgb(var(--glow-rgb) / 0.04)",
                  border: "1px solid rgb(var(--glow-rgb) / 0.12)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgb(var(--glow-rgb) / 0.08)";
                  e.currentTarget.style.borderColor =
                    "rgb(var(--glow-rgb) / 0.25)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgb(var(--glow-rgb) / 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "rgb(var(--glow-rgb) / 0.04)";
                  e.currentTarget.style.borderColor =
                    "rgb(var(--glow-rgb) / 0.12)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgb(var(--glow-rgb) / 0.08)",
                    border: "1px solid rgb(var(--glow-rgb) / 0.15)",
                  }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--p-400)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-zinc-100 truncate">
                    {book.title}
                  </p>
                  <p className="text-sm text-zinc-400 mt-0.5 truncate">
                    {book.subtitle}
                  </p>
                  <p className="text-xs text-zinc-600 mt-1">
                    {book.format} · {book.pages}
                  </p>
                </div>

                {/* Download arrow */}
                <div
                  className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-transform group-hover:translate-y-0.5"
                  style={{ color: "var(--p-500)" }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-xs text-zinc-600 text-center">
            Ces fichiers sont réservés aux membres. Merci de ne pas les
            partager.
          </p>
        </div>
      )}

      {/* Shake keyframe */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
      `}</style>
    </main>
  );
}

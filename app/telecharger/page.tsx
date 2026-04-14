"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";

// SHA-256 hashes of each prefix of the secret code (all uppercase).
// The plaintext is never stored — only these hashes ship in the bundle.
const CODE_LENGTH = 8;
const CODE_PREFIX_HASHES = [
  "6da43b944e494e885e69af021f93c6d9331c78aa228084711429160a5bbd15b5",
  "80ade79ae79c576675cf28b4c0254238059661a67c8a3585aa7e2562b8ec4cdc",
  "83f6612376490a64d81ab316ff46332310f74efc321dd11b4789b11b52be7c61",
  "4ead13b3b5c9e15bd3f1172f3a0cb83f68d9b7dab1bd2d5895c7f395bc4c840c",
  "6edd3611f66d753107391889d3dec102d5600b814a4a178dd709acd22daeaefb",
  "f38294b41a46830bbc8d64393ebe203a59b3d821a641223414e20c8fdf2243e5",
  "6f18e9e0e81a54240a8b3b1940ece327c95af0dc99fd0efa13668dbb156f0330",
  "6bf4f6ef253aae4e388ae1a5becb108bff29ba4fd608eedfe6568cccfdc17c9d",
];

async function sha256hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text)
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// ── Ebook downloads list ──
const EBOOKS = [
  {
    id: 1,
    title: "John Tran Code",
    subtitle: "Version française",
    lang: "FR",
    format: "PDF",
    href: "/John-Tran-Code.pdf",
  },
  {
    id: 2,
    title: "John Tran Code",
    subtitle: "Phiên bản tiếng Việt",
    lang: "VI",
    format: "PDF",
    href: "/John-Tran-Code_translated.pdf",
  },
];

export default function TelechargerPage() {
  const [typed, setTyped] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [shake, setShake] = useState(false);
  const [justUnlocked, setJustUnlocked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
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

      // Reset any pending idle timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      // Reject immediately if longer than the code
      if (next.length > CODE_LENGTH) {
        triggerShake();
        setTyped("");
        return;
      }

      sha256hex(next).then((hash) => {
        if (hash === CODE_PREFIX_HASHES[next.length - 1]) {
          setTyped(next);
          if (next.length === CODE_LENGTH) {
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
      });
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

  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === "visible" && sessionStorage.getItem("paypal_pending")) {
        sessionStorage.removeItem("paypal_pending");
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 6000);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  const openPaypal = () => {
    sessionStorage.setItem("paypal_pending", "1");
    window.open("https://www.paypal.com/ncp/payment/NKZKYJJBB5AGG", "_blank", "noopener,noreferrer");
  };

  const progress = Math.round((typed.length / CODE_LENGTH) * 100);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* ── Success notification ── */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-2xl shadow-xl transition-all duration-500 ${
          showSuccess ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "rgb(var(--glow-rgb) / 0.12)",
          border: "1px solid rgb(var(--glow-rgb) / 0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        <svg className="w-5 h-5 shrink-0" style={{ color: "var(--p-400)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm font-medium text-zinc-100 whitespace-nowrap">
          Paiement reçu — un email vous a été envoyé.
        </p>
      </div>

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
            {Array.from({ length: CODE_LENGTH }).map((_, i) => (
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

          {/* CTA PayPal — visible only while typing */}
          {(
            <button
              type="button"
              onClick={openPaypal}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
              style={{
                background: "rgb(var(--glow-rgb) / 0.1)",
                border: "1px solid rgb(var(--glow-rgb) / 0.3)",
                color: "var(--p-400)",
              }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
              </svg>
              Récupérer le code
            </button>
          )}
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
                    {book.format} · {book.lang}
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

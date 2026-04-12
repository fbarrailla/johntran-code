import Link from "next/link";

export default function TelechargerPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center px-6">
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

      <p className="text-zinc-400 text-lg">
        Maintenance in progress. Come back later.
      </p>
    </main>
  );
}

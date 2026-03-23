import Image from "next/image";
import SubscribeForm from "./components/SubscribeForm";

const services = [
  {
    icon: "🧠",
    title: "Mindset Reset",
    duration: "4 weeks",
    description:
      "Break limiting beliefs, rewire thought patterns, and build the mental foundation every lasting change starts from.",
  },
  {
    icon: "⚡",
    title: "Body & Energy",
    duration: "8 weeks",
    description:
      "A holistic approach to nutrition, movement, and recovery designed around your real life — no extreme diets, no 5 AM torture.",
  },
  {
    icon: "🌿",
    title: "Full Lifestyle Transformation",
    duration: "12 weeks",
    description:
      "The complete program: mindset, body, habits, relationships, and purpose — guided 1-on-1 by John every step of the way.",
    highlight: true,
  },
];

const testimonials = [
  {
    quote:
      "Three months with John completely changed how I show up — at work, at home, and in the mirror.",
    name: "Sarah M.",
    role: "Entrepreneur",
  },
  {
    quote:
      "I'd tried everything before. John was the first coach who actually listened and built a plan around my life.",
    name: "Marcus T.",
    role: "Father of two & remote engineer",
  },
  {
    quote:
      "Within 6 weeks I had more energy, less anxiety, and a morning routine I actually stick to.",
    name: "Léa B.",
    role: "Creative director",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-20 bg-stone-50/80 backdrop-blur border-b border-stone-200">
        <div className="mx-auto max-w-5xl px-6 flex items-center justify-between h-14">
          <span className="font-bold tracking-tight text-stone-900">
            John Tran <span className="text-amber-600">Code</span>
          </span>
          <a
            href="#apply"
            className="rounded-full bg-amber-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-amber-700 transition"
          >
            Apply now
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
          <p className="inline-block mb-4 rounded-full bg-amber-100 px-4 py-1 text-sm font-medium text-amber-700">
            Lifestyle · Mindset · Performance
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-stone-900 mb-6">
            Design the life <br className="hidden sm:block" />
            you actually want.
          </h1>
          <p className="max-w-xl mx-auto text-lg text-stone-600 mb-10">
            John Tran is a certified lifestyle coach helping driven people
            build sustainable habits, unshakeable confidence, and a life that
            feels as good as it looks.
          </p>
          <a
            href="#apply"
            className="inline-block rounded-full bg-amber-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-amber-700 transition"
          >
            Start your free discovery call
          </a>
          <p className="mt-4 text-sm text-stone-400">
            100% free · No strings attached
          </p>
        </section>

        {/* ── About ── */}
        <section className="bg-white border-y border-stone-200">
          <div className="mx-auto max-w-5xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden relative" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/john-tran.jpg"
                alt="John Tran, lifestyle coach"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3">
                About John
              </p>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">
                Coaching from lived experience, not a textbook.
              </h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
                After burning out at 28, losing 20 kg, and rebuilding his life
                from the ground up, John became obsessed with one question:{" "}
                <em>what actually makes change stick?</em>
              </p>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Over the past 6 years he&apos;s worked with 200+ clients across four
                continents — from stressed-out founders to new parents to
                elite athletes in transition. His approach blends
                neuroscience-backed habit design, somatic awareness, and
                radical honesty.
              </p>
              <ul className="space-y-2 text-sm text-stone-700">
                {[
                  "Certified Life & Performance Coach (ICF)",
                  "Precision Nutrition Level 2",
                  "Mindfulness-Based Stress Reduction (MBSR)",
                ].map((cert) => (
                  <li key={cert} className="flex items-center gap-2">
                    <span className="text-amber-500">✓</span> {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Programs ── */}
        <section className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-2">
              Programs
            </p>
            <h2 className="text-3xl font-bold text-stone-900">
              Choose your path
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className={`rounded-2xl p-8 border transition ${
                  s.highlight
                    ? "bg-amber-600 text-white border-amber-600 shadow-xl"
                    : "bg-white border-stone-200 hover:shadow-md"
                }`}
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <p
                  className={`text-xs font-semibold uppercase tracking-widest mb-1 ${
                    s.highlight ? "text-amber-200" : "text-amber-600"
                  }`}
                >
                  {s.duration}
                </p>
                <h3
                  className={`text-xl font-bold mb-3 ${
                    s.highlight ? "text-white" : "text-stone-900"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    s.highlight ? "text-amber-100" : "text-stone-600"
                  }`}
                >
                  {s.description}
                </p>
                {s.highlight && (
                  <span className="inline-block mt-4 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="bg-stone-900">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-amber-400 mb-12">
              Client stories
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl bg-stone-800 p-8 border border-stone-700"
                >
                  <p className="text-stone-300 italic mb-6 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-stone-500">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Application form ── */}
        <section id="apply" className="mx-auto max-w-2xl px-6 py-24">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-2">
              Apply
            </p>
            <h2 className="text-3xl font-bold text-stone-900 mb-3">
              Ready to start?
            </h2>
            <p className="text-stone-600">
              Fill in the form below. John personally reviews every application
              and will reach out within 48 hours to schedule a free 30-minute
              discovery call.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-8 sm:p-10">
            <SubscribeForm />
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-400">
          <span>© {new Date().getFullYear()} John Tran Coaching. All rights reserved.</span>
          <span>Made with intention.</span>
        </div>
      </footer>
    </div>
  );
}

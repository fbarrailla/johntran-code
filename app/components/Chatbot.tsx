"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

type Step = "mood" | "name" | "email" | "goal" | "commitment" | "investment" | "phone" | "done";

interface Message {
  from: "bot" | "user";
  text: string;
}

const STEP_ORDER: Step[] = ["mood", "name", "email", "goal", "commitment", "investment", "phone", "done"];

const BOT_PROMPTS: Record<Step, string> = {
  mood:       "Hi, how are you doing? 👋",
  name:       "What is your name?",
  email:      "Please give me your email.",
  goal:       "What's your main goal right now?",
  commitment: "What's your commitment level?",
  investment: "How much can you invest in yourself each month?",
  phone:      "How should John reach you? Please give me your phone number.",
  done:       "Thanks for your information, I will contact you in the next 48h. Have a good day! 🙏",
};

// Typing delay in ms before each bot message
const TYPING_DELAY: Record<Step, number> = {
  mood:       2900,
  name:       2800,
  email:      2750,
  goal:       2850,
  commitment: 2800,
  investment: 2950,
  phone:      3000,
  done:       3200,
};

// Short acknowledgment delay before the "Thanks" message
const THANKS_DELAY = 800;

// Acknowledgment messages — vary by step index for a natural feel
const THANKS: Record<Step, string> = {
  mood:       "Glad to hear that! 😊",
  name:       "Nice to meet you!",
  email:      "Got it, thanks!",
  goal:       "That's a great goal!",
  commitment: "Love that energy! 💪",
  investment: "Perfect, thank you!",
  phone:      "Thanks for sharing!",
  done:       "",
};

const COMMITMENT_OPTIONS = ["Exploring", "Ready to start", "Fully committed"];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [step, setStep] = useState<Step>("mood");
  const [input, setInput] = useState("");
  const [data, setData] = useState<Record<string, string>>({});
  const [typing, setTyping] = useState(false);
  const [showNotif, setShowNotif] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom whenever messages change or typing indicator appears
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  // Focus input when step changes and chat is open
  useEffect(() => {
    if (open && !typing && step !== "done" && step !== "commitment") {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [open, step, typing]);

  function showBotMessage(s: Step) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text: BOT_PROMPTS[s] }]);
    }, TYPING_DELAY[s]);
  }

  function startChat() {
    setStarted(true);
    setShowNotif(false);
    showBotMessage("mood");
  }

  function handleOpen() {
    setOpen(true);
    setShowNotif(false);
    if (!started) {
      setTimeout(() => startChat(), 300);
    }
  }

  function handleUserInput(value: string) {
    if (!value.trim() || typing) return;

    const currentStep = step;
    setMessages((prev) => [...prev, { from: "user", text: value }]);
    setInput("");

    const newData = { ...data, [currentStep]: value };
    setData(newData);

    const nextIndex = STEP_ORDER.indexOf(currentStep) + 1;
    const nextStep = STEP_ORDER[nextIndex] as Step;

    setStep(nextStep);

    if (nextStep === "done") {
      submitData(newData);
    }

    // Show a quick "Thanks" acknowledgment, then the next question
    const thanks = THANKS[currentStep];
    if (thanks) {
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [...prev, { from: "bot", text: thanks }]);
        // Then show typing for the next question
        setTimeout(() => showBotMessage(nextStep), 400);
      }, THANKS_DELAY);
    } else {
      showBotMessage(nextStep);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step === "done" || !input.trim()) return;
    handleUserInput(input.trim());
  }

  async function submitData(collected: Record<string, string>) {
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          full_name: collected.name || "—",
          first_name: collected.name?.split(" ")[0] || "—",
          last_name: collected.name?.split(" ").slice(1).join(" ") || "—",
          email: collected.email || "—",
          phone: collected.phone || "—",
          goal: collected.goal || "—",
          commitment: collected.commitment || "—",
          investment: collected.investment || "—",
          experience: collected.mood || "—",
          program: "Chatbot lead",
          contact_method: "Chatbot",
          time: new Date().toLocaleDateString(),
          to_email: "johntran.code@gmail.com",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
    } catch {
      // Silent fail — user already got the thank-you message
    }
  }

  const inputType =
    step === "email" ? "email" :
    step === "phone" ? "tel" :
    "text";

  const inputPlaceholder =
    step === "mood"       ? "I'm doing great!" :
    step === "name"       ? "Your full name" :
    step === "email"      ? "you@example.com" :
    step === "goal"       ? "My main goal is..." :
    step === "investment" ? "$200/month" :
    step === "phone"      ? "+1 555 000 0000" :
    "Type your answer...";

  const inputDisabled = typing || step === "done";

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        {showNotif && !open && (
          <div className="bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm px-4 py-2 rounded-2xl rounded-br-sm shadow-lg max-w-[220px] animate-fade-in">
            Got questions? Chat with John! 💬
          </div>
        )}

        <button
          onClick={open ? () => setOpen(false) : handleOpen}
          aria-label={open ? "Close chat" : "Open chat with John Tran"}
          className="relative w-14 h-14 rounded-full shadow-xl border-2 border-primary-500 overflow-hidden hover:scale-105 transition-transform duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          {open ? (
            <span className="flex items-center justify-center w-full h-full bg-zinc-800 text-zinc-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          ) : (
            <Image src="/chatbot-avatar.jpeg" alt="Chat with John Tran" fill className="object-cover" sizes="56px" />
          )}
          {!open && (
            <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-zinc-950" />
          )}
        </button>
      </div>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ height: "480px" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800 bg-zinc-900 shrink-0">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-primary-500/40 shrink-0">
            <Image src="/chatbot-avatar.jpeg" alt="John Tran" fill className="object-cover" sizes="36px" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-zinc-100 leading-none">John Tran</p>
            <p className="text-xs text-green-400 mt-0.5">
              {typing ? "typing…" : "Online · Life Coach"}
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="ml-auto text-zinc-500 hover:text-zinc-300 transition-colors duration-150 focus-visible:outline-none"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : "flex-row"}`}
            >
              {msg.from === "bot" && (
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-primary-500/30 shrink-0 mb-0.5">
                  <Image src="/chatbot-avatar.jpeg" alt="John" fill className="object-cover" sizes="28px" />
                </div>
              )}
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                  msg.from === "bot"
                    ? "bg-zinc-800 text-zinc-200 rounded-bl-sm"
                    : "bg-primary-500 text-zinc-950 font-medium rounded-br-sm"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="flex items-end gap-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-primary-500/30 shrink-0 mb-0.5">
                <Image src="/chatbot-avatar.jpeg" alt="John" fill className="object-cover" sizes="28px" />
              </div>
              <div className="bg-zinc-800 rounded-2xl rounded-bl-sm px-4 py-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "180ms" }} />
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: "360ms" }} />
                </span>
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input area */}
        {step !== "done" && (
          <div className="shrink-0 border-t border-zinc-800 px-3 py-3 bg-zinc-900">
            {step === "commitment" ? (
              <div className="flex flex-col gap-2">
                {COMMITMENT_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleUserInput(opt)}
                    disabled={inputDisabled}
                    className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-zinc-200 text-left hover:border-primary-500 hover:bg-primary-500/10 hover:text-primary-400 disabled:opacity-40 disabled:pointer-events-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/50"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  ref={inputRef}
                  type={inputType}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={typing ? "John is typing…" : inputPlaceholder}
                  disabled={inputDisabled}
                  className="flex-1 min-w-0 rounded-xl border border-zinc-700 bg-zinc-800 px-3.5 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:opacity-50 transition-colors duration-150"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || inputDisabled}
                  aria-label="Send"
                  className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-primary-500 text-zinc-950 hover:bg-primary-400 disabled:opacity-40 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </>
  );
}

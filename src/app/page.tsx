"use client";
import Link from "next/link";
import { Brain, TrendingUp, Bell, Users, ArrowRight, CheckCircle, Zap, Globe } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Business Copilot",
    desc: "Ask plain questions about your business. NATIK analyzes your data and gives direct answers with recommended actions.",
  },
  {
    icon: TrendingUp,
    title: "Operations Intelligence",
    desc: "Understand what's happening across sales, payments, staff, and customers — all in one place.",
  },
  {
    icon: Bell,
    title: "Predictive Alerts",
    desc: "Get warned before problems escalate. Late payments, overdue tasks, at-risk customers — NATIK spots them first.",
  },
  {
    icon: Users,
    title: "Team & Task Automation",
    desc: "NATIK creates follow-up tasks automatically and assigns them to the right team members.",
  },
];

const questions = [
  "Which customers owe us money?",
  "Why did our sales drop this month?",
  "Which orders are delayed?",
  "Which staff have unresolved tasks?",
  "What are my biggest problems this week?",
  "Which customers are likely to stop buying?",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">NATIK</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard" className="text-sm text-white/70 hover:text-white transition-colors">
              Sign in
            </Link>
            <Link
              href="/dashboard"
              className="text-sm bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-indigo-300 mb-8">
            <Globe size={14} />
            Built for African businesses
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Your business,{" "}
            <span className="gradient-text">intelligently</span>
            <br />
            understood
          </h1>

          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            NATIK is an AI operations platform that turns your fragmented business data —
            payments, customers, staff, orders — into real-time insights and automated actions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 glow"
            >
              Try the demo <ArrowRight size={20} />
            </Link>
            <a
              href="#how"
              className="flex items-center justify-center gap-2 glass px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              See how it works
            </a>
          </div>

          {/* Demo preview */}
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto glow text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-white/30">NATIK AI Copilot</span>
            </div>
            <div className="space-y-3">
              <div className="chat-bubble-user rounded-2xl rounded-tl-sm px-4 py-3 text-sm inline-block">
                What are my biggest operational problems this week?
              </div>
              <div className="chat-bubble-ai rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white/80 leading-relaxed">
                <span className="text-indigo-400 font-medium">NATIK found 3 critical issues:</span>
                <br />• <span className="text-yellow-400">₦8.4M</span> in outstanding payments — 11 customers approaching deadlines
                <br />• <span className="text-red-400">3 high-value customers</span> with no staff follow-up in 7+ days
                <br />• <span className="text-orange-400">18 visa applications</span> awaiting document completion
                <br /><br />
                <span className="text-indigo-300">→ I've created 14 follow-up tasks and assigned them to your team.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Just ask. NATIK answers.
          </h2>
          <p className="text-white/50 mb-12">No dashboards to learn. No reports to build. Just ask your business a question.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {questions.map((q) => (
              <div key={q} className="glass rounded-xl px-5 py-4 text-left flex items-center gap-3 hover:bg-white/[0.07] transition-colors cursor-default">
                <CheckCircle size={16} className="text-indigo-400 shrink-0" />
                <span className="text-white/80 text-sm">{q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything your operations need</h2>
            <p className="text-white/50">One platform. All your business intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-600/20 flex items-center justify-center mb-4 group-hover:bg-indigo-600/30 transition-colors">
                  <Icon size={22} className="text-indigo-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing</h2>
          <p className="text-white/50 mb-12">Start free. Scale as you grow.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Starter", price: "Free", features: ["1 user", "Up to 100 customers", "AI Copilot (10 queries/day)", "Basic alerts"] },
              { name: "Growth", price: "₦25,000/mo", features: ["5 users", "Unlimited customers", "Unlimited AI queries", "Predictive alerts", "Task automation"], highlight: true },
              { name: "Enterprise", price: "Custom", features: ["Unlimited users", "Custom integrations", "Dedicated support", "SLA guarantee", "On-premise option"] },
            ].map(({ name, price, features, highlight }) => (
              <div key={name} className={`rounded-2xl p-6 text-left ${highlight ? "bg-indigo-600/20 border border-indigo-500/40 glow" : "glass"}`}>
                <div className="text-sm text-white/50 mb-1">{name}</div>
                <div className="text-2xl font-bold mb-6">{price}</div>
                <ul className="space-y-2">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                      <CheckCircle size={14} className="text-indigo-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/dashboard"
                  className={`mt-6 block text-center py-3 rounded-xl text-sm font-medium transition-colors ${
                    highlight ? "bg-indigo-600 hover:bg-indigo-500" : "glass hover:bg-white/10"
                  }`}
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto glass rounded-3xl p-12 glow">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to understand your business?
          </h2>
          <p className="text-white/50 mb-8">Join businesses across Africa using NATIK to operate smarter.</p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105"
          >
            Start for free <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center text-white/30 text-sm">
        © 2025 NATIK. AI Operations Intelligence for African Businesses.
      </footer>
    </div>
  );
}

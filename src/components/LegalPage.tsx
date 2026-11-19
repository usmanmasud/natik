import Logo from "./Logo";
import SiteFooter from "./SiteFooter";

export default function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <header className="border-b border-white/5 px-6 h-16 flex items-center">
        <div className="max-w-3xl w-full mx-auto"><Logo /></div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-14">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
        <p className="text-white/40 text-sm mb-10">Last updated: {updated}</p>
        <div className="legal space-y-6 text-white/70 leading-relaxed">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

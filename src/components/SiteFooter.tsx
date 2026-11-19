import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 px-6 pt-12 pb-8 text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
        <div className="col-span-2 md:col-span-1">
          <Logo />
          <p className="text-white/40 mt-3 leading-relaxed">{site.tagline}.</p>
        </div>
        <div>
          <div className="font-semibold text-white/80 mb-3">Product</div>
          <ul className="space-y-2 text-white/40">
            <li><Link href="/#features" className="hover:text-white">Features</Link></li>
            <li><Link href="/#pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/register" className="hover:text-white">Create account</Link></li>
            <li><Link href="/login" className="hover:text-white">Sign in</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white/80 mb-3">Company</div>
          <ul className="space-y-2 text-white/40">
            <li><Link href="/#about" className="hover:text-white">About</Link></li>
            <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
            <li><a href={`mailto:${site.contactEmail}`} className="hover:text-white">{site.contactEmail}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white/80 mb-3">Legal</div>
          <ul className="space-y-2 text-white/40">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-white/5 pt-6 text-white/30 flex flex-col sm:flex-row justify-between gap-2">
        <span>© {year} {site.name}. All rights reserved.</span>
        <span>Made in {site.location}</span>
      </div>
    </footer>
  );
}

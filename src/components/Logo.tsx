import Link from "next/link";
import { Zap } from "lucide-react";

export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const box = size === "lg" ? "w-10 h-10 rounded-xl" : "w-8 h-8 rounded-lg";
  const icon = size === "lg" ? 20 : 16;
  const text = size === "lg" ? "text-2xl" : "text-lg";
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="NATIK home">
      <span className={`${box} bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center`}>
        <Zap size={icon} className="text-white" />
      </span>
      <span className={`font-bold tracking-tight text-white ${text}`}>NATIK</span>
    </Link>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  Zap, LayoutDashboard, Users, CheckSquare, Package, MessageSquare,
  TrendingUp, AlertTriangle, Clock, DollarSign, ChevronRight, Bell, LogOut
} from "lucide-react";
import { mockCustomers, mockTasks, mockOrders, getBusinessStats } from "@/lib/data";

const fmt = (n: number) => `₦${(n / 1000000).toFixed(1)}M`;

const statusColor = {
  active: "text-green-400 bg-green-400/10",
  "at-risk": "text-yellow-400 bg-yellow-400/10",
  overdue: "text-red-400 bg-red-400/10",
  completed: "text-green-400 bg-green-400/10",
  pending: "text-yellow-400 bg-yellow-400/10",
  delayed: "text-red-400 bg-red-400/10",
  done: "text-green-400 bg-green-400/10",
};

export default function Dashboard() {
  const { data: session } = useSession();
  const stats = getBusinessStats();
  const [activeTab, setActiveTab] = useState<"overview" | "customers" | "tasks" | "orders">("overview");

  const statCards = [
    { label: "Outstanding Payments", value: fmt(stats.totalOutstanding), icon: DollarSign, color: "text-red-400", bg: "bg-red-400/10", change: `${stats.overdueCustomers.length} customers overdue` },
    { label: "Total Revenue", value: fmt(stats.totalRevenue), icon: TrendingUp, color: "text-green-400", bg: "bg-green-400/10", change: `${mockCustomers.length} customers` },
    { label: "Overdue Tasks", value: String(stats.overdueTasks.length), icon: Clock, color: "text-yellow-400", bg: "bg-yellow-400/10", change: `of ${mockTasks.length} total tasks` },
    { label: "Delayed Orders", value: String(stats.delayedOrders.length), icon: AlertTriangle, color: "text-orange-400", bg: "bg-orange-400/10", change: `${fmt(stats.delayedOrders.reduce((s, o) => s + o.amount, 0))} at risk` },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex">
      {/* Sidebar */}
      <aside className="w-60 glass border-r border-white/5 flex flex-col fixed h-full">
        <div className="p-5 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Zap size={16} />
            </div>
            <span className="font-bold text-lg">NATIK</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: "overview", label: "Overview", icon: LayoutDashboard },
            { id: "customers", label: "Customers", icon: Users },
            { id: "tasks", label: "Tasks", icon: CheckSquare },
            { id: "orders", label: "Orders", icon: Package },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                activeTab === id ? "bg-indigo-600/20 text-indigo-300" : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5 space-y-2">
          <Link
            href="/copilot"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600/30 transition-colors"
          >
            <MessageSquare size={16} />
            AI Copilot
            <ChevronRight size={14} className="ml-auto" />
          </Link>
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="w-7 h-7 rounded-full bg-indigo-600/30 flex items-center justify-center text-xs font-medium text-indigo-300 shrink-0">
              {session?.user?.name?.[0]?.toUpperCase() ?? "U"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-white/80 truncate">{session?.user?.name ?? "User"}</div>
              <div className="text-xs text-white/30 truncate">{session?.user?.email}</div>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="text-white/30 hover:text-red-400 transition-colors"
              title="Sign out"
            >
              <LogOut size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-60 flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold capitalize">{activeTab === "overview" ? "Business Overview" : activeTab}</h1>
            <p className="text-white/40 text-sm mt-1">Last updated: {new Date().toLocaleDateString("en-NG", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="glass p-2 rounded-lg hover:bg-white/10 transition-colors relative">
              <Bell size={18} className="text-white/60" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <Link href="/copilot" className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <MessageSquare size={15} />
              Ask NATIK
            </Link>
          </div>
        </div>

        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {statCards.map(({ label, value, icon: Icon, color, bg, change }) => (
                <div key={label} className="glass rounded-2xl p-5">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div className="text-2xl font-bold mb-1">{value}</div>
                  <div className="text-xs text-white/40">{label}</div>
                  <div className={`text-xs mt-1 ${color}`}>{change}</div>
                </div>
              ))}
            </div>

            {/* Alerts */}
            <div className="glass rounded-2xl p-6">
              <h2 className="font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle size={16} className="text-yellow-400" />
                Active Alerts
              </h2>
              <div className="space-y-3">
                {[
                  { msg: `${stats.overdueCustomers.length} customers have overdue payments totalling ${fmt(stats.totalOutstanding)}`, level: "high" },
                  { msg: `${stats.overdueTasks.length} team tasks are overdue and blocking customer resolutions`, level: "high" },
                  { msg: `${stats.delayedOrders.length} orders are delayed — ${fmt(stats.delayedOrders.reduce((s, o) => s + o.amount, 0))} at risk`, level: "medium" },
                  { msg: `${stats.noContactDays7.length} customers have had no contact in 7+ days (churn risk)`, level: "medium" },
                ].map(({ msg, level }) => (
                  <div key={msg} className={`flex items-start gap-3 p-3 rounded-xl ${level === "high" ? "bg-red-500/10 border border-red-500/20" : "bg-yellow-500/10 border border-yellow-500/20"}`}>
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${level === "high" ? "bg-red-400" : "bg-yellow-400"}`} />
                    <span className="text-sm text-white/80">{msg}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent orders */}
            <div className="glass rounded-2xl p-6">
              <h2 className="font-semibold mb-4">Recent Orders</h2>
              <div className="space-y-2">
                {mockOrders.slice(0, 4).map((o) => (
                  <div key={o.id} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <div className="text-sm font-medium">{o.customer}</div>
                      <div className="text-xs text-white/40">{o.type} · {o.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{fmt(o.amount)}</div>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${statusColor[o.status]}`}>{o.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Customers */}
        {activeTab === "customers" && (
          <div className="glass rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-white/5 flex items-center justify-between">
              <h2 className="font-semibold">All Customers ({mockCustomers.length})</h2>
              <div className="flex gap-2 text-xs">
                {["active", "at-risk", "overdue"].map((s) => (
                  <span key={s} className={`px-2 py-1 rounded-full ${statusColor[s as keyof typeof statusColor]}`}>
                    {mockCustomers.filter((c) => c.status === s).length} {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="divide-y divide-white/5">
              {mockCustomers.map((c) => (
                <div key={c.id} className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.03] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-indigo-600/20 flex items-center justify-center text-sm font-medium text-indigo-300">
                      {c.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{c.name}</div>
                      <div className="text-xs text-white/40">{c.email}</div>
                    </div>
                  </div>
                  <div className="hidden md:block text-right">
                    <div className="text-xs text-white/40">Total spent</div>
                    <div className="text-sm font-medium">{fmt(c.totalSpent)}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/40">Balance</div>
                    <div className={`text-sm font-medium ${c.balance > 0 ? "text-red-400" : "text-green-400"}`}>
                      {c.balance > 0 ? fmt(c.balance) : "Paid"}
                    </div>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full ${statusColor[c.status]}`}>{c.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tasks */}
        {activeTab === "tasks" && (
          <div className="glass rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-white/5">
              <h2 className="font-semibold">Team Tasks ({mockTasks.length})</h2>
            </div>
            <div className="divide-y divide-white/5">
              {mockTasks.map((t) => (
                <div key={t.id} className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.03] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${t.priority === "high" ? "bg-red-400" : t.priority === "medium" ? "bg-yellow-400" : "bg-white/20"}`} />
                    <div>
                      <div className="text-sm font-medium">{t.title}</div>
                      <div className="text-xs text-white/40">Assigned to {t.assignee} · Due {t.dueDate}</div>
                    </div>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full shrink-0 ${statusColor[t.status]}`}>{t.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Orders */}
        {activeTab === "orders" && (
          <div className="glass rounded-2xl overflow-hidden">
            <div className="p-5 border-b border-white/5">
              <h2 className="font-semibold">All Orders ({mockOrders.length})</h2>
            </div>
            <div className="divide-y divide-white/5">
              {mockOrders.map((o) => (
                <div key={o.id} className="flex items-center justify-between px-5 py-4 hover:bg-white/[0.03] transition-colors">
                  <div>
                    <div className="text-sm font-medium">{o.customer}</div>
                    <div className="text-xs text-white/40">{o.type} · {o.id} · {o.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{fmt(o.amount)}</div>
                    <span className={`text-xs px-2.5 py-1 rounded-full ${statusColor[o.status]}`}>{o.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

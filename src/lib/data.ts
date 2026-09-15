export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  balance: number;
  lastContact: string;
  status: "active" | "at-risk" | "overdue";
  totalSpent: number;
}

export interface Task {
  id: string;
  title: string;
  assignee: string;
  customer?: string;
  dueDate: string;
  status: "pending" | "overdue" | "done";
  priority: "high" | "medium" | "low";
}

export interface Order {
  id: string;
  customer: string;
  amount: number;
  status: "completed" | "pending" | "delayed";
  date: string;
  type: string;
}

export const mockCustomers: Customer[] = [
  { id: "1", name: "Adaeze Okonkwo", email: "adaeze@gmail.com", phone: "+234 801 234 5678", balance: 850000, lastContact: "2025-06-01", status: "overdue", totalSpent: 3200000 },
  { id: "2", name: "Emeka Nwosu", email: "emeka@nwosu.com", phone: "+234 802 345 6789", balance: 1200000, lastContact: "2025-06-10", status: "overdue", totalSpent: 5800000 },
  { id: "3", name: "Fatima Al-Hassan", email: "fatima@alhassan.ng", phone: "+234 803 456 7890", balance: 0, lastContact: "2025-07-01", status: "active", totalSpent: 2100000 },
  { id: "4", name: "Chukwudi Eze", email: "chukwudi@eze.com", phone: "+234 804 567 8901", balance: 450000, lastContact: "2025-05-20", status: "at-risk", totalSpent: 1500000 },
  { id: "5", name: "Ngozi Adeyemi", email: "ngozi@adeyemi.ng", phone: "+234 805 678 9012", balance: 2100000, lastContact: "2025-05-15", status: "overdue", totalSpent: 7200000 },
  { id: "6", name: "Tunde Bakare", email: "tunde@bakare.com", phone: "+234 806 789 0123", balance: 0, lastContact: "2025-07-02", status: "active", totalSpent: 980000 },
  { id: "7", name: "Amina Yusuf", email: "amina@yusuf.ng", phone: "+234 807 890 1234", balance: 320000, lastContact: "2025-06-05", status: "at-risk", totalSpent: 1800000 },
  { id: "8", name: "Biodun Olatunji", email: "biodun@olatunji.com", phone: "+234 808 901 2345", balance: 1800000, lastContact: "2025-05-28", status: "overdue", totalSpent: 4300000 },
];

export const mockTasks: Task[] = [
  { id: "1", title: "Follow up on payment — Adaeze Okonkwo", assignee: "Kemi", customer: "Adaeze Okonkwo", dueDate: "2025-07-05", status: "overdue", priority: "high" },
  { id: "2", title: "Send visa documents reminder — Emeka Nwosu", assignee: "Tolu", customer: "Emeka Nwosu", dueDate: "2025-07-06", status: "overdue", priority: "high" },
  { id: "3", title: "Schedule check-in call — Chukwudi Eze", assignee: "Kemi", customer: "Chukwudi Eze", dueDate: "2025-07-08", status: "pending", priority: "medium" },
  { id: "4", title: "Process refund request — Ngozi Adeyemi", assignee: "Tolu", customer: "Ngozi Adeyemi", dueDate: "2025-07-04", status: "overdue", priority: "high" },
  { id: "5", title: "Update customer records — Biodun Olatunji", assignee: "Seun", customer: "Biodun Olatunji", dueDate: "2025-07-10", status: "pending", priority: "low" },
  { id: "6", title: "Prepare monthly sales report", assignee: "Seun", dueDate: "2025-07-07", status: "pending", priority: "medium" },
];

export const mockOrders: Order[] = [
  { id: "ORD-001", customer: "Adaeze Okonkwo", amount: 850000, status: "delayed", date: "2025-06-15", type: "Visa Application" },
  { id: "ORD-002", customer: "Emeka Nwosu", amount: 1200000, status: "pending", date: "2025-06-20", type: "Travel Package" },
  { id: "ORD-003", customer: "Fatima Al-Hassan", amount: 650000, status: "completed", date: "2025-06-25", type: "Hotel Booking" },
  { id: "ORD-004", customer: "Ngozi Adeyemi", amount: 2100000, status: "delayed", date: "2025-06-10", type: "Group Tour" },
  { id: "ORD-005", customer: "Tunde Bakare", amount: 380000, status: "completed", date: "2025-06-28", type: "Flight Booking" },
  { id: "ORD-006", customer: "Amina Yusuf", amount: 920000, status: "pending", date: "2025-06-22", type: "Visa Application" },
];

export function getBusinessStats() {
  const totalOutstanding = mockCustomers.reduce((s, c) => s + c.balance, 0);
  const overdueCustomers = mockCustomers.filter((c) => c.status === "overdue");
  const atRiskCustomers = mockCustomers.filter((c) => c.status === "at-risk");
  const overdueTasks = mockTasks.filter((t) => t.status === "overdue");
  const delayedOrders = mockOrders.filter((o) => o.status === "delayed");
  const totalRevenue = mockCustomers.reduce((s, c) => s + c.totalSpent, 0);
  const noContactDays7 = mockCustomers.filter((c) => {
    const days = Math.floor((Date.now() - new Date(c.lastContact).getTime()) / 86400000);
    return days > 7;
  });

  return { totalOutstanding, overdueCustomers, atRiskCustomers, overdueTasks, delayedOrders, totalRevenue, noContactDays7 };
}

export function analyzeQuery(query: string): string {
  const q = query.toLowerCase();
  const stats = getBusinessStats();

  const fmt = (n: number) => `₦${(n / 1000000).toFixed(1)}M`;

  if (q.includes("owe") || q.includes("outstanding") || q.includes("payment") || q.includes("debt")) {
    const names = stats.overdueCustomers.map((c) => `${c.name} (${fmt(c.balance)})`).join(", ");
    return `You have ${fmt(stats.totalOutstanding)} in outstanding payments across ${stats.overdueCustomers.length} customers.\n\nOverdue customers: ${names}.\n\n→ I recommend prioritizing Ngozi Adeyemi (${fmt(2100000)}) and Emeka Nwosu (${fmt(1200000)}) — both have been overdue for 3+ weeks. I can create follow-up tasks for your team.`;
  }

  if (q.includes("sales") || q.includes("revenue") || q.includes("drop") || q.includes("performance")) {
    return `Total revenue this period: ${fmt(stats.totalRevenue)} across ${mockCustomers.length} customers.\n\nSales analysis:\n• Completed orders: ${mockOrders.filter((o) => o.status === "completed").length} (${fmt(mockOrders.filter((o) => o.status === "completed").reduce((s, o) => s + o.amount, 0))})\n• Pending orders: ${mockOrders.filter((o) => o.status === "pending").length}\n• Delayed orders: ${stats.delayedOrders.length}\n\n→ The ${stats.delayedOrders.length} delayed orders represent ${fmt(stats.delayedOrders.reduce((s, o) => s + o.amount, 0))} in at-risk revenue. Resolving these should be your top priority.`;
  }

  if (q.includes("staff") || q.includes("task") || q.includes("team") || q.includes("unresolved")) {
    const overdueList = stats.overdueTasks.map((t) => `"${t.title}" (assigned to ${t.assignee})`).join("\n• ");
    return `Your team has ${mockTasks.length} total tasks. ${stats.overdueTasks.length} are overdue:\n\n• ${overdueList}\n\n→ Kemi and Tolu each have high-priority overdue tasks. I recommend a team check-in today to unblock these.`;
  }

  if (q.includes("order") || q.includes("delayed") || q.includes("pending")) {
    const delayed = stats.delayedOrders.map((o) => `${o.id} — ${o.customer} (${fmt(o.amount)}, ${o.type})`).join("\n• ");
    return `${stats.delayedOrders.length} orders are currently delayed:\n\n• ${delayed}\n\n→ These represent ${fmt(stats.delayedOrders.reduce((s, o) => s + o.amount, 0))} in delayed revenue. Contact these customers immediately to prevent churn.`;
  }

  if (q.includes("problem") || q.includes("issue") || q.includes("risk") || q.includes("week") || q.includes("biggest")) {
    return `NATIK identified 4 critical issues this week:\n\n1. 💰 ${fmt(stats.totalOutstanding)} in outstanding payments — ${stats.overdueCustomers.length} customers overdue\n2. ⚠️ ${stats.overdueTasks.length} team tasks are overdue — blocking customer resolutions\n3. 📦 ${stats.delayedOrders.length} orders delayed — ${fmt(stats.delayedOrders.reduce((s, o) => s + o.amount, 0))} at risk\n4. 👥 ${stats.noContactDays7.length} customers with no contact in 7+ days — churn risk\n\n→ Recommended priority: Start with payment follow-ups, then resolve delayed orders. I've prepared a task list for your team.`;
  }

  if (q.includes("churn") || q.includes("stop buying") || q.includes("at-risk") || q.includes("lose")) {
    const atRisk = stats.atRiskCustomers.map((c) => `${c.name} — last contact: ${c.lastContact}`).join("\n• ");
    const noContact = stats.noContactDays7.map((c) => c.name).join(", ");
    return `${stats.atRiskCustomers.length} customers are flagged as at-risk:\n\n• ${atRisk}\n\nAdditionally, ${stats.noContactDays7.length} customers (${noContact}) have had no contact in over 7 days — these are early churn signals.\n\n→ I recommend scheduling re-engagement calls for all at-risk customers this week.`;
  }

  if (q.includes("customer") || q.includes("client")) {
    return `You have ${mockCustomers.length} customers in total:\n• ${mockCustomers.filter((c) => c.status === "active").length} active\n• ${stats.atRiskCustomers.length} at-risk\n• ${stats.overdueCustomers.length} overdue\n\nTop customer by revenue: Ngozi Adeyemi (${fmt(7200000)} total spend).\n\n→ Focus retention efforts on your top 3 spenders — they represent over 50% of total revenue.`;
  }

  return `I analyzed your business data. Here's a quick summary:\n\n• Total outstanding: ${fmt(stats.totalOutstanding)}\n• Overdue customers: ${stats.overdueCustomers.length}\n• Overdue tasks: ${stats.overdueTasks.length}\n• Delayed orders: ${stats.delayedOrders.length}\n\nTry asking me something specific like "Which customers owe us money?" or "What are my biggest problems this week?"`;
}

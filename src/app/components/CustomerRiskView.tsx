"use client";
import React from 'react';
import { Users, ShieldAlert, CheckCircle, AlertTriangle } from 'lucide-react';

const customers = [
  { id: 1, name: "Pranav Manufacturing Ltd.", outstanding: "₹2,40,000", risk: "Low", status: "Healthy" },
  { id: 2, name: "Vedic Retail Logistics", outstanding: "₹1,82,000", risk: "Medium", status: "Delayed Payment" },
  { id: 3, name: "Apex Agro Outlets", outstanding: "₹60,000", risk: "High", status: "Default Warning" },
];

export default function CustomerRiskView() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Supply & Customer Risk Ledger</h1>
        <p className="text-sm text-slate-400">Machine learning probability score of buyer payment defaults and delays.</p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/60 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <th className="p-4">Customer Account Name</th>
              <th className="p-4">Outstanding Book Balance</th>
              <th className="p-4">Default Risk Weight</th>
              <th className="p-4">System Operational Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-sm">
            {customers.map((c) => (
              <tr key={c.id} className="hover:bg-slate-900/20 transition-colors">
                <td className="p-4 font-medium flex items-center gap-2"><Users className="h-4 w-4 text-slate-500" /> {c.name}</td>
                <td className="p-4 font-mono">{c.outstanding}</td>
                <td className="p-4">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${
                    c.risk === 'High' ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' :
                    c.risk === 'Medium' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
                    'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                  }`}>
                    {c.risk} Risk
                  </span>
                </td>
                <td className="p-4 text-slate-300">
                  <span className="flex items-center gap-1.5">
                    {c.status === 'Healthy' ? <CheckCircle className="h-4 w-4 text-emerald-400" /> :
                     c.status === 'Delayed Payment' ? <AlertTriangle className="h-4 w-4 text-amber-400" /> :
                     <ShieldAlert className="h-4 w-4 text-rose-400" />}
                    {c.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
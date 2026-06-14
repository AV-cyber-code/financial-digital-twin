"use client";
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Wallet } from 'lucide-react';

const mockData = [
  { month: 'Jan', cashFlow: 42000 },
  { month: 'Feb', cashFlow: 45000 },
  { month: 'Mar', cashFlow: 41000 },
  { month: 'Apr', cashFlow: 58000 },
  { month: 'May', cashFlow: 62000 },
  { month: 'Jun', cashFlow: 75000 },
];

export default function TwinDashboard() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Twin Control Hub</h1>
          <p className="text-sm text-slate-400">Real-time machine learning telemetry of your enterprise financials.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
          <div className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium text-slate-400">Total Available Cash</span>
            <Wallet className="h-4 w-4 text-blue-500" />
          </div>
          <div className="text-2xl font-bold">₹12,45,000</div>
          <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
            <ArrowUpRight className="h-3 w-3" /> +12.3% from last month
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
          <div className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium text-slate-400">Accounts Receivable (A/R)</span>
            <ArrowUpRight className="h-4 w-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold">₹4,82,000</div>
          <p className="text-xs text-slate-400 mt-1">Avg. collection cycle: 34 days</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur">
          <div className="flex flex-row items-center justify-between pb-2">
            <span className="text-sm font-medium text-slate-400">Accounts Payable (A/P)</span>
            <ArrowDownRight className="h-4 w-4 text-rose-500" />
          </div>
          <div className="text-2xl font-bold">₹2,15,000</div>
          <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
            <ArrowUpRight className="h-3 w-3" /> Due within 14 days
          </p>
        </div>
      </div>

      {/* Main Chart Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-blue-500" /> Cash Flow Health Index
          </h3>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={mockData}>
              <defs>
                <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }} />
              <Area type="monotone" dataKey="cashFlow" stroke="#2563eb" fillOpacity={1} fill="url(#colorCash)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
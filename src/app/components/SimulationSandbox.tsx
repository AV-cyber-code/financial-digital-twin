"use client";
import React, { useState } from 'react';
import { Sliders, RefreshCw, AlertTriangle } from 'lucide-react';

export default function SimulationSandbox() {
  const [delay, setDelay] = useState(30);
  const [shock, setShock] = useState(0);
  const [status, setStatus] = useState("Stable");

  const runSimulation = () => {
    if (delay > 45 || shock > 15) {
      setStatus("Critical Cash Crunch Risk");
    } else if (delay > 35) {
      setStatus("Warning: Working Capital Strain");
    } else {
      setStatus("Stable and Optimized");
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Stress Simulation Sandbox</h1>
        <p className="text-sm text-slate-400">Simulate market crashes, supply shocks, and payment delays before they happen.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Controls Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 space-y-6">
          <h3 className="text-md font-semibold flex items-center gap-2">
            <Sliders className="h-4 w-4 text-blue-500" /> Parameter Manipulators
          </h3>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">A/R Collection Delay (Days)</span>
              <span className="font-mono font-bold text-blue-400">{delay} days</span>
            </div>
            <input type="range" min="15" max="90" value={delay} onChange={(e) => setDelay(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Raw Material Supply Chain Shock (%)</span>
              <span className="font-mono font-bold text-rose-400">+{shock}%</span>
            </div>
            <input type="range" min="0" max="50" value={shock} onChange={(e) => setShock(Number(e.target.value))} className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-600" />
          </div>

          <button onClick={runSimulation} className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
            <RefreshCw className="h-4 w-4" /> Initialize Sandbox Delta
          </button>
        </div>

        {/* Results Card */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/30 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-md font-semibold mb-4">Predictive Digital Twin Analysis</h3>
            <div className={`p-4 rounded-xl border flex items-start gap-3 ${
              status.includes("Critical") ? "bg-rose-500/10 border-rose-500/20 text-rose-400" :
              status.includes("Warning") ? "bg-amber-500/10 border-amber-500/20 text-amber-400" :
              "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
            }`}>
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm">Twin Status: {status}</h4>
                <p className="text-xs text-slate-400 mt-1">
                  {status.includes("Critical") ? "Recommendation: Freeze all discretionary spend and request an automated bill discounting bridge facility immediately." :
                   status.includes("Warning") ? "Recommendation: Offer a 2% early payment discount code to your top 3 ledger customers." :
                   "No actionable alerts. Your working capital runaway is sitting comfortably at 84 days."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
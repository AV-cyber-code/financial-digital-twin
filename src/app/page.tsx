"use client";
import React, { useState, useEffect } from 'react';
import { BarChart3, Sliders, Users, MessageSquare, TrendingUp, ArrowUpRight, ArrowDownRight, Wallet, AlertTriangle, CheckCircle, ShieldAlert, Send, Sparkles, RefreshCw } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'sandbox' | 'risk' | 'chat'>('dashboard');
  
  // Dynamic State for the working engine
  const [delay, setDelay] = useState<number>(30);
  const [shock, setShock] = useState<number>(0);
  const [cash, setCash] = useState<number>(1245000);
  const [ar, setAr] = useState<number>(482000);
  const [ap, setAp] = useState<number>(215000);
  const [status, setStatus] = useState<string>("Stable and Optimized");
  const [input, setInput] = useState<string>("");
  
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Namaste! I am Mithra, your AI CFO Agent. I am tracking your live financial ledger twin. Currently, your working capital runaway sits at a comfortable 84 days." }
  ]);

  // Live Math Engine: recalculates metrics when sliders move
  useEffect(() => {
    const baselineCash = 1245000;
    const baselineAR = 482000;
    const baselineAP = 215000;

    // Simulate collection delays reducing available cash flow & compounding risk
    const arImpact = (delay - 30) * 8500; 
    // Simulate supply shocks spiking accounts payable costs
    const apImpact = (shock / 100) * baselineAP;

    const newCash = Math.max(150000, baselineCash - arImpact - apImpact);
    const newAR = baselineAR + arImpact;
    const newAP = baselineAP + apImpact;

    setCash(newCash);
    setAr(newAR);
    setAp(newAP);

    if (delay > 55 || shock > 25) {
      setStatus("Critical Cash Crunch Risk");
    } else if (delay > 38 || shock > 10) {
      setStatus("Warning: Working Capital Strain");
    } else {
      setStatus("Stable and Optimized");
    }
  }, [delay, shock]);

  // Dynamic Chart Data mapping based on current states
  const generateChartData = () => {
    const factor = cash / 1245000;
    return [
      { month: 'Jan', cashFlow: Math.round(42000 * factor) },
      { month: 'Feb', cashFlow: Math.round(45000 * factor) },
      { month: 'Mar', cashFlow: Math.round(41000 * factor) },
      { month: 'Apr', cashFlow: Math.round(58000 * factor) },
      { month: 'May', cashFlow: Math.round(62000 * factor) },
      { month: 'Jun', cashFlow: Math.round(75000 * factor) },
    ];
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    const newMessages = [...messages, { role: 'user', text: userMsg }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      let aiResponse = `Analyzing twin parameters... Currently, your collection delay is set at ${delay} days with a ${shock}% supply chain shock. `;
      if (delay > 35) {
        aiResponse += `This expands your A/R to ₹${ar.toLocaleString('en-IN')}, strangling liquidity. I recommend configuring an automated bill discounting bridge for Vedic Retail Logistics immediately.`;
      } else {
        aiResponse += `Your current structure is healthy with cash reserves holding steady at ₹${cash.toLocaleString('en-IN')}. No immediate credit intervention needed.`;
      }
      setMessages([...newMessages, { role: 'assistant', text: aiResponse }]);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans antialiased selection:bg-blue-500/30">
      {/* Premium Navigation Topbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#030712]/70 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 font-black text-white shadow-lg shadow-blue-500/20 text-lg">
              M
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Mithra AI
              </span>
              <span className="ml-2.5 text-[11px] font-semibold text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full bg-blue-500/5 uppercase tracking-wider">
                Financial Twin Engine v1.0
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium transition-all duration-300 ${
              status.includes("Critical") ? "bg-rose-500/10 border-rose-500/30 text-rose-400" :
              status.includes("Warning") ? "bg-amber-500/10 border-amber-500/30 text-amber-400" :
              "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
            }`}>
              <span className={`h-2 w-2 rounded-full ${
                status.includes("Critical") ? "bg-rose-400 animate-ping" :
                status.includes("Warning") ? "bg-amber-400 animate-pulse" : 
                "bg-emerald-400"
              }`} />
              System Status: {status}
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sleek Dark Left Sidebar */}
        <aside className="fixed top-16 left-0 z-30 hidden w-64 h-[calc(100vh-4rem)] border-r border-slate-900 bg-[#030712]/50 md:block">
          <div className="space-y-6 py-6 px-4">
            <div className="px-3">
              <h2 className="mb-3 px-2 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                Core Workspace
              </h2>
              <div className="space-y-1">
                <button type="button" onClick={() => setActiveTab('dashboard')} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${activeTab === 'dashboard' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/10' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}><BarChart3 className="h-4 w-4" /> Twin Control Hub</button>
                <button type="button" onClick={() => setActiveTab('sandbox')} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${activeTab === 'sandbox' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/10' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}><Sliders className="h-4 w-4" /> Stress Simulation</button>
                <button type="button" onClick={() => setActiveTab('risk')} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${activeTab === 'risk' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/10' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}><Users className="h-4 w-4" /> Risk Ledger</button>
              </div>
            </div>

            <div className="px-3">
              <h2 className="mb-3 px-2 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
                Autonomous Systems
              </h2>
              <button type="button" onClick={() => setActiveTab('chat')} className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${activeTab === 'chat' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-600/10' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'}`}><MessageSquare className="h-4 w-4" /> AI CFO Copilot</button>
            </div>
          </div>
        </aside>

        {/* Master Content Area Layout */}
        <main className="w-full md:pl-64 min-h-[calc(100vh-4rem)] bg-gradient-to-b from-[#030712] via-[#090d16] to-[#030712]">
          <div className="p-8 max-w-7xl mx-auto space-y-8 animate-fadeIn">
            
            {/* TAB 1: TWIN DASHBOARD PANEL */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-extrabold tracking-tight">Financial Twin Control Hub</h1>
                  <p className="text-sm text-slate-400 mt-1">Real-time machine learning telemetry mapped from linked ERP ledgers.</p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/20 p-6 backdrop-blur-xl hover:border-slate-700/50 transition duration-300">
                    <div className="flex items-center justify-between pb-2"><span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Cash Liquidity</span><Wallet className="h-4 w-4 text-blue-500" /></div>
                    <div className="text-3xl font-black font-mono">₹{cash.toLocaleString('en-IN')}</div>
                    <p className={`text-xs flex items-center gap-1 mt-2 font-medium ${cash > 800000 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {cash > 800000 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />} Real-time calculated liquidity index
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/20 p-6 backdrop-blur-xl hover:border-slate-700/50 transition duration-300">
                    <div className="flex items-center justify-between pb-2"><span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Receivables Ledger (A/R)</span><ArrowUpRight className="h-4 w-4 text-emerald-500" /></div>
                    <div className="text-3xl font-black font-mono">₹{ar.toLocaleString('en-IN')}</div>
                    <p className="text-xs text-slate-400 mt-2 font-mono">Simulated Cycle: {delay} Days</p>
                  </div>

                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/20 p-6 backdrop-blur-xl hover:border-slate-700/50 transition duration-300">
                    <div className="flex items-center justify-between pb-2"><span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Payables Ledger (A/P)</span><ArrowDownRight className="h-4 w-4 text-rose-500" /></div>
                    <div className="text-3xl font-black font-mono">₹{ap.toLocaleString('en-IN')}</div>
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-2 font-medium">Supply volatility weight: +{shock}%</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800/60 bg-slate-900/10 p-6">
                  <div className="mb-6 flex justify-between items-center">
                    <h3 className="text-lg font-bold flex items-center gap-2"><TrendingUp className="h-4 w-4 text-blue-500" /> Predictive Cash Flow Projection Matrix</h3>
                    <span className="text-xs font-mono text-slate-500">ML Modeled Output</span>
                  </div>
                  <div className="h-[320px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={generateChartData()}>
                        <defs>
                          <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" opacity={0.4} />
                        <XAxis dataKey="month" stroke="#475569" fontStyle="mono" />
                        <YAxis stroke="#475569" fontStyle="mono" />
                        <Tooltip contentStyle={{ backgroundColor: '#090d16', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '12px' }} />
                        <Area type="monotone" dataKey="cashFlow" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCash)" strokeWidth={2.5} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: STRESS SIMULATION WORKBENCH */}
            {activeTab === 'sandbox' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-extrabold tracking-tight">Macro Stress Simulation Workbench</h1>
                  <p className="text-sm text-slate-400 mt-1">Manipulate transactional and macro variants to visualize system structural resilience.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/20 p-6 space-y-6 backdrop-blur-xl">
                    <h3 className="text-base font-bold flex items-center gap-2"><Sliders className="h-4 w-4 text-blue-500" /> Variable Distortion Parameters</h3>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm"><span className="text-slate-400 font-medium">Customer Payment Delay</span><span className="font-mono font-bold text-blue-400">{delay} days</span></div>
                      <input type="range" min="15" max="85" value={delay} onChange={(e) => setDelay(Number(e.target.value))} className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                      <div className="flex justify-between text-[11px] text-slate-500 font-mono"><span>Net 15 (Aggressive)</span><span>Net 85 (Severe Distressed)</span></div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm"><span className="text-slate-400 font-medium">Supply Chain Cost Inflation Shock</span><span className="font-mono font-bold text-rose-400">+{shock}%</span></div>
                      <input type="range" min="0" max="45" value={shock} onChange={(e) => setShock(Number(e.target.value))} className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500" />
                      <div className="flex justify-between text-[11px] text-slate-500 font-mono"><span>Baseline Market</span><span>+45% Extreme Inflation</span></div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-800/60 bg-slate-900/10 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold mb-4">Autonomous Twin Countermeasure Engine</h3>
                      <div className={`p-5 rounded-xl border flex items-start gap-4 transition-all duration-300 ${
                        status.includes("Critical") ? "bg-rose-500/5 border-rose-500/20 text-rose-400" :
                        status.includes("Warning") ? "bg-amber-500/5 border-amber-500/20 text-amber-400" :
                        "bg-emerald-500/5 border-emerald-500/20 text-emerald-400"
                      }`}>
                        {status.includes("Critical") ? <ShieldAlert className="h-5 w-5 mt-0.5 shrink-0 animate-bounce" /> : <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />}
                        <div>
                          <h4 className="font-bold text-sm">Twin Diagnostic status: {status}</h4>
                          <p className="text-xs text-slate-400 leading-relaxed mt-2">
                            {status.includes("Critical") ? "CRITICAL SEVERITY WARNING: Current settings cause an operational cash runaway crash in 9 days. Recommendation: Immediately suspend optional expenditures and trigger smart automated factoring of overdue customer bills." :
                             status.includes("Warning") ? "ALERT MODERATE EXPOSURE: Working capital buffers narrowing. Strategy: Push forward early-payment incentive mechanisms to high-weight ledger profiles." :
                             "SYSTEM COMFORTABLE: Buffers running perfectly. Current structures present zero liquidity alerts over a trailing 90-day calculation loop."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 text-[11px] text-slate-500 italic font-mono border-t border-slate-900 mt-4">
                      All calculations are performed localized instantly via Mithra state deltas.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: RISK LEDGER MANAGEMENT */}
            {activeTab === 'risk' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-extrabold tracking-tight">Supply & Buyer Default Risk Ledger</h1>
                  <p className="text-sm text-slate-400 mt-1">Predictive matrix monitoring ledger nodes using continuous default probability computations.</p>
                </div>

                <div className="rounded-2xl border border-slate-800/60 bg-slate-900/10 overflow-hidden backdrop-blur-xl">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900/40 text-xs font-bold uppercase tracking-widest text-slate-400">
                        <th className="p-4 pl-6">Ledger Identity</th>
                        <th className="p-4">Outstanding Book Asset Balance</th>
                        <th className="p-4">ML Calculated Default Weight</th>
                        <th className="p-4 pr-6">Operational Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-sm font-medium text-slate-300">
                      <tr className="hover:bg-slate-900/30 transition-colors">
                        <td className="p-4 pl-6 flex items-center gap-3"><Users className="h-4 w-4 text-blue-400" /> Pranav Manufacturing Ltd.</td>
                        <td className="p-4 font-mono font-bold">₹2,40,000</td>
                        <td className="p-4"><span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">Low Risk Range</span></td>
                        <td className="p-4 pr-6 text-slate-400"><span className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Account Spot Ontime</span></td>
                      </tr>
                      <tr className="hover:bg-slate-900/30 transition-colors">
                        <td className="p-4 pl-6 flex items-center gap-3"><Users className="h-4 w-4 text-blue-400" /> Vedic Retail Logistics</td>
                        <td className="p-4 font-mono font-bold">₹{ar.toLocaleString('en-IN')}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${delay > 45 ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-amber-500/10 border-amber-500/20 text-amber-400'}`}>
                            {delay > 45 ? "Severe Risk Weight" : "Medium Risk Weight"}
                          </span>
                        </td>
                        <td className="p-4 pr-6 text-slate-400">
                          <span className="flex items-center gap-2">
                            {delay > 45 ? <ShieldAlert className="h-4 w-4 text-rose-400 animate-pulse" /> : <AlertTriangle className="h-4 w-4 text-amber-400" />}
                            {delay > 30 ? `Payment Lag: ${delay} Days` : "Account Spot Ontime"}
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-900/30 transition-colors">
                        <td className="p-4 pl-6 flex items-center gap-3"><Users className="h-4 w-4 text-blue-400" /> Apex Agro Outlets</td>
                        <td className="p-4 font-mono font-bold">₹60,000</td>
                        <td className="p-4"><span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-500/10 border border-rose-500/20 text-rose-400">Critical Default Flag</span></td>
                        <td className="p-4 pr-6 text-slate-400"><span className="flex items-center gap-2"><ShieldAlert className="h-4 w-4 text-rose-400" /> Default Grace Window Exhausted</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 4: INTELLIGENT AI CFO CHAT INTERFACE */}
            {activeTab === 'chat' && (
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-extrabold tracking-tight">Autonomous AI CFO Copilot</h1>
                  <p className="text-sm text-slate-400 mt-1">Direct interactive conversational access context-linked directly to the twin parameter matrix.</p>
                </div>

                <div className="rounded-2xl border border-slate-800/70 bg-slate-900/10 flex flex-col h-[480px] backdrop-blur-xl">
                  <div className="flex-1 p-6 overflow-y-auto space-y-4">
                    {messages.map((m, i) => (
                      <div key={i} className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                        <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 font-bold border ${m.role === 'user' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-900 border-slate-800 text-blue-400'}`}>
                          {m.role === 'user' ? 'U' : <Sparkles className="h-4 w-4" />}
                        </div>
                        <div className={`rounded-2xl p-4 text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600/10 text-blue-100 border border-blue-500/20' : 'bg-slate-900/50 text-slate-200 border border-slate-800/60'}`}>
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleSend} className="p-4 border-t border-slate-800/80 bg-slate-950/60 flex gap-2 rounded-b-2xl">
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask Mithra: 'How should we reconfigure operations for these current distortion balances?'..." className="flex-1 bg-slate-900/60 border border-slate-800 rounded-xl px-4 text-sm focus:outline-none focus:border-blue-500 transition text-slate-200" />
                    <button type="submit" className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition rounded-xl font-semibold text-sm text-white flex items-center gap-2 shadow-lg shadow-blue-600/10">
                      <Send className="h-4 w-4" /> Consult
                    </button>
                  </form>
                </div>
              </div>
            )}

          </div>
        </main>
      </div>
    </div>
  );
}
"use client";
import React, { useState } from 'react';
import { MessageSquare, Send, Sparkles } from 'lucide-react';

export default function AICFOChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Namaste! I am your Mithra AI CFO Agent. Based on your active ledger twins, you have an upcoming working capital gap of ₹2,15,000 in 14 days. How can I assist you with mitigation optimization today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput("");

    // Mimic backend response delay
    setTimeout(() => {
      setMessages([...newMessages, {
        role: 'assistant',
        text: "Analyzing twin ledger parameters... Done. I recommend initiating a smart automated billing discounting trigger for 'Vedic Retail Logistics' bills. Wiping that balance converts your receivables into instant capital at a minimal 1.2% financing cost, fully matching your 14-day liability window."
      }]);
    }, 800);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Autonomous AI CFO Advisor</h1>
        <p className="text-sm text-slate-400">Conversational interface directly hooked into your corporate financial twin engine.</p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/30 flex flex-col h-[450px]">
        {/* Chat Feed */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 max-w-[80%] ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 text-white ${m.role === 'user' ? 'bg-blue-600' : 'bg-slate-800'}`}>
                {m.role === 'user' ? 'U' : <Sparkles className="h-4 w-4 text-blue-400" />}
              </div>
              <div className={`rounded-xl p-3.5 text-sm leading-relaxed ${m.role === 'user' ? 'bg-blue-600/10 text-blue-100 border border-blue-500/20' : 'bg-slate-900/60 text-slate-200 border border-slate-800'}`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input form */}
        <form onSubmit={handleSend} className="p-4 border-t border-slate-800 bg-slate-900/40 flex gap-2">
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about capital runaways, working safety limits, optimization strategies..." className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-4 text-sm focus:outline-none focus:border-blue-500 text-slate-200" />
          <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg font-medium text-sm text-white flex items-center gap-2 shadow-md shadow-blue-600/10">
            <Send className="h-3.5 w-3.5" /> Send
          </button>
        </form>
      </div>
    </div>
  );
}
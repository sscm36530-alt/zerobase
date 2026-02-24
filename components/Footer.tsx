import React from 'react';
import { Leaf, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content - Simplified to Center Layout */}
        <div className="flex flex-col items-center justify-center mb-12 text-center">
            
            {/* Logo Section matching Navbar */}
            <div className="flex items-center gap-3 mb-6 group cursor-default">
                {/* Logo Box */}
                <div className="relative w-[52px] h-[52px] rounded-xl flex flex-col items-center justify-center transition-all duration-500 shadow-lg overflow-hidden border border-white/20 bg-white/10 backdrop-blur-md group-hover:shadow-emerald-500/20">
                    
                    {/* Inner Graphic */}
                    <div className="relative w-7 h-7 mb-0.5 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full border-[1.5px] border-emerald-500/40"></div>
                        <div className="absolute inset-0 rounded-full border-t-[1.5px] border-emerald-400 animate-[spin_4s_linear_infinite]"></div>
                        
                        <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110">
                            <Leaf size={14} className="text-emerald-400 fill-emerald-500/20" strokeWidth={2.5} />
                        </div>

                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-[1px] border border-blue-600 z-20 shadow-sm">
                            <CheckCircle2 size={8} className="text-blue-600 fill-white" />
                        </div>
                    </div>

                    {/* Inner Text */}
                    <div className="w-full flex justify-center">
                        <span className="text-[5px] font-black tracking-widest font-mono leading-none scale-75 text-white">
                        ZEROBASE
                        </span>
                    </div>

                    {/* Shine */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-150%] group-hover:animate-shine pointer-events-none"></div>
                </div>

                <span className="text-xl font-bold text-white tracking-tight">息壤碳数据服务平台</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-lg mx-auto">
              构建碳中和未来的数字基础设施。为绿色经济提供信任、透明度和可追溯性。
            </p>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© 2026 息壤碳数据服务平台. 沪ICP备20260000号</p>
          <p className="text-xs text-slate-600">为可持续发展而设计</p>
        </div>
      </div>
    </footer>
  );
};
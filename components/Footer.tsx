import React from 'react';
import { Leaf, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1120] text-slate-300 py-16 border-t border-white/5 relative overflow-hidden">
      
      {/* Background - Matching WasteExchange */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#172033_0%,_#0f172a_50%,_#020617_100%)]"></div>
      
      {/* Starfield Effect - Dots */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Nebula Glows */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content - Simplified to Center Layout */}
        <div className="flex flex-col items-center justify-center mb-8 text-center">
            
            {/* Simplified Header without Icon */}
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
              息壤碳数据服务平台
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed max-w-lg mx-auto">
              构建碳中和未来的数字基础设施。为绿色经济提供信任、透明度和可追溯性。
            </p>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/5 pt-8 flex flex-col items-center justify-center gap-4">
          <p className="text-xs text-slate-500">© 2026 息壤碳数据服务平台. 沪ICP备20260000号</p>
        </div>
      </div>
    </footer>
  );
};
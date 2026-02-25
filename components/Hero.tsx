import React from 'react';
import { ArrowRight, ShieldCheck, Leaf, Globe, Activity } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Elements - High Saturation Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main Blue/Purple Aurora */}
        <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] bg-gradient-to-r from-cyan-300/30 via-blue-400/30 to-purple-400/30 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite] will-change-transform translate-z-0" />
        
        {/* Bright Cyan Spot */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[80px] mix-blend-multiply animate-[pulse_6s_ease-in-out_infinite_reverse] will-change-transform translate-z-0" />
        
        {/* Vivid Pink/Orange Accent for "pop" */}
        <div className="absolute bottom-[0%] left-[20%] w-[600px] h-[600px] bg-pink-400/20 rounded-full blur-[90px] mix-blend-multiply will-change-transform translate-z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge - Bright Green */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-emerald-200 rounded-full px-4 py-1.5 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 hover:scale-105 transition-transform cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
            <span className="text-emerald-600">v3.0</span> 平台全新升级
          </span>
        </div>

        {/* Main Heading - Colorful Gradient */}
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          构建碳资产的 <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 drop-shadow-sm">数字信任体系</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          息壤打通了从生产到消费的碳数据全生命周期。
          利用区块链技术，实现碳资产的透明化、可验证与可交易。
        </p>

        {/* CTA Buttons - High Vis */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
          <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-bold text-base hover:shadow-[0_10px_40px_-10px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2 shadow-xl shadow-emerald-500/20 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine"></div>
             开启核查 <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold text-base hover:bg-slate-50 hover:text-cyan-600 hover:border-cyan-300 transition-all shadow-sm hover:shadow-lg flex items-center justify-center gap-2">
            查看技术文档
          </button>
        </div>

        {/* Stats / Trust Indicators - Colorful Icons */}
        <div className="mt-20 pt-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-90 animate-in fade-in duration-1000 delay-500">
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-blue-200 group-hover:shadow-xl">
               <ShieldCheck size={24} />
            </div>
            <span className="text-3xl font-black text-slate-900">500+</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">已认证企业</span>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-emerald-200 group-hover:shadow-xl">
               <Leaf size={24} />
            </div>
            <span className="text-3xl font-black text-slate-900">120万</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">吨 CO2e 碳管理量</span>
          </div>
          <div className="flex flex-col items-center group">
             <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-3 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-purple-200 group-hover:shadow-xl">
               <Activity size={24} />
            </div>
            <span className="text-3xl font-black text-slate-900">24/7</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">实时碳监测</span>
          </div>
          <div className="flex flex-col items-center group">
             <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-3 group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300 shadow-sm group-hover:shadow-cyan-200 group-hover:shadow-xl">
               <Globe size={24} />
            </div>
            <span className="text-3xl font-black text-slate-900">国际</span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">标准认证</span>
          </div>
        </div>
      </div>
    </section>
  );
};
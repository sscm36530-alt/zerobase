import React from 'react';
import { Leaf, ArrowRight, Building2, Package } from 'lucide-react';

const cases = [
  {
    id: 1,
    company: "全球知名餐饮连锁品牌 M",
    industry: "公共空间",
    summary: "采购已认证固纺户外地板，\n替代原生木质户外地板。\n\n系统自动核算对应减碳量，\n并完成链上资产转入确认。",
    tag: "固纺再生",
    icon: Building2,
    reductionValue: "3,150",
    reductionUnit: "tCO₂e",
    color: "blue",
    assetStatus: ["已确权", "可披露", "可入账"]
  },
  {
    id: 2,
    company: "上海市宝山区市政建设 A",
    industry: "公共空间",
    summary: "采购已认证固纺户外地板，\n替代原生木质材料。\n\n完成减碳量资产转入确认，\n形成区域绿色建设数据样本。",
    tag: "固纺再生",
    icon: Leaf,
    reductionValue: "12,400",
    reductionUnit: "tCO₂e",
    color: "purple",
    assetStatus: ["已确权", "可披露", "可入账"]
  },
  {
    id: 3,
    company: "港口企业 S",
    industry: "港口物流",
    summary: "采购已认证固纺物流托盘，\n替代原生塑料托盘。\n\n系统完成减碳量接收与资产登记。",
    tag: "固纺再生",
    icon: Package,
    reductionValue: "5,600",
    reductionUnit: "tCO₂e",
    color: "pink",
    assetStatus: ["已确权", "可披露", "可入账"]
  }
];

interface CaseStudiesProps {
  onRegisterClick?: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onRegisterClick }) => {
  return (
    <section id="cases" className="py-24 bg-gradient-to-b from-purple-50/50 via-white to-blue-50/50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">
            绿色采购与<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">碳资产入账</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed font-light">
            采购认证低碳产品，同步接收真实减碳量，<br className="hidden md:block"/>
            实现碳资产确权与合规披露。
          </p>
        </div>

        {/* Cards Grid - Light Cards with Premium Shadow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.id} className={`group relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-[0_20px_50px_-12px_rgba(124,58,237,0.15)] transition-all duration-500 flex flex-col h-full overflow-hidden hover:-translate-y-2 border border-white/60 ring-1 ring-slate-100 hover:ring-${item.color}-400`}>
              
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-${item.color}-400 to-${item.color}-600 opacity-0 group-hover:opacity-100 transition-opacity`}></div>

              {/* Decorative Watermark */}
              <div className={`absolute -bottom-8 -right-8 text-${item.color}-50 group-hover:text-${item.color}-100 transition-colors duration-500 rotate-12`}>
                <item.icon size={160} strokeWidth={1} />
              </div>

              {/* Tag */}
              <div className="relative z-10 flex justify-between items-start mb-6">
                 <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-sm text-slate-500 text-[10px] font-bold tracking-wider border border-slate-100 uppercase group-hover:bg-${item.color}-500 group-hover:text-white group-hover:border-${item.color}-500 transition-all`}>
                    {item.industry}
                 </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {item.company}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 whitespace-pre-line">
                  {item.summary}
                </p>
              </div>
              
              {/* Metric */}
              <div className="relative z-10 mt-auto pt-6 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Leaf size={12} className={`text-${item.color}-500`} /> 获得减碳量
                  </span>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className={`text-5xl font-black text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-${item.color}-600 group-hover:to-${item.color}-400 transition-all duration-300 tabular-nums tracking-tight`}>
                      {item.reductionValue}
                    </span>
                    <span className="text-sm font-bold text-slate-400">
                      {item.reductionUnit}
                    </span>
                  </div>
                  
                  {/* Asset Status for Brand M */}
                  {item.assetStatus && (
                    <div className="mt-2">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">资产状态</span>
                      <div className="flex gap-2">
                        {item.assetStatus.map((status, idx) => (
                          <span key={idx} className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                            {status}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Purchaser Banner - Deep Blue Gradient (Matching Registration Process) */}
        <div className="mt-8 relative bg-gradient-to-br from-blue-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_20px_50px_-12px_rgba(124,58,237,0.15)] transition-all duration-500 group border border-white/10">
           
           {/* --- Dynamic Background Effects (Ported from RegistrationProcess) --- */}
           
           {/* 1. Base Mesh */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
           
           {/* 2. Floating Particles (SVG) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <svg className="w-full h-full" preserveAspectRatio="none">
                 <defs>
                   <radialGradient id="particle-glow-cs" cx="50%" cy="50%" r="50%">
                     <stop offset="0%" stopColor="white" stopOpacity="0.8"/>
                     <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
                   </radialGradient>
                 </defs>
                 {/* Generate randomized moving particles */}
                 {[...Array(25)].map((_, i) => (
                   <circle
                     key={i}
                     cx={`${Math.random() * 100}%`}
                     cy={`${Math.random() * 100}%`}
                     r={Math.random() * 3 + 1}
                     fill="url(#particle-glow-cs)"
                     className="animate-pulse"
                     opacity={Math.random() * 0.5 + 0.1}
                   >
                     <animate
                       attributeName="cy"
                       from="110%"
                       to="-10%"
                       dur={`${12 + Math.random() * 20}s`}
                       repeatCount="indefinite"
                       begin={`-${Math.random() * 15}s`}
                     />
                     <animate
                       attributeName="cx"
                       values={`${Math.random() * 100}%;${Math.random() * 100 + (Math.random() * 20 - 10)}%`}
                       dur={`${15 + Math.random() * 15}s`}
                       repeatCount="indefinite"
                       />
                     <animate
                       attributeName="opacity"
                       values="0;0.6;0"
                       dur={`${5 + Math.random() * 5}s`}
                       repeatCount="indefinite"
                       begin={`-${Math.random() * 10}s`}
                     />
                   </circle>
                 ))}
              </svg>
            </div>

           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700 mix-blend-screen"></div>

           <div className="relative z-10 px-8 py-10 md:flex items-center justify-between gap-8">
             
             {/* Left Text - White for dark background */}
             <div className="flex-1">
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                 加入绿色供应链网络
               </h3>
               <p className="text-slate-300 text-sm md:text-base font-medium max-w-none md:whitespace-nowrap leading-relaxed">
                 注册成为认证采购商，优先对接标准化低碳再生产品，自动接收减碳量资产，支撑企业双碳目标与ESG披露。
               </p>
             </div>

             {/* Right Button - White/Blue High Contrast */}
             <div className="mt-6 md:mt-0 flex-shrink-0">
               <button 
                onClick={onRegisterClick}
                className="bg-white hover:bg-blue-50 text-blue-900 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-white/20 transition-all flex items-center gap-2"
               >
                 注册成为采购商 <ArrowRight size={18} />
               </button>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};
import React from 'react';
import { ShieldCheck, Zap, Lock, Users } from 'lucide-react';

const features = [
  {
    title: "让减碳成果算得清",
    desc: [
      "依托权威方法学与行业标准",
      "开展减碳量核算与第三方认证",
      "确保成果真实可靠、可核算、可认证"
    ],
    icon: ShieldCheck,
  },
  {
    title: "让减碳成果变成资产",
    desc: [
      "生产数据实时存证",
      "自动生成资产编号",
      "支持在线确权与转移确认"
    ],
    icon: Zap,
  },
  {
    title: "让数据真实可信",
    desc: [
      "关键数据链上固化",
      "全流程可追溯、可验证",
      "满足审计与披露需求"
    ],
    icon: Lock,
  },
  {
    title: "让落地更简单",
    desc: [
      "专业团队与认证机构协同支持",
      "提供从量化到入账的完整解决路径"
    ],
    icon: Users,
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="advantages" className="py-24 bg-white relative overflow-hidden font-sans scroll-mt-24">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">
            平台核心能力
          </h2>
          <p className="text-slate-500 text-lg font-normal leading-relaxed">
            从数据生成到资产入账，构建减碳成果可量化、可确权、可流转的完整闭环。
          </p>
        </div>

        {/* Grid - Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gradient-to-b from-white to-blue-50/30 rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-12px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col h-full border border-blue-100/60 hover:border-blue-200 overflow-hidden"
            >
              {/* Subtle Top Gradient Line - Unified Blue, Thicker on Hover */}
              <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="mb-6">
                 <div className="inline-flex p-2 rounded-lg bg-blue-50/30 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors duration-300">
                    <item.icon size={24} strokeWidth={1.5} />
                 </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-snug group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
              
              {/* Description List */}
              <ul className="space-y-3 mt-auto">
                {item.desc.map((line, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500 text-[15px] leading-7 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
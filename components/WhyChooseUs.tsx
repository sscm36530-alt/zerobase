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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">
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
              className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Tech Accent Line - Always Visible */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              
              {/* Icon - Tech Color by Default */}
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 group-hover:bg-cyan-100 group-hover:scale-110 transition-all duration-300 shadow-sm">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-700 transition-colors duration-300">
                {item.title}
              </h3>
              
              {/* Description List */}
              <ul className="space-y-3 mt-auto">
                {item.desc.map((line, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 text-sm leading-relaxed whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                    {line}
                  </li>
                ))}
              </ul>

              {/* Subtle Tech Background Pattern */}
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-gradient-to-tl from-cyan-50/50 to-transparent rounded-tl-full -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
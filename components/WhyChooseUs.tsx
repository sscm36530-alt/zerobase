import React from 'react';
import { ShieldCheck, Zap, Lock, Users } from 'lucide-react';

const features = [
  {
    id: "01",
    title: "让减碳成果算得清",
    desc: [
      "依托权威方法学与行业标准",
      "开展减碳量核算与第三方认证",
      "确保成果真实可靠、可核算、可认证"
    ],
    icon: ShieldCheck,
    gradient: "from-blue-600 to-indigo-600",
    bgGradient: "from-blue-500/10 to-indigo-500/5",
    border: "border-blue-200 hover:border-blue-500"
  },
  {
    id: "02",
    title: "让减碳成果变成资产",
    desc: [
      "生产数据实时存证",
      "自动生成资产编号",
      "支持在线确权与转移确认"
    ],
    icon: Zap,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/5",
    border: "border-emerald-200 hover:border-emerald-500"
  },
  {
    id: "03",
    title: "让数据真实可信",
    desc: [
      "关键数据链上固化",
      "全流程可追溯、可验证",
      "满足审计与披露需求"
    ],
    icon: Lock,
    gradient: "from-orange-500 to-amber-600",
    bgGradient: "from-orange-500/10 to-amber-500/5",
    border: "border-orange-200 hover:border-orange-500"
  },
  {
    id: "04",
    title: "让落地更简单",
    desc: [
      "专业团队与认证机构协同支持",
      "提供从量化到入账的完整解决路径"
    ],
    icon: Users,
    gradient: "from-purple-600 to-fuchsia-600",
    bgGradient: "from-purple-500/10 to-fuchsia-500/5",
    border: "border-purple-200 hover:border-purple-500"
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="advantages" className="py-28 bg-slate-50 relative overflow-hidden font-sans scroll-mt-24">
      
      {/* Background Tech Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-100/50 to-transparent rounded-full blur-3xl -z-10"></div>
      
      {/* Background Icons Removed */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Centered & Updated Text */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          {/* Badge Removed */}
          
          <h2 className="text-4xl md:text-5xl font-normal text-slate-900 tracking-tight mb-8 drop-shadow-sm">
            平台核心能力
          </h2>
          <p className="text-slate-600 text-lg font-light leading-snug max-w-3xl mx-auto">
            从数据生成到资产入账，
            <br />
            <span className="mt-1 block">构建减碳成果可量化、可确权、可流转的完整闭环。</span>
          </p>
        </div>

        {/* Grid - High Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative h-full bg-white p-8 rounded-2xl border transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-2 overflow-hidden ${item.border}`}
            >
              {/* Inner Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Animated Top Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

              {/* Large Stylized Number */}
              <div className="absolute -right-4 -top-8 text-[7rem] font-black text-slate-50 group-hover:text-slate-100/50 transition-colors duration-500 select-none pointer-events-none tracking-tighter z-0 opacity-50">
                {item.id}
              </div>

              {/* Icon Container with Glow - Rotation removed, Size Reduced */}
              <div className="relative z-10 mb-8">
                 <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${item.gradient} text-white shadow-lg ring-2 ring-white`}>
                    <item.icon size={20} strokeWidth={1.5} />
                 </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-700 transition-colors">
                  {item.title}
                </h3>
                
                {/* Description Rendering - List Format with Dots */}
                <div className="space-y-3">
                  {item.desc.map((line, i) => (
                    <div key={i} className="flex items-center gap-2.5 group-hover:translate-x-1 transition-transform duration-300">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.gradient} shrink-0`} />
                      <span className="text-slate-500 text-sm font-medium whitespace-nowrap group-hover:text-slate-700 transition-colors">
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shine Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-150%] group-hover:animate-shine pointer-events-none z-20"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
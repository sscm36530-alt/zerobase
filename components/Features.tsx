import React from 'react';
import { BarChart3, Layers, Lock, Zap } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "让减碳成果算得清",
    description: "依托权威方法学与行业标准\n开展减碳量核算与第三方认证\n确保成果真实可靠、可核算、可认证",
    icon: BarChart3
  },
  {
    title: "让减碳成果变成资产",
    description: "生产数据实时存证\n自动生成资产编号\n支持在线确权与转移确认",
    icon: Layers
  },
  {
    title: "让数据真实可信",
    description: "关键数据链上固化\n全流程可追溯、可验证\n满足审计与披露需求",
    icon: Lock
  },
  {
    title: "让落地更简单",
    description: "专业团队与认证机构协同支持\n提供从量化到入账的完整解决路径",
    icon: Zap
  }
];

export const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative">
       {/* Ambient Light */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-slate-50 to-white -z-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-normal text-sm uppercase tracking-widest mb-2 block">平台核心能力</span>
          <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-4">一站式碳合规解决方案</h2>
          <p className="text-slate-500 text-lg">
            息壤为制造商、采购商和审计机构提供了一套全面的工具套件，高效管理环境影响与合规风险。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            return (
              <div key={idx} className="group relative bg-gradient-to-b from-white to-blue-50/30 rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_-12px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col h-full border border-blue-100/60 hover:border-blue-200">
                
                {/* Subtle Top Gradient Line - Unified Blue, Thicker on Hover */}
                <div className="absolute top-0 left-6 right-6 h-[3px] bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="mb-6">
                    <div className="inline-flex p-2 rounded-lg bg-blue-50/30 text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors duration-300">
                        <feature.icon size={24} strokeWidth={1.5} />
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
                <p className="text-slate-500 leading-7 text-[15px] whitespace-pre-line font-light">
                    {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
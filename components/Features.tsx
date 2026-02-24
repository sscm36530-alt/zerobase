import React from 'react';
import { Layers, Recycle, BarChart3, Lock, Zap, Search } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "产品碳足迹 (PCF)",
    description: "基于国际标准的自动 LCA（生命周期评价）计算。即时生成数字产品护照 (DPP)。",
    icon: Layers,
    // Add color props for customization
  },
  {
    title: "分布式碳账本",
    description: "基于区块链的不可篡改账本，用于追踪碳信用、配额和自愿减排量资产。",
    icon: Lock
  },
  {
    title: "供应链全链路溯源",
    description: "涵盖 N 级供应商的端到端碳数据可视化，采用“四流合一”交叉验证技术。",
    icon: Search
  },
  {
    title: "循环经济",
    description: "追踪认证产品的再生材料含量，量化废弃物减量影响，助力绿色闭环。",
    icon: Recycle
  },
  {
    title: "智能分析仪表盘",
    description: "实时监控排放热点，AI 辅助识别减排潜力，自动生成合规报告。",
    icon: BarChart3
  },
  {
    title: "快速认证服务",
    description: "标准化的 7 步核查流程，将认证周期缩短高达 60%，降低合规成本。",
    icon: Zap
  }
];

// Helper to get color based on index for variety
const getColor = (idx: number) => {
  const colors = [
    'text-blue-600 bg-blue-50 group-hover:bg-blue-600',
    'text-purple-600 bg-purple-50 group-hover:bg-purple-600',
    'text-cyan-600 bg-cyan-50 group-hover:bg-cyan-600',
    'text-emerald-600 bg-emerald-50 group-hover:bg-emerald-600',
    'text-indigo-600 bg-indigo-50 group-hover:bg-indigo-600',
    'text-orange-600 bg-orange-50 group-hover:bg-orange-600',
  ];
  return colors[idx % colors.length];
};

const getShadowColor = (idx: number) => {
    const shadows = [
        'group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] group-hover:border-blue-200',
        'group-hover:shadow-[0_20px_40px_-15px_rgba(147,51,234,0.2)] group-hover:border-purple-200',
        'group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)] group-hover:border-cyan-200',
        'group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.2)] group-hover:border-emerald-200',
        'group-hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)] group-hover:border-indigo-200',
        'group-hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.2)] group-hover:border-orange-200',
    ];
    return shadows[idx % shadows.length];
}

export const Features: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-white relative">
       {/* Ambient Light */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-b from-slate-50 to-white -z-10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2 block">核心能力</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">一站式碳合规解决方案</h2>
          <p className="text-slate-500 text-lg">
            息壤为制造商、采购商和审计机构提供了一套全面的工具套件，高效管理环境影响与合规风险。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const colorClass = getColor(idx);
            const shadowClass = getShadowColor(idx);
            
            return (
                <div 
                key={idx} 
                className={`group p-8 rounded-3xl bg-white border border-slate-100 transition-all duration-300 cursor-default hover:-translate-y-1 ${shadowClass}`}
                >
                <div className={`w-14 h-14 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${colorClass}`}>
                    <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
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
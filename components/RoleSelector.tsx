import React from 'react';
import { Factory, ShoppingBag, Recycle, Landmark, ArrowRight, Users, CheckCircle } from 'lucide-react';

const roles = [
  {
    id: 'manufacturer',
    title: '生产企业',
    subtitle: 'Manufacturing',
    icon: Factory,
    desc: '一键发起产品碳足迹核算，快速获取国际认可的合规证书。',
    stat: '500+ 已认证企业',
    statIcon: Users,
    color: 'emerald', // Theme color
    bgGradient: 'from-emerald-50 to-white',
    hoverBorder: 'hover:border-emerald-300'
  },
  {
    id: 'buyer',
    title: '采购企业',
    subtitle: 'Procurement',
    icon: ShoppingBag,
    desc: '建立绿色供应链标准，通过数据看板实时追踪供应商碳排放绩效。',
    stat: '100% 数据可溯源',
    statIcon: CheckCircle,
    color: 'blue',
    bgGradient: 'from-blue-50 to-white',
    hoverBorder: 'hover:border-blue-300'
  },
  {
    id: 'supplier',
    title: '固废供应',
    subtitle: 'Recycling',
    icon: Recycle,
    desc: '将废弃物回收数据转化为碳减排量，实现从废料到碳资产的价值变现。',
    stat: '86万吨 废弃物减量',
    statIcon: Recycle,
    color: 'teal',
    bgGradient: 'from-teal-50 to-white',
    hoverBorder: 'hover:border-teal-300'
  },
  {
    id: 'government',
    title: '政府监管',
    subtitle: 'Government',
    icon: Landmark,
    desc: '区域碳排放实时监测驾驶舱，为产业低碳转型政策制定提供数据支撑。',
    stat: '24/7 实时监测',
    statIcon: Landmark,
    color: 'slate',
    bgGradient: 'from-slate-100 to-white',
    hoverBorder: 'hover:border-slate-400'
  }
];

export const RoleSelector: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-2 block">
            角色导航
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            专为您定制的碳管理方案
          </h2>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
            无论您处于产业链的哪个环节，息壤都能提供针对性的数字化工具。
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div 
              key={role.id} 
              className={`group relative rounded-2xl p-6 border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b ${role.bgGradient} ${role.hoverBorder}`}
            >
              {/* Header: Icon & Title */}
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 rounded-xl bg-white shadow-sm text-${role.color}-600 group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon size={28} strokeWidth={1.5} />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-300 transform translate-x-2 group-hover:translate-x-0 duration-300">
                  <ArrowRight size={20} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {role.title}
              </h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                {role.subtitle}
              </p>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 h-16">
                {role.desc}
              </p>

              {/* Footer: Stat & Action */}
              <div className="pt-6 border-t border-slate-200/60 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-white/60 px-2 py-1 rounded-md">
                  <role.statIcon size={12} className={`text-${role.color}-500`} />
                  {role.stat}
                </div>
              </div>

              {/* Hover Overlay Button Area */}
              <div className="absolute inset-0 z-10 cursor-pointer" onClick={() => console.log(`Selected ${role.title}`)}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
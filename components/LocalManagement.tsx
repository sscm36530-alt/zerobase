import React from 'react';
import { MapPin } from 'lucide-react';

const regions = [
  { name: "浙江省", companies: 156, reduction: "12.5万" },
  { name: "江苏省", companies: 124, reduction: "9.8万" },
  { name: "广东省", companies: 98, reduction: "8.2万" },
  { name: "上海市", companies: 75, reduction: "5.4万" },
];

export const LocalManagement: React.FC = () => {
  return (
    <section id="local" className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest block mb-2">区域协同</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              属地化碳管理服务
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              息壤平台支持省、市、园区等多级属地化部署，为地方政府和园区管理者提供区域碳排放监测、产业低碳转型分析等决策支持服务。
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {regions.map((region, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 flex items-center gap-1">
                      <MapPin size={14} className="text-emerald-500" /> {region.name}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">入驻企业</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-slate-800">{region.companies}</div>
                    <div className="text-[10px] text-green-600">减排 {region.reduction}t</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] bg-white rounded-3xl shadow-xl border border-slate-100 p-8 flex items-center justify-center overflow-hidden">
            {/* Abstract Map Representation */}
            <div className="absolute inset-0 bg-slate-50 opacity-50">
              <div className="w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            </div>
            
            <div className="relative z-10 w-full h-full flex items-center justify-center">
               <div className="relative w-64 h-64">
                 {/* Decorative circles simulating map nodes */}
                 <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-500 rounded-full animate-ping"></div>
                 <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-lg"></div>
                 
                 <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500 rounded-full animate-ping delay-300"></div>
                 <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>

                 <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-indigo-500 rounded-full animate-ping delay-700"></div>
                 <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-indigo-500 rounded-full border-4 border-white shadow-lg"></div>

                 {/* Connecting lines SVG */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-md">
                   <path d="M70 70 Q 150 120 180 140" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                   <path d="M70 70 Q 100 180 130 180" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                 </svg>
                 
                 <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-slate-300 font-bold text-4xl select-none">区域地图</span>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
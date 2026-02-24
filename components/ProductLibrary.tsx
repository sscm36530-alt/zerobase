import React from 'react';
import { Package, Droplets, Shirt, Hammer, Cpu, QrCode, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';

const products: Product[] = [
  { id: 1, name: "rPET 聚酯切片", company: "浙江新材料有限公司", category: "再生塑料", footprint: "0.45", status: "certified", icon: Package },
  { id: 2, name: "再生涤纶短纤", company: "江苏纺织集团", category: "再生纺织", footprint: "1.20", status: "certified", icon: Shirt },
  { id: 3, name: "低碳铝合金锭", company: "山东铝业股份", category: "再生金属", footprint: "2.80", status: "pending", icon: Hammer },
  { id: 4, name: "环保包装箱", company: "广东包装科技", category: "包装材料", footprint: "0.15", status: "certified", icon: Package },
  { id: 5, name: "车用注塑件", company: "上海汽车部件", category: "汽车零部件", footprint: "3.50", status: "certified", icon: Cpu },
  { id: 6, name: "生物基涂料", company: "北京环保科技", category: "化工建材", footprint: "0.90", status: "certified", icon: Droplets },
];

export const ProductLibrary: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-white skew-x-[-12deg] translate-x-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Aligned Left with Bar */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1.5 h-8 bg-emerald-600 rounded-sm"></div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-wide">
            已认证低碳产品库
          </h2>
        </div>

        {/* Premium "Digital Passport" Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-xl p-0 transition-all duration-300 hover:shadow-2xl border border-slate-200 hover:border-emerald-200 overflow-hidden flex flex-col sm:flex-row h-auto sm:h-48">
              
              {/* Left: Icon & Category (The "Stamp" Area) */}
              <div className="w-full sm:w-32 bg-slate-50 flex flex-col items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-slate-100 group-hover:bg-slate-900 transition-colors duration-500">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm mb-3">
                   {product.icon && <product.icon size={20} strokeWidth={2} />}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-500 transition-colors text-center">
                  {product.category}
                </span>
              </div>

              {/* Right: Info & Data */}
              <div className="flex-1 p-6 flex flex-col justify-between relative">
                
                {/* Status Indicator Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.status === 'certified' ? 'from-emerald-400 to-emerald-600' : 'from-yellow-400 to-yellow-600'}`}></div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{product.name}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-1">{product.company}</p>
                  </div>
                  <QrCode size={20} className="text-slate-300 group-hover:text-slate-900 transition-colors" />
                </div>

                <div className="flex items-end justify-between mt-6">
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">碳足迹 (PCF)</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-black text-slate-800">{product.footprint}</span>
                      <span className="text-xs font-bold text-slate-400">kgCO2e</span>
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full transition-colors">
                    查看证书 <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
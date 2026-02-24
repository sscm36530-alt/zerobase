import React, { useState } from 'react';
import { Factory, ShoppingCart, Award, ArrowRightLeft, CheckCircle2 } from 'lucide-react';

const tabs = [
  { id: 'production', label: '生产端', icon: Factory, title: "产品评价与核查", desc: "一键发起产品碳足迹评价，对接第三方核查机构，获取权威认证证书。" },
  { id: 'procurement', label: '采购端', icon: ShoppingCart, title: "绿色供应链采购", desc: "管理供应商碳数据，建立绿色采购标准，实现范围三排放可追溯。" },
  { id: 'certification', label: '认证端', icon: Award, title: "数字化认证管理", desc: "全流程数字化审核，标准化的核查清单，大幅提升发证效率。" },
  { id: 'asset', label: '碳资产', icon: ArrowRightLeft, title: "碳资产流转账本", desc: "基于区块链的碳资产划转，确保每一次流转都可信、可查、不可篡改。" },
];

export const SystemShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('production');
  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Aligned Left with Bar */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-wide">
            一站式碳信息管理系统
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Navigation */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-slate-50 border-l-4 border-emerald-500 shadow-sm' 
                    : 'bg-white border-l-4 border-transparent hover:bg-slate-50 text-slate-500'
                }`}
              >
                <div className={`p-3 rounded-lg mr-4 ${activeTab === tab.id ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}>
                  <tab.icon size={24} />
                </div>
                <div>
                  <h3 className={`font-bold text-lg ${activeTab === tab.id ? 'text-slate-900' : 'text-slate-600'}`}>
                    {tab.label}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {tab.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Mock UI */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900 p-2 rounded-2xl shadow-2xl">
              {/* Browser Header */}
              <div className="bg-slate-800 rounded-t-xl px-4 py-3 flex items-center gap-2 mb-1">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 bg-slate-900/50 rounded-md px-3 py-1 text-xs text-slate-400 flex-grow font-mono">
                  
                </div>
              </div>
              
              {/* Content Area */}
              <div className="bg-slate-50 rounded-b-xl min-h-[400px] p-6">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">{currentTab.title}</h3>
                    <p className="text-slate-500 text-sm">上次更新：2分钟前</p>
                  </div>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md">
                    + 新建任务
                  </button>
                </div>

                {/* Simulated Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <div className="text-slate-400 text-xs mb-1">待处理任务</div>
                    <div className="text-2xl font-bold text-slate-800">12</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <div className="text-slate-400 text-xs mb-1">进行中</div>
                    <div className="text-2xl font-bold text-blue-600">5</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <div className="text-slate-400 text-xs mb-1">已完成</div>
                    <div className="text-2xl font-bold text-emerald-600">128</div>
                  </div>
                </div>

                {/* Simulated Table */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
                  <div className="grid grid-cols-4 gap-4 p-4 border-b border-slate-100 bg-slate-50 text-xs font-bold text-slate-500 uppercase">
                    <div>项目名称</div>
                    <div>状态</div>
                    <div>进度</div>
                    <div>操作</div>
                  </div>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 p-4 border-b border-slate-50 text-sm items-center hover:bg-slate-50">
                      <div className="font-medium text-slate-700">项目编号 202400{i}</div>
                      <div>
                        <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">进行中</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${i * 30}%` }}></div>
                      </div>
                      <div className="text-blue-600 font-medium text-xs cursor-pointer">查看详情</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
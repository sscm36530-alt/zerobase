import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const ContactUs: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-slate-100 relative overflow-hidden font-sans scroll-mt-24">
      
      {/* Advanced Background: Dot Pattern & Subtle Gradients */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-200/20 rounded-full blur-[120px] mix-blend-multiply"></div>
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[120px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Shortened/Compact */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">
             开启您的数字化碳管理之旅
           </h2>
           <p className="text-slate-500 text-base font-medium leading-relaxed">
             无论是企业碳核算、供应链管理还是碳资产确权，我们的专家团队随时为您提供支持。
           </p>
        </div>

        {/* Main Split-Card Container */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row min-h-[500px] border border-slate-100 ring-1 ring-slate-900/5">
          
          {/* LEFT PANEL: Contact Information (Optimized Background - Cleaner Blue/Slate) */}
          <div className="lg:w-2/5 bg-gradient-to-br from-blue-900 to-slate-900 relative p-8 lg:p-12 flex flex-col text-white overflow-hidden">
            
            {/* Background Decor - More Subtle & Premium */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
            {/* Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-1">联系方式</h3>
              <p className="text-slate-400 text-sm mb-8 font-medium">
                客户支持中心
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-0.5">咨询热线</p>
                    <p className="text-xl font-bold tracking-tight text-white">400-888-6666</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-0.5">商务合作邮箱</p>
                    <p className="text-base font-bold text-white">business@zero-base.cn</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all duration-300">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-0.5">联系地址</p>
                    <p className="text-sm font-bold text-white leading-relaxed">
                      上海市宝山区罗店路388弄<br/>
                      MAX科技园21幢
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: Interactive Form */}
          <div className="lg:w-3/5 p-8 lg:p-12 bg-white relative flex flex-col">
             <form className="h-full flex flex-col">
                
                <div className="mb-6">
                   <h3 className="text-2xl font-bold text-slate-900 mb-1">发送留言</h3>
                   <p className="text-slate-500 text-xs font-medium">填写下方表单，我们将为您安排专属顾问进行一对一演示。</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                   <div className="group">
                      <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-900 transition-colors">您的姓名</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 text-base font-bold focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 placeholder:font-medium placeholder:text-sm" placeholder="请输入联系人姓名" />
                   </div>
                   <div className="group">
                      <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-900 transition-colors">联系电话</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 text-base font-bold focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 placeholder:font-medium placeholder:text-sm" placeholder="用于顾问回访沟通" />
                   </div>
                </div>

                <div className="mb-4 group">
                   <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-900 transition-colors">企业/机构名称</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 text-base font-bold focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 placeholder:font-medium placeholder:text-sm" placeholder="请填写企业全称" />
                </div>

                <div className="mb-4">
                   <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">咨询方向</label>
                   {/* Layout changed to grid-cols-2 for better readability of longer options */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {['产品评价与减碳量化', '绿色采购与资产接收', '再生资源供需对接', '其他商务合作'].map((tag) => (
                         <label key={tag} className="cursor-pointer group relative">
                            <input type="radio" name="type" className="peer sr-only" />
                            <div className="w-full text-center px-3 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-sm font-bold peer-checked:bg-slate-800 peer-checked:text-white peer-checked:border-slate-800 peer-checked:shadow-md group-hover:bg-slate-100 transition-all duration-300 h-full flex items-center justify-center leading-tight">
                               {tag}
                            </div>
                         </label>
                      ))}
                   </div>
                </div>

                <div className="mb-6 group">
                   <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-1.5 group-focus-within:text-blue-900 transition-colors">需求描述</label>
                   <textarea rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 text-base font-medium focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all resize-none placeholder:text-slate-400 placeholder:font-medium placeholder:text-sm" placeholder="请简要描述您的业务场景"></textarea>
                </div>

                <button type="button" className="w-full bg-gradient-to-br from-blue-900 to-slate-900 hover:from-blue-800 hover:to-slate-800 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                   <span className="text-base">提交留言</span>
                   <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <Send size={12} className="group-hover:translate-x-0.5 transition-transform" />
                   </div>
                </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};
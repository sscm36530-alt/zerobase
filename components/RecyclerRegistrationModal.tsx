import React, { useState, useEffect } from 'react';
import { X, Recycle, Check, Phone, ArrowRight, ArrowLeft, Building2, Truck, Scale, ShieldCheck } from 'lucide-react';

interface RecyclerRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecyclerRegistrationModal: React.FC<RecyclerRegistrationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [countdown, setCountdown] = useState(0);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep(1);
        setCountdown(0);
      }, 300); // Wait for fade out
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // SMS Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSendCode = () => {
    if (countdown === 0) setCountdown(60);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop - Click to close REMOVED */}
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"></div>

      {/* Modal Container - Matches Registration Modal Size & Layout */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[85vh] overflow-hidden animate-in zoom-in-95 duration-300 flex flex-col md:flex-row ring-1 ring-slate-900/5">
        
        {/* Left Panel - Decorative/Info */}
        <div className="hidden md:flex w-[45%] bg-gradient-to-br from-slate-50 via-blue-50 to-white relative items-center justify-center overflow-hidden border-r border-slate-100 shrink-0">
             
             {/* Content */}
             <div className="relative z-10 p-12 text-slate-900 max-w-md">
                 <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-8">
                    <Recycle size={32} className="text-emerald-600" />
                 </div>
                 <h2 className="text-3xl font-black mb-6 leading-tight text-slate-900">开启您的<br/>回收企业账户</h2>
                 <p className="text-slate-600 leading-relaxed text-lg mb-10 font-medium">
                     加入再生资源流通网络，<br/>实现资源高效流转与价值最大化。
                 </p>
                 <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                            <Scale size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <strong className="block text-slate-900 text-base mb-1">供需智能匹配</strong>
                            <span className="text-slate-500 text-sm">汇集供需信息，自动生成流转数据</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                            <Truck size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <strong className="block text-slate-900 text-base mb-1">物流全程追溯</strong>
                            <span className="text-slate-500 text-sm">记录运输轨迹，形成完整链路</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 mt-0.5">
                            <ShieldCheck size={16} strokeWidth={3} />
                        </div>
                        <div>
                            <strong className="block text-slate-900 text-base mb-1">交易权益保障</strong>
                            <span className="text-slate-500 text-sm">保障买卖权益，生成交易记录</span>
                        </div>
                    </div>
                 </div>
             </div>
        </div>

        {/* Right Panel - Form Content */}
        <div className="w-full md:w-[55%] flex flex-col h-full bg-white relative">
            
            {/* Header with Navigation */}
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
                <div className="flex items-center gap-4">
                    {step > 1 && (
                        <button 
                            onClick={() => setStep(step - 1)} 
                            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
                            title="返回上一步"
                        >
                            <ArrowLeft size={20} />
                        </button>
                    )}
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                            {step === 1 && '填写企业信息'}
                            {step === 2 && '安全验证'}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-2">
                            <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? 'w-8 bg-emerald-500' : 'w-3 bg-slate-200'}`}></div>
                            <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-8 bg-emerald-500' : 'w-3 bg-slate-200'}`}></div>
                        </div>
                    </div>
                </div>
                <button onClick={onClose} className="p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors">
                    <X size={24} />
                </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar flex-1">
                
                {/* STEP 1: Basic Info */}
                {step === 1 && (
                    <form className="space-y-6 max-w-lg mx-auto py-4" onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                        
                        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 mb-8 flex items-start gap-4">
                            <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600 shrink-0">
                                <Building2 size={20} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-emerald-900 mb-1">回收企业资质认证</h4>
                                <p className="text-xs text-emerald-700/80 leading-relaxed">请确保信息与营业执照一致，我们将通过国家企业信用信息公示系统进行自动核验。</p>
                            </div>
                        </div>

                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">企业全称 <span className="text-red-500">*</span></label>
                                <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="请输入完整企业名称" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">统一社会信用代码 <span className="text-red-500">*</span></label>
                                <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="18位代码" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">联系人姓名 <span className="text-red-500">*</span></label>
                                <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="填写真实姓名" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">主营回收品类 (选填)</label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-medium text-slate-700 text-sm appearance-none cursor-pointer">
                                        <option value="">请选择回收品类...</option>
                                        <option>废旧塑料</option>
                                        <option>废旧金属</option>
                                        <option>废旧纺织品</option>
                                        <option>废纸</option>
                                        <option>废旧玻璃</option>
                                        <option>其他</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <ArrowRight size={14} className="rotate-90" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mt-4 group">
                            下一步 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                )}

                {/* STEP 2: Verification (SMS) */}
                {step === 2 && (
                    <form className="space-y-6 max-w-lg mx-auto py-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">手机号码 <span className="text-red-500">*</span></label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                                        <Phone size={18} />
                                    </div>
                                    <input required type="tel" className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="请输入11位手机号" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">短信验证码 <span className="text-red-500">*</span></label>
                                <div className="flex gap-3">
                                    <input required type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm text-center tracking-widest placeholder:tracking-normal placeholder:font-normal" placeholder="6位数字" maxLength={6} />
                                    <button 
                                        type="button" 
                                        onClick={handleSendCode}
                                        disabled={countdown > 0}
                                        className={`shrink-0 w-36 rounded-xl text-xs font-bold border transition-all ${
                                            countdown > 0 
                                                ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed' 
                                                : 'bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 shadow-sm'
                                        }`}
                                    >
                                        {countdown > 0 ? `${countdown}s 后重试` : '获取验证码'}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                 <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">设置登录密码 <span className="text-red-500">*</span></label>
                                 <input required type="password" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50 focus:bg-white transition-all font-bold text-slate-800 text-sm placeholder:font-normal" placeholder="8-20位，需包含字母和数字" />
                            </div>
                        </div>

                         <div className="pt-4">
                            <label className="flex items-start gap-3 cursor-pointer group p-3 -ml-3 rounded-lg hover:bg-slate-50 transition-colors">
                                <div className="relative flex items-center mt-0.5">
                                    <input type="checkbox" className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-300 shadow-sm checked:border-emerald-500 checked:bg-emerald-500 transition-all" />
                                    <Check size={12} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" />
                                </div>
                                <span className="text-xs text-slate-500 font-medium group-hover:text-slate-700 transition-colors leading-relaxed">
                                    我已阅读并同意 <a href="#" className="text-emerald-600 font-bold hover:underline">《息壤平台服务协议》</a> 与 <a href="#" className="text-emerald-600 font-bold hover:underline">《隐私政策》</a>
                                </span>
                            </label>
                        </div>

                        <button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] mt-2">
                            立即提交入驻申请
                        </button>
                    </form>
                )}

            </div>
        </div>
      </div>
    </div>
  );
};

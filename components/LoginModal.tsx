import React from 'react';
import { X, Lock, User, ArrowRight, ShieldCheck } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onRegisterClick }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with stronger blur */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md transition-opacity" onClick={onClose}></div>

      {/* Modal Content - Wider & Larger - rounded-2xl */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-300 ring-1 ring-white/50 border border-white/60">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="p-12 pb-10">
            {/* Header */}
            <div className="flex justify-between items-start mb-12">
                <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur text-slate-600 text-[10px] font-bold tracking-wider uppercase mb-3 border border-slate-200 shadow-sm">
                    <ShieldCheck size={12} className="text-emerald-600"/>
                </div>
                <h3 className="text-4xl font-black text-slate-900 tracking-tight">欢迎回来</h3>
                <p className="text-slate-500 text-lg mt-2 font-medium">登录息壤碳信息服务平台</p>
                </div>
                <button onClick={onClose} className="p-3 rounded-full bg-slate-50/80 hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors backdrop-blur-sm">
                <X size={24} />
                </button>
            </div>

            <form className="space-y-8">
                {/* Username Input */}
                <div className="space-y-3">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">账号</label>
                <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                    <User size={24} />
                    </div>
                    <input type="text" className="w-full pl-16 pr-6 py-5 rounded-2xl border border-slate-200/80 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50/50 focus:bg-white transition-all font-bold text-lg text-slate-800 backdrop-blur-sm" placeholder="请输入账号 / 手机号" />
                </div>
                </div>

                {/* Password Input */}
                <div className="space-y-3">
                <div className="flex justify-between ml-1">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">密码</label>
                    <a href="#" className="text-xs text-emerald-600 font-bold hover:underline">忘记密码?</a>
                </div>
                <div className="relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors">
                    <Lock size={24} />
                    </div>
                    <input type="password" className="w-full pl-16 pr-6 py-5 rounded-2xl border border-slate-200/80 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 bg-slate-50/50 focus:bg-white transition-all font-bold text-lg text-slate-800 backdrop-blur-sm" placeholder="请输入密码" />
                </div>
                </div>

                <button type="button" className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 group transition-all duration-300 mt-6 text-xl">
                <span>安全登录</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </form>
        </div>

        {/* Footer */}
        <div className="bg-slate-50/80 backdrop-blur p-8 text-center border-t border-slate-100">
            <p className="text-slate-500 font-medium text-base">
                还没有账号? 
                <button 
                onClick={() => { onClose(); onRegisterClick(); }}
                className="ml-2 font-bold text-emerald-600 hover:underline hover:text-emerald-700"
                >
                立即注册新账户
                </button>
            </p>
        </div>
      </div>
    </div>
  );
};
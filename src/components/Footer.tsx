import React from 'react';
import logoText from '../assets/logo-text.png';

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-100 bg-white">
     
      <div className="w-full px-6 py-14 lg:px-25">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="flex flex-col justify-between h-full">
            <div>
              <img src={logoText} alt="Dev Stack" className="h-8 object-contain" />

              <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-slate-400 font-medium">
                Explore modern technologies, compare your options, and build the
                perfect development stack for your next project.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a href="#" className="text-[13px] font-medium text-slate-400 transition hover:text-slate-900">GitHub</a>
              <a href="#" className="text-[13px] font-medium text-slate-400 transition hover:text-slate-900">Twitter</a>
              <a href="#" className="text-[13px] font-medium text-slate-400 transition hover:text-slate-900">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-bold tracking-wider text-slate-900 uppercase">
              Product
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <a href="#technologies" className="text-[14px] font-medium text-slate-400 transition hover:text-slate-900">Technologies</a>
              <a href="#projects" className="text-[14px] font-medium text-slate-400 transition hover:text-slate-900">Projects</a>
              <a href="#" className="text-[14px] font-medium text-slate-400 transition hover:text-slate-900">Features</a>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-bold tracking-wider text-slate-900 uppercase">
              Company
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <a href="#about" className="text-[14px] font-medium text-slate-400 transition hover:text-slate-900">About</a>
              <a href="#contact" className="text-[14px] font-medium text-slate-400 transition hover:text-slate-900">Contact</a>
              <a href="#" className="text-[14px] font-medium text-slate-400 transition hover:text-slate-900">Careers</a>
            </div>
          </div>

          <div>
            <h3 className="text-[14px] font-bold tracking-wider text-slate-900 uppercase">
              Legal
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              <a href="#" className="text-[14px] font-medium text-slate-400 transition hover:text-slate-900">Privacy</a>
              <a href="#" className="text-[14px] font-medium text-slate-400 transition hover:text-slate-900">Terms</a>
              <a href="#" className="text-[14px] font-medium text-slate-400 transition hover:text-slate-900">License</a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-gray-100 pt-6 text-[13px] font-medium text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="transition hover:text-slate-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

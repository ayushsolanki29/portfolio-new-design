'use client';
import React from "react";
import Image from "next/image";

export default function VSCodeWidget() {
  return (
    <div className="canvas-piece vscode-widget group block">
      <div className="bg-[#1e1e1e] rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.2)] border border-neutral-700/60 overflow-hidden w-full h-full hover:shadow-[0_20px_32px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out flex flex-col">
        {/* Header */}
        <div className="bg-[#007acc] px-3 py-2 flex items-center gap-2 border-b border-black/20 shrink-0">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
          </svg>
          <span className="text-white font-bold text-[10px] tracking-wider uppercase">
            EXTENSION
          </span>
        </div>
        
        {/* Body */}
        <div className="p-3.5 bg-gradient-to-b from-[#252526] to-[#1e1e1e] flex-1 flex flex-col justify-center">
          <a
            href="https://marketplace.visualstudio.com/items?itemName=Ayush-Solanki.dev-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 mb-2"
          >
            <div className="w-[42px] h-[42px] rounded-lg bg-[#2d2d30] flex items-center justify-center p-1.5 border border-neutral-700/50 shadow-inner shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                alt="VS Code Extension logo"
                className="w-full h-full object-contain rounded-sm"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] leading-tight group-hover:text-[#4daafc] transition-colors">
                dev-starter
              </h4>
              <p className="text-neutral-400 text-[11px] mt-0.5">Ayush Solanki</p>
            </div>
          </a>
          
          <div className="flex flex-wrap gap-1 mt-1.5">
            <a
              href="https://open-vsx.org/vscode/item?itemName=Ayush-Solanki.dev-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[9px] bg-[#333333] text-neutral-300 px-1.5 py-0.5 rounded border border-neutral-600/50 shadow-sm font-medium hover:bg-[#444] hover:text-white transition-colors whitespace-nowrap"
            >
              <img src="/antigravity.png" alt="Antigravity" className="w-2.5 h-2.5 object-contain" />
              Antigravity
            </a>
            <a
              href="https://open-vsx.org/vscode/item?itemName=Ayush-Solanki.dev-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[9px] bg-[#333333] text-neutral-300 px-1.5 py-0.5 rounded border border-neutral-600/50 shadow-sm font-medium hover:bg-[#444] hover:text-white transition-colors whitespace-nowrap"
            >
              <img src="/kiro.png" alt="kiro" className="w-2.5 h-2.5 object-contain" />
              kiro
            </a>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=Ayush-Solanki.dev-starter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[9px] bg-[#333333] text-neutral-300 px-1.5 py-0.5 rounded border border-neutral-600/50 shadow-sm font-medium hover:bg-[#444] hover:text-white transition-colors whitespace-nowrap"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" className="w-2.5 h-2.5 object-contain" />
              VS Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

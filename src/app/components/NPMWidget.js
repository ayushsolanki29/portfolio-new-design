export default async function NPMWidget() {
  let packages = [];
  try {
    // Revalidate once a day
    const res = await fetch("https://registry.npmjs.org/-/v1/search?text=author:ayushsolanki29", { next: { revalidate: 86400 } });
    if (res.ok) {
      const data = await res.json();
      packages = data.objects || [];
    }
  } catch (e) {
    console.error("NPM fetch failed", e);
  }

  return (
    <a 
      href="https://www.npmjs.com/~ayushsolanki29" 
      target="_blank" 
      rel="noopener noreferrer"
      className="canvas-piece npm-widget group block"
    >
      <div className="bg-white rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.08)] border border-neutral-200/60 overflow-hidden w-[180px] hover:shadow-[0_20px_32px_rgba(0,0,0,0.12)] group-hover:-translate-y-1.5 group-hover:scale-[1.02] transition-all duration-500 ease-out">
        <div className="bg-[#CB3837] p-2.5 flex items-center justify-between border-b border-black/10">
          <svg viewBox="0 0 780 250" className="w-[42px] h-auto" fill="#fff"><path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"></path></svg>
          <span className="text-white/90 font-bold text-[10px] tracking-wider uppercase">Contributor</span>
        </div>
        <div className="p-3 bg-gradient-to-b from-white to-neutral-50/50">
           <div className="text-[10px] text-neutral-400 font-bold mb-2 uppercase tracking-wide flex items-center gap-1.5">
             Packages 
             <span className="bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded-md">{packages.length}</span>
           </div>
           <div className="flex flex-col gap-1.5">
             {packages.slice(0, 3).map((pkg) => (
               <div key={pkg.package.name} className="flex items-center justify-between bg-white border border-neutral-100 px-2 py-1.5 rounded-lg shadow-sm group-hover:border-red-100 transition-colors">
                 <span className="text-[11px] font-semibold text-neutral-700 truncate w-full group-hover:text-[#CB3837] transition-colors">{pkg.package.name}</span>
               </div>
             ))}
             {packages.length === 0 && <div className="text-[11px] text-neutral-400 italic">No packages found</div>}
           </div>
        </div>
      </div>
    </a>
  );
}

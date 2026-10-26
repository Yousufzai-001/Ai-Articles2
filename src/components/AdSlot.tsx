import React from 'react';

interface AdSlotProps {
  format?: 'banner' | 'rectangle' | 'in-feed';
  className?: string;
}

export const AdSlot: React.FC<AdSlotProps> = ({ format = 'banner', className = '' }) => {
  return (
    <aside
      aria-label="Sponsored Advertisement"
      className={`w-full my-6 flex flex-col items-center justify-center ${className}`}
    >
      <span className="text-[10px] uppercase tracking-wider text-slate-400 mb-1 font-medium">
        Advertisement
      </span>
      {format === 'banner' && (
        <div className="w-full max-w-[728px] h-[90px] bg-slate-50 border border-dashed border-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-400 select-none">
          <div className="text-center">
            <p className="font-medium text-slate-500">Google Ads / Native Ad Banner Space</p>
            <p className="text-[11px] text-slate-400">728 × 90 Responsive Display Slot</p>
          </div>
        </div>
      )}
      {format === 'rectangle' && (
        <div className="w-full max-w-[336px] h-[280px] bg-slate-50 border border-dashed border-slate-200 rounded-lg flex items-center justify-center text-xs text-slate-400 select-none">
          <div className="text-center p-4">
            <p className="font-medium text-slate-500">Medium Rectangle Ad Slot</p>
            <p className="text-[11px] text-slate-400">300 × 250 / 336 × 280</p>
          </div>
        </div>
      )}
      {format === 'in-feed' && (
        <div className="w-full bg-slate-50/70 border border-dashed border-slate-200 rounded-xl p-4 flex items-center justify-between text-xs text-slate-400">
          <div>
            <p className="font-semibold text-slate-600">Sponsored Story</p>
            <p className="text-slate-400 text-[11px]">Recommended content by advertising network</p>
          </div>
          <span className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] text-slate-500 font-medium">
            Ad
          </span>
        </div>
      )}
    </aside>
  );
};

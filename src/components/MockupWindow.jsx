import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  Search, 
  Plus 
} from 'lucide-react';
import { content } from '../data/content';

export default function MockupWindow() {
  const { mockupWindow } = content.hero;

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Orders', icon: ShoppingCart, active: false },
    { name: 'Inventory', icon: Package, active: false },
    { name: 'Customers', icon: Users, active: false },
    { name: 'Analytics', icon: BarChart3, active: false },
    { name: 'Settings', icon: Settings, active: false },
  ];

  return (
    <div 
      className="max-w-[1080px] mx-auto rounded-[12px] bg-white border border-white/[0.08] overflow-hidden text-left"
      style={{ boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35)' }}
    >
      {/* 1. Title bar 44px, bg #F3F4F6, 1px bottom border #E4E7EC */}
      <div className="h-[44px] bg-[#F3F4F6] border-b border-[#E4E7EC] px-4 flex items-center justify-between select-none">
        {/* Left: three 12px circles (#FF5F57, #FEBC2E, #28C840, 8px gap) */}
        <div className="flex items-center gap-[8px] w-20">
          <span className="w-[12px] h-[12px] rounded-full bg-[#FF5F57] inline-block" />
          <span className="w-[12px] h-[12px] rounded-full bg-[#FEBC2E] inline-block" />
          <span className="w-[12px] h-[12px] rounded-full bg-[#28C840] inline-block" />
        </div>

        {/* Center: title "Simnosoft · Operations", Inter 13px/500, #667085 */}
        <div className="font-sans text-[13px] font-medium text-[#667085] tracking-tight">
          {mockupWindow.windowTitle}
        </div>

        <div className="w-20" aria-hidden="true" />
      </div>

      {/* 2. APP LAYOUT (height ~520px, cropped at bottom) */}
      <div className="h-[520px] flex overflow-hidden bg-white select-none">
        {/* Sidebar 220px, bg #F8FAFC, 1px right border #E4E7EC */}
        <div className="w-[220px] flex-shrink-0 bg-[#F8FAFC] border-r border-[#E4E7EC] flex flex-col justify-between p-4">
          <div>
            {/* Top: small navy logo mark + "Simnosoft" */}
            <div className="flex items-center gap-2.5 px-2 py-2 mb-4">
              <span className="w-6 h-6 rounded bg-[#0B1F3A] flex items-center justify-center text-white font-bold text-xs">
                S
              </span>
              <span className="font-sans font-semibold text-sm text-[#0B1F3A]">
                Simnosoft
              </span>
            </div>

            {/* Nav items with lucide icons, 14px Inter, 40px row height, 8px radius */}
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className={`h-[40px] px-3 rounded-[8px] flex items-center gap-3 font-sans text-[14px] font-medium cursor-default transition-colors ${
                      item.active
                        ? 'bg-[#E8EEFB] text-[#1D4ED8]'
                        : 'text-[#475467] hover:bg-slate-100/70'
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="px-2 py-1 text-[11px] text-[#98A2B3]">
            v2.4 Enterprise Suite
          </div>
        </div>

        {/* App Content Column */}
        <div className="flex-1 flex flex-col min-w-0 bg-white">
          {/* Top bar 56px, white, 1px bottom border */}
          <div className="h-[56px] px-6 border-b border-[#E4E7EC] flex items-center justify-between gap-4">
            {/* Search input (rounded 8px, #F3F4F6, placeholder "Search orders, customers") */}
            <div className="relative max-w-sm w-full">
              <Search className="w-4 h-4 text-[#98A2B3] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                readOnly
                placeholder="Search orders, customers"
                className="w-full h-[36px] pl-9 pr-3 rounded-[8px] bg-[#F3F4F6] text-xs font-sans text-[#475467] placeholder-[#98A2B3] border-none focus:outline-none cursor-default"
              />
            </div>

            {/* Right: "New order" button (#1D4ED8, white text, 8px radius, 36px tall) and 32px avatar circle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="h-[36px] px-3.5 rounded-[8px] bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-medium inline-flex items-center gap-1.5 transition-colors cursor-default"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New order</span>
              </button>

              <div className="w-[32px] h-[32px] rounded-full bg-[#D0D5DD] flex items-center justify-center text-[12px] font-semibold text-[#344054]">
                JD
              </div>
            </div>
          </div>

          {/* Main area, bg #FFFFFF, padding 24px */}
          <div className="flex-1 p-6 space-y-5 overflow-hidden">
            {/* Row of 4 KPI cards (1px #E4E7EC, radius 10px, padding 16px) */}
            <div className="grid grid-cols-4 gap-4">
              {mockupWindow.kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="border border-[#E4E7EC] rounded-[10px] p-4 bg-white"
                >
                  <div className="font-sans text-[12px] text-[#667085]">
                    {kpi.label}
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-sans font-semibold text-[24px] text-[#0B1F3A] tabular-nums tracking-tight">
                      {kpi.value}
                    </span>
                    {kpi.change && (
                      <span className="font-sans text-[12px] font-medium text-[#12B76A]">
                        {kpi.change}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Below, 2 columns (gap 16px): LEFT 60% card and RIGHT 40% card */}
            <div className="grid grid-cols-12 gap-4">
              {/* LEFT 60% card: "Revenue, last 30 days" with inline SVG line chart */}
              <div className="col-span-7 border border-[#E4E7EC] rounded-[10px] p-4 bg-white flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-sans text-[13px] font-semibold text-[#0B1F3A]">
                    Revenue, last 30 days
                  </div>
                  <span className="text-[11px] text-[#667085] font-medium">Daily</span>
                </div>

                {/* Inline SVG Chart */}
                <div className="w-full h-[155px]">
                  <svg 
                    viewBox="0 0 500 150" 
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    {/* Faint horizontal gridlines #EEF0F3 */}
                    <line x1="0" y1="20" x2="500" y2="20" stroke="#EEF0F3" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="60" x2="500" y2="60" stroke="#EEF0F3" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="100" x2="500" y2="100" stroke="#EEF0F3" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="140" x2="500" y2="140" stroke="#EEF0F3" strokeWidth="1" />

                    {/* Area fill at 8% opacity (flat, no gradient) */}
                    <polygon
                      points="
                        0,140 
                        0,110 
                        40,105 
                        80,120 
                        120,95 
                        160,85 
                        200,90 
                        240,65 
                        280,70 
                        320,45 
                        360,55 
                        400,30 
                        440,35 
                        480,15 
                        500,20 
                        500,140
                      "
                      fill="#1D4ED8"
                      fillOpacity="0.08"
                    />

                    {/* Accent #1D4ED8 2px line */}
                    <polyline
                      fill="none"
                      stroke="#1D4ED8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points="
                        0,110 
                        40,105 
                        80,120 
                        120,95 
                        160,85 
                        200,90 
                        240,65 
                        280,70 
                        320,45 
                        360,55 
                        400,30 
                        440,35 
                        480,15 
                        500,20
                      "
                    />
                  </svg>
                </div>

                {/* Small axis labels */}
                <div className="flex items-center justify-between text-[10px] text-[#98A2B3] pt-2">
                  <span>Day 1</span>
                  <span>Day 10</span>
                  <span>Day 20</span>
                  <span>Day 30</span>
                </div>
              </div>

              {/* RIGHT 40% card: "Recent orders" table */}
              <div className="col-span-5 border border-[#E4E7EC] rounded-[10px] p-4 bg-white flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-sans text-[13px] font-semibold text-[#0B1F3A]">
                    Recent orders
                  </div>
                  <span className="text-[11px] text-[#1D4ED8] font-medium cursor-default">View all</span>
                </div>

                <div className="divide-y divide-[#F2F4F7] text-[11px]">
                  {mockupWindow.recentOrders.map((order) => (
                    <div 
                      key={order.id} 
                      className="py-2.5 flex items-center justify-between gap-2"
                    >
                      <div className="flex flex-col">
                        <span className="font-mono font-medium text-[#0B1F3A]">{order.id}</span>
                        <span className="text-[#667085] truncate max-w-[90px]">{order.customer}</span>
                      </div>
                      <span className="font-medium text-[#0B1F3A] tabular-nums">{order.amount}</span>
                      <span 
                        className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                          order.status === 'Paid'
                            ? 'bg-[#ECFDF3] text-[#027A48] border-[#A6F4C5]'
                            : 'bg-[#FFFAEB] text-[#B54708] border-[#FEDF89]'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

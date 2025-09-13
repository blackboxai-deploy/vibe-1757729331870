"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      {/* Main Content Area */}
      <div className="lg:ml-64">
        {/* Top Navigation */}
        <Navbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        {/* Main Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
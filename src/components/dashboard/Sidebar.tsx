"use client";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: '📊', label: 'Dashboard', href: '#dashboard', active: true },
    { icon: '👥', label: 'Users', href: '#users' },
    { icon: '📈', label: 'Analytics', href: '#analytics' },
    { icon: '🛒', label: 'Orders', href: '#orders' },
    { icon: '💳', label: 'Payments', href: '#payments' },
    { icon: '📦', label: 'Products', href: '#products' },
    { icon: '⚙️', label: 'Settings', href: '#settings' },
    { icon: '❓', label: 'Help', href: '#help' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-base-200 shadow-xl transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-base-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-content text-lg font-bold">
                D
              </div>
              <span className="text-xl font-semibold text-base-content">Dashboard</span>
            </div>
            <button 
              onClick={onClose}
              className="btn btn-ghost btn-sm lg:hidden"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* User Info */}
          <div className="p-4 border-b border-base-300">
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a512bddd-0edd-4412-b9ff-8e769ba9d8bf.png" alt="Admin Avatar" />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-base-content">John Doe</div>
                <div className="text-xs text-base-content/70">Administrator</div>
              </div>
              <div className="badge badge-primary badge-xs"></div>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="menu menu-vertical w-full">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      item.active 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content hover:bg-base-300'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    {item.label === 'Orders' && (
                      <span className="badge badge-error badge-sm ml-auto">12</span>
                    )}
                    {item.label === 'Users' && (
                      <span className="badge badge-info badge-sm ml-auto">New</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-base-300">
            <div className="stats stats-vertical w-full shadow">
              <div className="stat p-3">
                <div className="stat-title text-xs">Storage Used</div>
                <div className="stat-value text-sm">73%</div>
                <div className="stat-desc text-xs">2.1 GB remaining</div>
                <progress className="progress progress-primary w-full mt-2" value="73" max="100"></progress>
              </div>
            </div>
            
            <div className="mt-4">
              <button className="btn btn-outline btn-sm w-full">
                <span>🔄</span>
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
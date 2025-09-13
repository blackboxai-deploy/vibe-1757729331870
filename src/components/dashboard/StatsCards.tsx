"use client";

export default function StatsCards() {
  const stats = [
    {
      title: "Total Users",
      value: "89.4k",
      change: "+4.75%",
      changeType: "increase",
      icon: "👥",
      description: "Active users this month"
    },
    {
      title: "Revenue",
      value: "$45.2k",
      change: "+12.5%",
      changeType: "increase", 
      icon: "💰",
      description: "Total earnings"
    },
    {
      title: "Orders",
      value: "2,420",
      change: "-2.4%",
      changeType: "decrease",
      icon: "🛒",
      description: "Orders completed"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+1.8%",
      changeType: "increase",
      icon: "📈",
      description: "Average conversion"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="stats shadow hover:shadow-lg transition-shadow">
          <div className="stat">
            <div className="stat-figure text-primary">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                {stat.icon}
              </div>
            </div>
            <div className="stat-title text-base-content/70">{stat.title}</div>
            <div className="stat-value text-primary">{stat.value}</div>
            <div className={`stat-desc flex items-center gap-1 ${
              stat.changeType === 'increase' ? 'text-success' : 'text-error'
            }`}>
              <span className={`badge badge-sm ${
                stat.changeType === 'increase' ? 'badge-success' : 'badge-error'
              }`}>
                {stat.change}
              </span>
              {stat.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
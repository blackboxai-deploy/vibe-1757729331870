"use client";

export default function ActivityTimeline() {
  const activities = [
    {
      id: 1,
      user: "Sarah Chen",
      action: "completed a project milestone",
      time: "2 minutes ago",
      icon: "✅",
      color: "text-success"
    },
    {
      id: 2,
      user: "Alex Johnson",
      action: "updated user permissions",
      time: "15 minutes ago",
      icon: "⚙️",
      color: "text-primary"
    },
    {
      id: 3,
      user: "Mike Rodriguez",
      action: "uploaded new documents",
      time: "1 hour ago",
      icon: "📄",
      color: "text-info"
    },
    {
      id: 4,
      user: "Emily Davis",
      action: "created a new team workspace",
      time: "2 hours ago",
      icon: "🏢",
      color: "text-secondary"
    },
    {
      id: 5,
      user: "James Wilson",
      action: "completed onboarding process",
      time: "3 hours ago",
      icon: "🎯",
      color: "text-accent"
    },
    {
      id: 6,
      user: "Lisa Anderson",
      action: "reviewed quarterly reports",
      time: "5 hours ago",
      icon: "📊",
      color: "text-warning"
    }
  ];

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-header p-6 pb-0">
        <h2 className="card-title text-2xl">Recent Activity</h2>
        <p className="text-base-content/70 mt-1">Latest user activities and system updates</p>
      </div>
      
      <div className="card-body p-6">
        <div className="timeline timeline-vertical">
          {activities.map((activity, index) => (
            <div key={activity.id} className="timeline-item">
              {index !== 0 && <hr className="bg-base-300" />}
              <div className="timeline-start timeline-box bg-base-200">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activity.color} bg-current/10`}>
                    <span className="text-sm">{activity.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm">
                      <span className="font-semibold">{activity.user}</span>
                      {' '}
                      <span className="text-base-content/70">{activity.action}</span>
                    </div>
                    <div className="text-xs text-base-content/50 mt-1">{activity.time}</div>
                  </div>
                </div>
              </div>
              <div className="timeline-middle">
                <div className={`w-3 h-3 rounded-full ${activity.color} bg-current`}></div>
              </div>
              <div className="timeline-end"></div>
              {index !== activities.length - 1 && <hr className="bg-base-300" />}
            </div>
          ))}
        </div>
        
        <div className="divider mt-6"></div>
        
        <div className="flex justify-center">
          <button className="btn btn-outline btn-sm">View All Activities</button>
        </div>
      </div>
    </div>
  );
}
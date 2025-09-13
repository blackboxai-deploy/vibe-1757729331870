"use client";

export default function UserProfile() {
  const userStats = [
    { label: "Projects", value: "24", change: "+3" },
    { label: "Tasks", value: "156", change: "+12" },
    { label: "Teams", value: "8", change: "+2" }
  ];

  const achievements = [
    { name: "Project Master", description: "Completed 20+ projects", earned: true },
    { name: "Team Player", description: "Collaborated in 5+ teams", earned: true },
    { name: "Innovation Leader", description: "Led 10+ innovative projects", earned: false },
    { name: "Mentor", description: "Guided 50+ team members", earned: true }
  ];

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="avatar mb-4">
            <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4b55645b-48b7-4ac1-b46e-d1ae896c1067.png" alt="John Doe Profile" />
            </div>
          </div>
          <h3 className="text-xl font-bold">John Doe</h3>
          <p className="text-base-content/70">Senior Administrator</p>
          <div className="badge badge-primary mt-2">Premium Member</div>
        </div>

        {/* Quick Stats */}
        <div className="stats stats-vertical lg:stats-horizontal shadow mb-6">
          {userStats.map((stat, index) => (
            <div key={index} className="stat place-items-center">
              <div className="stat-title text-xs">{stat.label}</div>
              <div className="stat-value text-lg text-primary">{stat.value}</div>
              <div className="stat-desc text-success">
                <span className="inline-flex items-center text-xs">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">Skills Progress</h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Project Management</span>
                <span>90%</span>
              </div>
              <progress className="progress progress-primary w-full" value="90" max="100"></progress>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Team Leadership</span>
                <span>85%</span>
              </div>
              <progress className="progress progress-secondary w-full" value="85" max="100"></progress>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Technical Skills</span>
                <span>78%</span>
              </div>
              <progress className="progress progress-accent w-full" value="78" max="100"></progress>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">Achievements</h4>
          <div className="grid grid-cols-2 gap-3">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg border-2 transition-all ${
                  achievement.earned 
                    ? 'border-success bg-success/10 text-success' 
                    : 'border-base-300 bg-base-200 text-base-content/50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${
                    achievement.earned ? 'bg-success' : 'bg-base-300'
                  }`}></div>
                  <span className="text-sm font-medium">{achievement.name}</span>
                </div>
                <p className="text-xs opacity-70">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 justify-center">
          <button className="btn btn-primary btn-sm">Edit Profile</button>
          <button className="btn btn-outline btn-sm">Settings</button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>View Public Profile</a></li>
              <li><a>Download Resume</a></li>
              <li><a>Share Profile</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
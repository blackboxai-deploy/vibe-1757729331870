"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCards from "@/components/dashboard/StatsCards";
import DataTable from "@/components/dashboard/DataTable";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import UserProfile from "@/components/dashboard/UserProfile";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <div className="hero bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <div className="hero-content text-center py-12">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold text-base-content">Welcome Back! 👋</h1>
              <p className="py-4 text-base-content/70">
                Here's what's happening with your dashboard today. You have 3 new notifications and 12 pending tasks.
              </p>
              <div className="flex gap-3 justify-center">
                <button className="btn btn-primary">View Tasks</button>
                <button className="btn btn-outline">Quick Actions</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <StatsCards />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
        
        {/* Left Column - Data Table */}
        <div className="xl:col-span-2">
          <DataTable />
        </div>

        {/* Right Column - User Profile */}
        <div className="xl:col-span-1">
          <UserProfile />
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        {/* Activity Timeline */}
        <div>
          <ActivityTimeline />
        </div>

        {/* Additional Charts and Info */}
        <div className="space-y-6">
          {/* Quick Actions Card */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="btn btn-outline btn-sm">
                  <span>📊</span>
                  Generate Report
                </button>
                <button className="btn btn-outline btn-sm">
                  <span>👥</span>
                  Add User
                </button>
                <button className="btn btn-outline btn-sm">
                  <span>⚙️</span>
                  Settings
                </button>
                <button className="btn btn-outline btn-sm">
                  <span>📤</span>
                  Export Data
                </button>
              </div>
            </div>
          </div>

          {/* System Status */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">System Status</h2>
              <div className="space-y-4 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Status</span>
                  <div className="badge badge-success gap-2">
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                    Online
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <div className="badge badge-success gap-2">
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                    Healthy
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Server Load</span>
                  <div className="badge badge-warning gap-2">
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                    Moderate
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Backup Status</span>
                  <div className="badge badge-info gap-2">
                    <div className="w-2 h-2 rounded-full bg-current"></div>
                    Running
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Performance</h2>
              <div className="space-y-4 mt-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>CPU Usage</span>
                    <span>68%</span>
                  </div>
                  <progress className="progress progress-primary w-full" value="68" max="100"></progress>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Memory</span>
                    <span>45%</span>
                  </div>
                  <progress className="progress progress-secondary w-full" value="45" max="100"></progress>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Storage</span>
                    <span>73%</span>
                  </div>
                  <progress className="progress progress-warning w-full" value="73" max="100"></progress>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Network</span>
                    <span>32%</span>
                  </div>
                  <progress className="progress progress-info w-full" value="32" max="100"></progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Modal Demo Buttons */}
        <button className="btn btn-primary" onClick={() => (document.getElementById('info_modal') as HTMLDialogElement)?.showModal()}>
          Show Info Modal
        </button>
        <button className="btn btn-secondary" onClick={() => (document.getElementById('confirmation_modal') as HTMLDialogElement)?.showModal()}>
          Confirmation Dialog
        </button>
        <button className="btn btn-accent" onClick={() => (document.getElementById('form_modal') as HTMLDialogElement)?.showModal()}>
          Form Modal
        </button>
        <button className="btn btn-warning" onClick={() => (document.getElementById('success_modal') as HTMLDialogElement)?.showModal()}>
          Success Alert
        </button>
      </div>

      {/* Modal Definitions */}
      <dialog id="info_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Information</h3>
          <p className="py-4">This is a DaisyUI modal component demonstrating the modal functionality in the dashboard.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="confirmation_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Confirm Action</h3>
          <p className="py-4">Are you sure you want to proceed with this action? This cannot be undone.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-error">Delete</button>
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="form_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Item</h3>
          <div className="py-4 space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter name" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea className="textarea textarea-bordered" placeholder="Enter description"></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="select select-bordered w-full">
                <option disabled selected>Choose category</option>
                <option>Technology</option>
                <option>Business</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Save</button>
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="success_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-success">Success! 🎉</h3>
          <p className="py-4">Your operation was completed successfully. The dashboard has been updated with the latest information.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-success">Great!</button>
            </form>
          </div>
        </div>
      </dialog>

      {/* Footer */}
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded-2xl mt-12">
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a className="link link-hover">About</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Privacy</a>
            <a className="link link-hover">Terms</a>
          </div>
        </nav>
        <aside>
          <p>Copyright © 2024 - DaisyUI Dashboard | Built with DaisyUI & Next.js</p>
        </aside>
      </footer>
    </DashboardLayout>
  );
}
"use client";

import { useState } from "react";

export default function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const users = [
    { id: 1, name: "Alex Johnson", email: "alex@example.com", role: "Admin", status: "Active", joinDate: "2024-01-15", avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cbff34e7-22e3-4f87-b884-cd3b744fe1c9.png" },
    { id: 2, name: "Sarah Chen", email: "sarah@example.com", role: "Editor", status: "Active", joinDate: "2024-02-20", avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4ca147db-3c37-4a7d-8e1c-f62a6c5ebafa.png" },
    { id: 3, name: "Mike Rodriguez", email: "mike@example.com", role: "User", status: "Inactive", joinDate: "2024-01-08", avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2f8116ab-424c-41a9-b2e0-b20fc4d4e9b7.png" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Editor", status: "Active", joinDate: "2024-03-12", avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ed19904c-e57f-4b6a-9e76-8286ebfedb9b.png" },
    { id: 5, name: "James Wilson", email: "james@example.com", role: "User", status: "Pending", joinDate: "2024-03-25", avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c1397f5-07a8-4ddf-a48c-a8e0f2d17481.png" },
    { id: 6, name: "Lisa Anderson", email: "lisa@example.com", role: "Admin", status: "Active", joinDate: "2024-02-01", avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9093eab8-2032-40b5-ad7f-f993fb30db41.png" },
    { id: 7, name: "David Brown", email: "david@example.com", role: "User", status: "Active", joinDate: "2024-03-18", avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3979c2a4-cc13-4a22-86e1-9e5978612038.png" },
    { id: 8, name: "Maria Garcia", email: "maria@example.com", role: "Editor", status: "Inactive", joinDate: "2024-01-22", avatar: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b025b3df-e923-46c1-95d2-33f02adc4fa2.png" }
  ];

  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'badge-success';
      case 'Inactive':
        return 'badge-error';
      case 'Pending':
        return 'badge-warning';
      default:
        return 'badge-ghost';
    }
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'badge-primary';
      case 'Editor':
        return 'badge-secondary';
      case 'User':
        return 'badge-accent';
      default:
        return 'badge-ghost';
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-header p-6 pb-0">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-2xl">User Management</h2>
          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">Export</button>
            <button className="btn btn-primary btn-sm">Add User</button>
          </div>
        </div>
        
        <div className="flex gap-4 mt-4">
          <div className="form-control">
            <input type="text" placeholder="Search users..." className="input input-bordered input-sm w-full max-w-xs" />
          </div>
          <select className="select select-bordered select-sm">
            <option disabled selected>Filter by role</option>
            <option>All Roles</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>User</option>
          </select>
          <select className="select select-bordered select-sm">
            <option disabled selected>Filter by status</option>
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
        </div>
      </div>

      <div className="card-body p-6">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox checkbox-sm" />
                  </label>
                </th>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <tr key={user.id} className="hover">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox checkbox-sm" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-8 h-8">
                          <img src={user.avatar} alt={`${user.name} avatar`} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-sm">{user.name}</div>
                        <div className="text-sm opacity-50">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`badge badge-sm ${getRoleBadge(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span className={`badge badge-sm ${getStatusBadge(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="text-sm">{user.joinDate}</td>
                  <td>
                    <div className="flex gap-1">
                      <button className="btn btn-ghost btn-xs">View</button>
                      <button className="btn btn-ghost btn-xs">Edit</button>
                      <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-xs">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                          <li><a>Reset Password</a></li>
                          <li><a>Deactivate</a></li>
                          <li><a className="text-error">Delete</a></li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-base-content/70">
            Showing {startIndex + 1} to {Math.min(endIndex, users.length)} of {users.length} entries
          </div>
          <div className="join">
            <button 
              className="join-item btn btn-sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`join-item btn btn-sm ${page === currentPage ? 'btn-active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button 
              className="join-item btn btn-sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
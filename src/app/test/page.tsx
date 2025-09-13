export default function TestPage() {
  return (
    <div className="min-h-screen bg-base-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">DaisyUI Test Page</h1>
        
        {/* Basic Test Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Test Card</h2>
              <p>If you can see this styled card, daisyUI is working!</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Button</button>
              </div>
            </div>
          </div>
          
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Downloads</div>
              <div className="stat-value">31K</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
          </div>
          
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Colored Card</h2>
              <p>This should be colored if themes work</p>
            </div>
          </div>
        </div>

        {/* Navigation Test */}
        <div className="navbar bg-base-300 rounded-box mb-4">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Test Navigation</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Theme Test */}
        <div className="alert alert-info mb-4">
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>This is a test page to verify daisyUI is working on mobile devices.</span>
        </div>

        {/* Button Tests */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="btn">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
        </div>

        {/* Mobile-specific test */}
        <div className="mockup-phone">
          <div className="camera"></div>
          <div className="display">
            <div className="artboard artboard-demo phone-1 bg-base-200 p-4">
              <h3 className="text-lg font-bold">Mobile View Test</h3>
              <p>This should render properly on mobile devices</p>
              <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            </div>
          </div>
        </div>

        {/* Link back to main dashboard */}
        <div className="text-center mt-8">
          <a href="/" className="btn btn-outline btn-lg">Back to Full Dashboard</a>
        </div>
      </div>
    </div>
  );
}
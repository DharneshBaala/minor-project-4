const navigationItems = [
  { name: "Dashboard", icon: "⌂" },
  { name: "To-Do", icon: "✓" },
  { name: "Notes", icon: "▤" },
];

function Navbar({ activePage, setActivePage }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">T</div>

        <div>
          <h2>tasknest<span>.</span></h2>
          <p>YOUR PERSONAL SPACE</p>
        </div>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-label">MENU</p>

        <nav className="navigation">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.name}</span>

              {activePage === item.name && (
                <span className="active-indicator"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-tip">
          <div className="tip-icon">✦</div>
          <h3>A little reminder</h3>
          <p>
            You don't need to do everything today. Just start with one thing.
          </p>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">T</div>

          <div className="user-details">
            <h4>My Workspace</h4>
            <p>Personal account</p>
          </div>

          <span className="user-menu">···</span>
        </div>
      </div>
    </aside>
  );
}

export default Navbar;
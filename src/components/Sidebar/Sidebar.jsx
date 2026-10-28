
import './Sidebar.css'

function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <p className="sidebar-heading">მთავარი მენიუ</p>

      <nav className="sidebar-nav" aria-label="Dashboard მენიუ">
        <a href="#dashboard" className="sidebar-link active">
          <span>▦</span>
          <span>Dashboard</span>
        </a>

        <a href="#products" className="sidebar-link">
          <span>▣</span>
          <span>პროდუქტები</span>
        </a>

        <a href="#orders" className="sidebar-link">
          <span>🛒</span>
          <span>შეკვეთები</span>
        </a>

        <a href="#customers" className="sidebar-link">
          <span>♙</span>
          <span>მომხმარებლები</span>
        </a>

        <a href="#settings" className="sidebar-link">
          <span>⚙</span>
          <span>პარამეტრები</span>
        </a>
      </nav>

      <div className="sidebar-bottom">
        <p>RouteGo Admin</p>
        <span>მართე შენი პლატფორმა მარტივად.</span>
      </div>
    </aside>
  )
}

export default Sidebar

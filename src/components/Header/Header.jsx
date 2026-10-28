
import './Header.css'

function Header() {
  return (
    <header className="dashboard-header">
      <div className="dashboard-brand">
        <span className="brand-icon">R</span>
        <div>
          <h2>RouteGo</h2>
          <p>Admin Dashboard</p>
        </div>
      </div>

      <div className="header-profile">
        <div className="profile-info">
          <strong>ადმინისტრატორი</strong>
          <span>მთავარი მენეჯერი</span>
        </div>

        <div className="profile-avatar" aria-label="ადმინისტრატორის ავატარი">
          A
        </div>
      </div>
    </header>
  )
}

export default Header

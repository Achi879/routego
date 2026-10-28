
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.css'

function Layout({ children }) {
  return (
    <div className="dashboard-layout">
      <Header />

      <div className="dashboard-body">
        <Sidebar />

        <main className="dashboard-main">
          {children}
        </main>
      </div>

      <footer className="dashboard-footer">
        <p>© 2026 RouteGo Admin. ყველა უფლება დაცულია.</p>
        <span>შექმნილია RouteGo-ს გუნდის მიერ.</span>
      </footer>
    </div>
  )
}

export default Layout

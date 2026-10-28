
import './StatCard.css'

function StatCard({ title, value, change, icon, positive = true }) {
  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <div className="stat-card-icon" aria-hidden="true">
          {icon}
        </div>

        <span className="stat-card-label">{title}</span>
      </div>

      <div className="stat-card-bottom">
        <strong className="stat-card-value">{value}</strong>

        <span className={`stat-card-change ${positive ? 'positive' : 'negative'}`}>
          {change}
        </span>
      </div>
    </article>
  )
}

export default StatCard

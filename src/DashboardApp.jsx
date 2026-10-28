
import ProductCard from './components/ProductCard/ProductCard'
import products from './data/products'
import './DashboardApp.css'
import Layout from './components/Layout/Layout'
import StatCard from './components/StatCard/StatCard'

function DashboardApp() {
  return (
    <Layout>
      <section className="dashboard-welcome" id="dashboard">
        <div>
          <p className="dashboard-eyebrow">მიმოხილვა</p>
          <h1>Dashboard</h1>
          <p>კეთილი იყოს შენი დაბრუნება! აი, რა ხდება RouteGo-ზე.</p>
        </div>

        <time dateTime="2026-10-25">25 ოქტომბერი, 2026</time>
      </section>

      <section className="stats-section" aria-label="სტატისტიკა">
        <StatCard
          title="ჯამური შემოსავალი"
          value="₾24,500"
          change="+12.5%"
          icon="💰"
        />

        <StatCard
          title="მომხმარებლები"
          value="1,284"
          change="+8.2%"
          icon="👥"
        />

        <StatCard
          title="შეკვეთები"
          value="356"
          change="+15.3%"
          icon="🛒"
        />

        <StatCard
          title="აქტიური მარშრუტები"
          value="48"
          change="-2.4%"
          icon="🗺️"
          positive={false}
        />
      </section>

      <section className="products-section" id="products">
        <div className="products-heading">
          <div>
            <p className="dashboard-eyebrow">კატალოგი</p>
            <h2>მარშრუტების კატალოგი</h2>
            <p>მართე პლატფორმაზე არსებული მარშრუტები.</p>
          </div>

          <button className="add-product-button" type="button">
            + ახალი მარშრუტი
          </button>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default DashboardApp


import { useState } from 'react'
import ProductCard from './components/ProductCard/ProductCard'
import productsData from './data/products'
import './DashboardApp.css'
import Layout from './components/Layout/Layout'
import StatCard from './components/StatCard/StatCard'
import RouteModal from './components/RouteModal/RouteModal'

function DashboardApp() {
  const [products, setProducts] = useState(productsData)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingRoute, setEditingRoute] = useState(null)

  function handleAddRoute() {
    setEditingRoute(null)
    setIsModalOpen(true)
  }

  function handleEditRoute(product) {
    setEditingRoute(product)
    setIsModalOpen(true)
  }

  function handleSaveRoute(routeData) {
    if (editingRoute) {
      setProducts((currentProducts) =>
        currentProducts.map((product) =>
          product.id === editingRoute.id
            ? { ...product, ...routeData, id: product.id }
            : product,
        ),
      )
      return
    }

    setProducts((currentProducts) => [
      ...currentProducts,
      { ...routeData, id: Date.now() },
    ])
  }

  function handleDeleteRoute(id) {
    const confirmed = window.confirm(
      'ნამდვილად გსურს ამ მარშრუტის წაშლა?',
    )

    if (!confirmed) return

    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== id),
    )
  }

  return (
    <Layout>
      <section className="dashboard-welcome" id="dashboard">
        <div>
          <p className="dashboard-eyebrow">მიმოხილვა</p>
          <h1>Dashboard</h1>
          <p>კეთილი იყოს შენი დაბრუნება! აი, რა ხდება RouteGo-ზე.</p>
        </div>

        <time dateTime="2026-10-29">29 ოქტომბერი, 2026</time>
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
          value={products.filter((product) => product.status === 'აქტიური').length}
          change="მიმდინარე სია"
          icon="🗺️"
        />
      </section>

      <section className="products-section" id="products">
        <div className="products-heading">
          <div>
            <p className="dashboard-eyebrow">კატალოგი</p>
            <h2>მარშრუტების კატალოგი</h2>
            <p>მართე პლატფორმაზე არსებული მარშრუტები.</p>
          </div>

          <button
            className="add-product-button"
            type="button"
            onClick={handleAddRoute}
          >
            + ახალი მარშრუტი
          </button>
        </div>

        {products.length === 0 ? (
          <p className="empty-routes-message">
            მარშრუტები ჯერ არ არის დამატებული.
          </p>
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEdit={handleEditRoute}
                onDelete={handleDeleteRoute}
              />
            ))}
          </div>
        )}
      </section>

      <RouteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveRoute}
        initialRoute={editingRoute}
      />
    </Layout>
  )
}

export default DashboardApp

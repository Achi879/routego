function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card-top">
        <div className="product-icon" aria-hidden="true">
          {product.icon}
        </div>

        <span
          className={`product-status ${
            product.status === 'აქტიური' ? 'status-active' : 'status-soon'
          }`}
        >
          {product.status}
        </span>
      </div>

      <div className="product-details">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
      </div>

      <div className="product-card-footer">
        <div>
          <span className="product-price-label">ბილეთის ფასი</span>
          <strong>{product.price}</strong>
        </div>

        <button
          className="product-view-button"
          type="button"
          aria-label={`${product.name} მარშრუტის ნახვა`}
        >
          →
        </button>
      </div>
    </article>
  )
}

export default ProductCard
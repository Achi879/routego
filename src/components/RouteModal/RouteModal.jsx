
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

// ფორმის საწყისი მონაცემების მომზადება
function getInitialFormData(initialRoute) {
  return initialRoute
    ? {
        name: initialRoute.name,
        category: initialRoute.category,
        price: initialRoute.price.replace(/[^\d.]/g, ''),
        status: initialRoute.status,
        icon: initialRoute.icon,
      }
    : {
        name: '',
        category: '',
        price: '',
        status: 'აქტიური',
        icon: '🚌',
      }
}

function RouteModal({ isOpen, onClose, onSave, initialRoute }) {
  const [formData, setFormData] = useState(() =>
    getInitialFormData(initialRoute),
  )

  const [errors, setErrors] = useState({})

  // Escape ღილაკით მოდალის დახურვა
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    setErrors((previous) => ({
      ...previous,
      [name]: '',
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}

    if (formData.name.trim().length < 5) {
      newErrors.name =
        'მარშრუტის სახელი მინიმუმ 5 სიმბოლო უნდა იყოს.'
    }

    if (formData.category.trim().length < 3) {
      newErrors.category =
        'კატეგორია მინიმუმ 3 სიმბოლო უნდა იყოს.'
    }

    const numericPrice = Number(formData.price)

    if (
      !formData.price.trim() ||
      !Number.isFinite(numericPrice) ||
      numericPrice <= 0
    ) {
      newErrors.price =
        'შეიყვანე სწორი ფასი, რომელიც ნულზე მეტია.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSave({
      ...(initialRoute ? { id: initialRoute.id } : {}),
      name: formData.name.trim(),
      category: formData.category.trim(),
      price: `${numericPrice} ₾`,
      status: formData.status,
      icon: formData.icon,
    })

    onClose()
  }

  return createPortal(
    <div
      className="route-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        className="route-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="route-modal-title"
      >
        <div className="route-modal-heading">
          <div>
            <p className="dashboard-eyebrow">
              {initialRoute ? 'მარშრუტის მართვა' : 'ახალი ჩანაწერი'}
            </p>

            <h2 id="route-modal-title">
              {initialRoute
                ? 'მარშრუტის რედაქტირება'
                : 'ახალი მარშრუტი'}
            </h2>
          </div>

          <button
            className="route-modal-close"
            type="button"
            onClick={onClose}
            aria-label="ფანჯრის დახურვა"
          >
            ×
          </button>
        </div>

        <form
          className="route-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <label>
            მარშრუტის სახელი

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="მაგ. თბილისი — ბათუმი"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={
                errors.name ? 'route-name-error' : undefined
              }
            />

            {errors.name && (
              <span
                id="route-name-error"
                className="route-form-error"
              >
                {errors.name}
              </span>
            )}
          </label>

          <label>
            კატეგორია

            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="მაგ. პოპულარული მარშრუტი"
              aria-invalid={Boolean(errors.category)}
              aria-describedby={
                errors.category
                  ? 'route-category-error'
                  : undefined
              }
            />

            {errors.category && (
              <span
                id="route-category-error"
                className="route-form-error"
              >
                {errors.category}
              </span>
            )}
          </label>

          <label>
            ბილეთის ფასი (₾)

            <input
              name="price"
              type="number"
              min="0.01"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              placeholder="მაგ. 40"
              aria-invalid={Boolean(errors.price)}
              aria-describedby={
                errors.price ? 'route-price-error' : undefined
              }
            />

            {errors.price && (
              <span
                id="route-price-error"
                className="route-form-error"
              >
                {errors.price}
              </span>
            )}
          </label>

          <label>
            სტატუსი

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="აქტიური">აქტიური</option>
              <option value="მალე">მალე</option>
            </select>
          </label>

          <label>
            აირჩიე სიმბოლო

            <select
              name="icon"
              value={formData.icon}
              onChange={handleChange}
            >
              <option value="🚌">🚌 ავტობუსი</option>
              <option value="🏖️">🏖️ ზღვა</option>
              <option value="🏔️">🏔️ მთა</option>
              <option value="🌿">🌿 ბუნება</option>
              <option value="🌲">🌲 ტყე</option>
              <option value="🚐">🚐 მიკროავტობუსი</option>
            </select>
          </label>

          <div className="route-form-actions">
            <button
              className="route-form-cancel"
              type="button"
              onClick={onClose}
            >
              გაუქმება
            </button>

            <button
              className="route-form-submit"
              type="submit"
            >
              {initialRoute
                ? 'ცვლილებების შენახვა'
                : 'მარშრუტის დამატება'}
            </button>
          </div>
        </form>
      </section>
    </div>,
    document.body,
  )
}

export default RouteModal

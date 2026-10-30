
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { createPortal } from 'react-dom'
import useFilterRoutes from './hooks/useFilterRoutes'
import './globals.css'
import './App.css'

const routes = [
  {
    id: 'tbilisi-batumi',
    from: 'თბილისი',
    to: 'ბათუმი',
    duration: 'დაახლოებით 6 საათი',
    durationISO: 'PT6H',
    price: 40,
    icon: '🏙️',
    category: 'პოპულარული მიმართულება',
    description: 'ზღვისპირა ქალაქი',
  },
  {
    id: 'tbilisi-gudauri',
    from: 'თბილისი',
    to: 'გუდაური',
    duration: 'დაახლოებით 2.5 საათი',
    durationISO: 'PT2H30M',
    price: 25,
    icon: '⛰️',
    category: 'მთის მიმართულება',
    description: 'სამთო კურორტი',
  },
  {
    id: 'tbilisi-kutaisi',
    from: 'თბილისი',
    to: 'ქუთაისი',
    duration: 'დაახლოებით 3.5 საათი',
    durationISO: 'PT3H30M',
    price: 25,
    icon: '🌿',
    category: 'დასავლეთ საქართველო',
    description: 'ისტორიული ქალაქი',
  },
  {
    id: 'tbilisi-borjomi',
    from: 'თბილისი',
    to: 'ბორჯომი',
    duration: 'დაახლოებით 2.5 საათი',
    durationISO: 'PT2H30M',
    price: 20,
    icon: '🌲',
    category: 'ბუნების მიმართულება',
    description: 'ტყე და მინერალური წყალი',
  },
  {
    id: 'tbilisi-zugdidi',
    from: 'თბილისი',
    to: 'ზუგდიდი',
    duration: 'დაახლოებით 5.5 საათი',
    durationISO: 'PT5H30M',
    price: 35,
    icon: '🌳',
    category: 'სამეგრელო',
    description: 'სამეგრელოს ცენტრი',
  },
  {
    id: 'tbilisi-telavi',
    from: 'თბილისი',
    to: 'თელავი',
    duration: 'დაახლოებით 2 საათი',
    durationISO: 'PT2H',
    price: 15,
    icon: '🍇',
    category: 'კახეთი',
    description: 'ღვინის მხარე',
  },
  {
    id: 'tbilisi-akhaltsikhe',
    from: 'თბილისი',
    to: 'ახალციხე',
    duration: 'დაახლოებით 3.5 საათი',
    durationISO: 'PT3H30M',
    price: 25,
    icon: '🏰',
    category: 'სამცხე-ჯავახეთი',
    description: 'რაბათის ციხე',
  },
  {
    id: 'tbilisi-ozurgeti',
    from: 'თბილისი',
    to: 'ოზურგეთი',
    duration: 'დაახლოებით 5 საათი',
    durationISO: 'PT5H',
    price: 30,
    icon: '🍃',
    category: 'გურია',
    description: 'გურიის მიმართულება',
  },
  {
    id: 'tbilisi-mestia',
    from: 'თბილისი',
    to: 'მესტია',
    duration: 'დაახლოებით 8 საათი',
    durationISO: 'PT8H',
    price: 50,
    icon: '🏔️',
    category: 'სვანეთი',
    description: 'მთები და კოშკები',
  },
  {
    id: 'tbilisi-kazbegi',
    from: 'თბილისი',
    to: 'სტეფანწმინდა',
    duration: 'დაახლოებით 3 საათი',
    durationISO: 'PT3H',
    price: 25,
    icon: '❄️',
    category: 'მთის მიმართულება',
    description: 'ყაზბეგის მთები',
  },
  {
    id: 'batumi-kobuleti',
    from: 'ბათუმი',
    to: 'ქობულეთი',
    duration: 'დაახლოებით 40 წუთი',
    durationISO: 'PT40M',
    price: 50,
    icon: '🏖️',
    category: 'აჭარა',
    description: 'ზღვისპირა კურორტი',
  },
  {
    id: 'kutaisi-batumi',
    from: 'ქუთაისი',
    to: 'ბათუმი',
    duration: 'დაახლოებით 2.5 საათი',
    durationISO: 'PT2H30M',
    price: 20,
    icon: '🌊',
    category: 'დასავლეთ საქართველო',
    description: 'მოგზაურობა ზღვისკენ',
  },
]

// Zod ვალიდაციის სქემა
const bookingSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს'),

  phone: z
    .string()
    .regex(/^[0-9]{9}$/, 'ტელეფონის ნომერი უნდა შეიცავდეს 9 ციფრს'),
})

function RouteModal({ route, onClose }) {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      phone: '',
    },
  })

  async function onSubmit() {
    // დემო გაგზავნა — რეალურ სერვერს არ უკავშირდება.
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitted(true)
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="route-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label="ფანჯრის დახურვა"
        >
          ✕
        </button>

        {submitted ? (
          <div className="modal-success">
            <h2>მონაცემები მიღებულია!</h2>
            <p>ეს არის RouteGo-ს დემო ფორმა.</p>

            <button type="button" onClick={onClose}>
              დახურვა
            </button>
          </div>
        ) : (
          <>
            <h2 id="modal-title">მარშრუტის დაჯავშნა</h2>

            <div className="modal-route-info">
              <h3>
                {route.from} — {route.to}
              </h3>

              <p>მგზავრობის დრო: {route.duration}</p>
              <p>ფასი: {route.price} ₾-დან</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <label htmlFor="passenger-name">
                სახელი

                <input
                  id="passenger-name"
                  type="text"
                  placeholder="შეიყვანე სახელი"
                  aria-invalid={Boolean(errors.name)}
                  {...register('name')}
                />
              </label>

              {errors.name && (
                <p className="form-error" role="alert">
                  {errors.name.message}
                </p>
              )}

              <label htmlFor="passenger-phone">
                ტელეფონის ნომერი

                <input
                  id="passenger-phone"
                  type="tel"
                  placeholder="მაგ. 599123456"
                  aria-invalid={Boolean(errors.phone)}
                  {...register('phone')}
                />
              </label>

              {errors.phone && (
                <p className="form-error" role="alert">
                  {errors.phone.message}
                </p>
              )}

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'იგზავნება...' : 'დადასტურება'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fromCity, setFromCity] = useState('')
  const [toCity, setToCity] = useState('')
  const [selectedRoute, setSelectedRoute] = useState(null)

  // Custom Hook — მარშრუტების ძიება და ფილტრაცია.
  const { filteredRoutes, isSearching } = useFilterRoutes(
    routes,
    fromCity,
    toCity,
  )

  function handleSearchSubmit(event) {
    event.preventDefault()

    document.getElementById('routes')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  // Event Delegation — ერთი click-handler მთელი სიისთვის.
  function handleRouteListClick(event) {
    const card = event.target.closest('[data-route-id]')

    if (!card || !event.currentTarget.contains(card)) {
      return
    }

    const route = routes.find(
      (item) => item.id === card.dataset.routeId,
    )

    if (route) {
      setSelectedRoute(route.id)
    }
  }

  // კლავიატურით არჩევა Enter-ით ან Space-ით.
  function handleRouteListKeyDown(event) {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return
    }

    const card = event.target.closest('[data-route-id]')

    if (!card || !event.currentTarget.contains(card)) {
      return
    }

    event.preventDefault()

    const route = routes.find(
      (item) => item.id === card.dataset.routeId,
    )

    if (route) {
      setSelectedRoute(route.id)
    }
  }

  const selectedRouteDetails = routes.find(
    (route) => route.id === selectedRoute,
  )

  return (
    <div className="app">
      <header className="navbar">
        <a
          className="logo"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          RouteGo
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'მენიუს დახურვა' : 'მენიუს გახსნა'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">
            {menuOpen ? '✕' : '☰'}
          </span>
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? 'nav-open' : ''}
          aria-label="მთავარი ნავიგაცია"
        >
          <a
            href="#routes"
            onClick={() => setMenuOpen(false)}
          >
            მარშრუტები
          </a>

          <a
            href="/about.html"
            onClick={() => setMenuOpen(false)}
          >
            ჩვენ შესახებ
          </a>
        </nav>

        <button className="login-button" type="button">
          შესვლა
        </button>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">მოგზაურობა უფრო მარტივად</p>

          <h1 id="hero-title">
            იპოვე შენი გზა.
            <br />
            <span>იმოგზაურე მარტივად.</span>
          </h1>

          <p className="hero-description">
            მოძებნე სასურველი მიმართულება, შეარჩიე მარშრუტი
            და დაგეგმე შენი შემდეგი მოგზაურობა.
          </p>

          <form className="search-box" onSubmit={handleSearchSubmit}>
            <label htmlFor="from-city">
              საიდან?

              <input
                id="from-city"
                name="from"
                type="search"
                placeholder="მაგ. თბილისი"
                value={fromCity}
                onChange={(event) => setFromCity(event.target.value)}
                autoComplete="off"
                aria-controls="route-list"
              />
            </label>

            <label htmlFor="to-city">
              სად?

              <input
                id="to-city"
                name="to"
                type="search"
                placeholder="მაგ. ბათუმი"
                value={toCity}
                onChange={(event) => setToCity(event.target.value)}
                autoComplete="off"
                aria-controls="route-list"
              />
            </label>

            <button type="submit">მარშრუტების ნახვა</button>
          </form>
        </section>

        <section
          className="routes-section"
          id="routes"
          aria-labelledby="routes-title"
        >
          <p className="eyebrow">შენთვის შერჩეული</p>

          <h2 id="routes-title">პოპულარული მარშრუტები</h2>

          <p
            className="search-status"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {isSearching ? (
              <>
                <span className="routego-pulse" aria-hidden="true" />
                მარშრუტების ძიება...
              </>
            ) : (
              `ნაპოვნია ${filteredRoutes.length} მარშრუტი`
            )}
          </p>

          <div
            className="route-grid"
            id="route-list"
            onClick={handleRouteListClick}
            onKeyDown={handleRouteListKeyDown}
            aria-busy={isSearching}
          >
            {filteredRoutes.map((route) => {
              const isSelected = selectedRoute === route.id

              return (
                <article
                  className={`route-card${isSelected ? ' is-selected' : ''}`}
                  key={route.id}
                  data-route-id={route.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={`${route.from} — ${route.to}, ფასი ${route.price} ლარიდან`}
                >
                  <figure className="route-icon">
                    <span aria-hidden="true">{route.icon}</span>
                    <figcaption>{route.description}</figcaption>
                  </figure>

                  <p className="route-label">{route.category}</p>

                  <h3>
                    {route.from} — {route.to}
                  </h3>

                  <p className="route-info">
                    <time dateTime={route.durationISO}>
                      {route.duration}
                    </time>
                  </p>

                  <div className="route-footer">
                    <span>ერთი მგზავრი</span>
                    <strong>{route.price} ₾-დან</strong>
                  </div>

                  <p className="route-select-hint">
                    {isSelected
                      ? '✓ მარშრუტი არჩეულია'
                      : 'აირჩიე მარშრუტი'}
                  </p>
                </article>
              )
            })}
          </div>

          {!isSearching && filteredRoutes.length === 0 && (
            <div className="no-routes" role="status">
              <h3>მარშრუტი ვერ მოიძებნა</h3>

              <p>
                სცადე სხვა ქალაქის სახელი ან შეცვალე საძიებო ტექსტი.
              </p>

              <button
                type="button"
                onClick={() => {
                  setFromCity('')
                  setToCity('')
                  setSelectedRoute(null)
                }}
              >
                ძიების გასუფთავება
              </button>
            </div>
          )}

          {selectedRouteDetails && (
            <section
              className="selected-route"
              aria-labelledby="selected-route-title"
              aria-live="polite"
            >
              <h3 id="selected-route-title">არჩეული მარშრუტი</h3>

              <p>
                {selectedRouteDetails.from} — {selectedRouteDetails.to}
              </p>

              <p>
                მგზავრობის დრო: {selectedRouteDetails.duration}
              </p>

              <p>
                ფასი: {selectedRouteDetails.price} ₾-დან
              </p>

              <p className="booking-note">
                ეს არის დემო არჩევა. ბილეთის რეალური დაჯავშნა ჯერ
                არ არის დაკავშირებული სისტემასთან.
              </p>
            </section>
          )}

          <aside aria-label="მოგზაურობის რჩევა">
            <h3>მოგზაურობის რჩევა</h3>

            <p>
              მგზავრობის დაგეგმვამდე გადაამოწმე გამგზავრების
              დრო და ბილეთის ფასი.
            </p>
          </aside>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <h2 id="about-title">შენი მოგზაურობა იწყება აქ</h2>

          <p>
            RouteGo გეხმარება სასურველი მარშრუტის მარტივად მოძებნაში.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>
          <small>
            © <time dateTime="2026">2026</time> RouteGo — იმოგზაურე მარტივად.
          </small>
        </p>
      </footer>

      {selectedRouteDetails && (
        <RouteModal
          route={selectedRouteDetails}
          onClose={() => setSelectedRoute(null)}
        />
      )}
    </div>
  )
}

export default App


import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="/">RouteGo</a>

        <nav>
          <a href="#routes">მარშრუტები</a>
          <a href="#about">ჩვენ შესახებ</a>
        </nav>

        <button className="login-button">შესვლა</button>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">მოგზაურობა უფრო მარტივად</p>

          <h1>
            იპოვე შენი გზა.
            <br />
            <span>იმოგზაურე მარტივად.</span>
          </h1>

          <p className="hero-description">
            მოძებნე სასურველი მიმართულება, შეარჩიე მარშრუტი
            და დაგეგმე შენი შემდეგი მოგზაურობა.
          </p>

          <div className="search-box">
            <label>
              საიდან?
              <input type="text" placeholder="მაგ. თბილისი" />
            </label>

            <label>
              სად?
              <input type="text" placeholder="მაგ. ბათუმი" />
            </label>

            <button onClick={() => {
              document.getElementById('routes')?.scrollIntoView({
                behavior: 'smooth'
              })
            }}>
              მარშრუტების ნახვა
            </button>
          </div>
        </section>

        <section className="routes-section" id="routes">
          <p className="eyebrow">შენთვის შერჩეული</p>
          <h2>პოპულარული მარშრუტები</h2>

          <div className="route-grid">
            <article className="route-card">
              <div className="route-icon">🏙️</div>
              <p className="route-label">პოპულარული მიმართულება</p>
              <h3>თბილისი — ბათუმი</h3>
              <p className="route-info">დაახლოებით 6 საათი</p>
              <div className="route-footer">
                <span>ერთი მგზავრი</span>
                <strong>40 ₾-დან</strong>
              </div>
            </article>

            <article className="route-card">
              <div className="route-icon">⛰️</div>
              <p className="route-label">მთის მიმართულება</p>
              <h3>თბილისი — გუდაური</h3>
              <p className="route-info">დაახლოებით 2.5 საათი</p>
              <div className="route-footer">
                <span>ერთი მგზავრი</span>
                <strong>25 ₾-დან</strong>
              </div>
            </article>

            <article className="route-card">
              <div className="route-icon">🌿</div>
              <p className="route-label">დასავლეთ საქართველო</p>
              <h3>თბილისი — ქუთაისი</h3>
              <p className="route-info">დაახლოებით 3.5 საათი</p>
              <div className="route-footer">
                <span>ერთი მგზავრი</span>
                <strong>25 ₾-დან</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <h2>შენი მოგზაურობა იწყება აქ</h2>
          <p>
            RouteGo გეხმარება სასურველი მარშრუტის მარტივად მოძებნაში.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 RouteGo — იმოგზაურე მარტივად.</p>
      </footer>
    </div>
  )
}

export default App

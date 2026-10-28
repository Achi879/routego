
import './globals.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="/">RouteGo</a>

        <nav aria-label="მთავარი ნავიგაცია">
          <a href="#routes">მარშრუტები</a>
<a href="/about.html">ჩვენ შესახებ</a>       
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

          <form
            className="search-box"
            onSubmit={(event) => {
              event.preventDefault()
              document.getElementById('routes')?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            <label>
              საიდან?
              <input type="text" placeholder="მაგ. თბილისი" />
            </label>

            <label>
              სად?
              <input type="text" placeholder="მაგ. ბათუმი" />
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

          <div className="route-grid">
            <article className="route-card">
              <figure className="route-icon">
                <span aria-hidden="true">🏙️</span> 
                <figcaption>ქალაქის მიმართულება</figcaption><br />
              </figure>

              <p className="route-label">პოპულარული მიმართულება</p>
              <h3>თბილისი — ბათუმი</h3>
              <p className="route-info">
                დაახლოებით <time dateTime="PT6H">6 საათი</time>
              </p>

              <div className="route-footer">
                <span>ერთი მგზავრი</span>
                <strong>40 ₾-დან</strong>
              </div>
            </article>

            <article className="route-card">
              <figure className="route-icon">
                <span aria-hidden="true">⛰️</span>
                <figcaption>მთის მიმართულება</figcaption>
              </figure>

              <p className="route-label">მთის მიმართულება</p>
              <h3>თბილისი — გუდაური</h3>
              <p className="route-info">
                დაახლოებით <time dateTime="PT2H30M">2.5 საათი</time>
              </p>

              <div className="route-footer">
                <span>ერთი მგზავრი</span>
                <strong>25 ₾-დან</strong>
              </div>
            </article>

            <article className="route-card">
              <figure className="route-icon">
                <span aria-hidden="true">🌿</span>
                <figcaption>ბუნების მიმართულება</figcaption>
              </figure>

              <p className="route-label">დასავლეთ საქართველო</p>
              <h3>თბილისი — ქუთაისი</h3>
              <p className="route-info">
                დაახლოებით <time dateTime="PT3H30M">3.5 საათი</time>
              </p>

              <div className="route-footer">
                <span>ერთი მგზავრი</span>
                <strong>25 ₾-დან</strong>
              </div>
            </article>
          </div>

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
    </div>
  )
}

export default App

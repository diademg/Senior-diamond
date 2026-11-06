const portrait = "/images/ChatGPT_Image_Sep_12__2026__08_46_11_AM-removebg-preview-removebg-preview.png";
const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
  return <main className="site-shell">
    <header className="nav">
      <a className="wordmark" href="#" aria-label="Adeoye Emmanuel home">Adeoye<br/>Emmanuel<span>.</span></a>
      <nav className="nav-links" aria-label="Main navigation">
        <a className="active" href="#">Home</a><a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#testimonials">Testimonials</a><a href="#faq">FAQs</a>
      </nav>
      <div className="availability"><i className="dot"/> Open to Projects</div>
      <a className="nav-cta" href="#contact">Let’s Talk <Arrow/></a>
    </header>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-left">
        <p className="hero-kicker">WEBFLOW DEVELOPER &amp; WEBSITE DESIGNER</p>
        <h1 className="hero-title" id="hero-title"><span className="title-line">I Design &amp; Build</span><span className="title-line"><em>Webflow</em> Websites</span><span className="title-line">That Move Brands</span><span className="title-line">Forward<span className="period">.</span></span></h1>
        <p className="hero-copy">I help businesses and founders create modern, high-performing Webflow websites — from design and redesign to CMS and fully responsive builds.</p>
        <div className="hero-actions"><a className="button-dark" href="#work">Explore My Work <Arrow/></a><a className="button-outline" href="#contact">Let’s Work Together</a></div>
        <div className="project-pill"><i className="dot"/> Available for new projects</div>
      </div>
      <div className="hero-visual">
        <div className="webflow-panel" aria-hidden="true"><div className="webflow-mark">W</div><span>Webflow</span></div>
        <img className="portrait" src={portrait} alt="Adeoye Emmanuel wearing a dark suit" fetchPriority="high"/>
        <div className="portrait-caption">ADEOYE EMMANUEL <span>·</span> WEBFLOW DEVELOPER</div>
      </div>
    </section>
    <footer className="hero-bottom"><span>WEBFLOW DESIGN · DEVELOPMENT · CMS</span><span>Thoughtful websites. Built to move brands forward.</span><a href="#about">SCROLL TO EXPLORE ↓</a></footer>
    <section className="stats-strip" aria-label="A little perspective">
      <div className="stats-heading">
        <span>A LITTLE PERSPECTIVE</span>
        <p>Good work, built with good people.</p>
      </div>
      <div className="stats-grid">
        <article className="stat-item"><span className="stat-index">01</span><strong>150+</strong><p>Projects completed</p></article>
        <article className="stat-item"><span className="stat-index">02</span><strong>70+</strong><p>Clients served</p></article>
        <article className="stat-item"><span className="stat-index">03</span><strong>45+</strong><p>Brands supported</p></article>
        <article className="stat-item"><span className="stat-index">04</span><strong>10+</strong><p>Platforms &amp; tools used</p></article>
      </div>
    </section>
    <section className="selected-work" id="work" aria-labelledby="work-title">
      <div className="work-intro">
        <div><span className="section-eyebrow">SELECTED WORK / 2026</span><h2 id="work-title">A few projects, <em>built with purpose.</em></h2></div>
        <p>A look at websites shaped around each brand, its audience, and the experience it needs to deliver.</p>
      </div>
      <div className="work-grid">
        <article className="work-card">
          <a className="work-preview" href="https://bokt-updated-site.webflow.io/" target="_blank" rel="noreferrer" aria-label="View Bokt website">
            <iframe className="bokt-screenshot-frame" title="Bokt homepage screenshot preview" loading="lazy" tabIndex={-1} srcDoc={`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#fff}img{display:block;width:100%;height:100%;object-fit:cover;object-position:top center}</style></head><body><img src="/images/bokt-hero-preview.svg" alt="Bokt website homepage preview"></body></html>`}/>
            <span className="preview-open"><Arrow/></span>
          </a>
          <div className="work-meta"><div className="work-title-wrap"><span className="work-number">01</span><div><h3>Bokt</h3><p>BRAND WEBSITE</p></div></div><a className="work-arrow" href="https://bokt-updated-site.webflow.io/" target="_blank" rel="noreferrer" aria-label="Open Bokt project"><Arrow/></a></div>
        </article>
        <article className="work-card">
          <a className="work-preview" href="https://www.outdoorgrillingcompanybbq.com/" target="_blank" rel="noreferrer" aria-label="View Outdoor Grilling Company website">
            <iframe src="https://www.outdoorgrillingcompanybbq.com/" title="Outdoor Grilling Company website preview" loading="lazy" tabIndex={-1}/>
            <span className="preview-open"><Arrow/></span>
          </a>
          <div className="work-meta"><div className="work-title-wrap"><span className="work-number">02</span><div><h3>Outdoor Grilling Company</h3><p>BBQ CATERING · HOSPITALITY</p></div></div><a className="work-arrow" href="https://www.outdoorgrillingcompanybbq.com/" target="_blank" rel="noreferrer" aria-label="Open Outdoor Grilling Company project"><Arrow/></a></div>
        </article>
        <article className="work-card">
          <a className="work-preview" href="https://www.ownpath401k.com/" target="_blank" rel="noreferrer" aria-label="View OwnPath 401k website">
            <iframe src="https://www.ownpath401k.com/" title="OwnPath 401k website preview" loading="lazy" tabIndex={-1}/>
            <span className="preview-open"><Arrow/></span>
          </a>
          <div className="work-meta"><div className="work-title-wrap"><span className="work-number">03</span><div><h3>OwnPath 401(k)</h3><p>RETIREMENT · FINANCIAL SERVICES</p></div></div><a className="work-arrow" href="https://www.ownpath401k.com/" target="_blank" rel="noreferrer" aria-label="Open OwnPath 401k project"><Arrow/></a></div>
        </article>
      </div>
      <div className="work-footer"><span>SELECTED WORK / 2026</span><span>Strategy, design &amp; Webflow development</span></div>
    </section>
    <section className="below-fold" id="about"><span>01 / ABOUT</span><p>Good digital experiences begin with clarity, thoughtful design, and attention to detail.</p></section>
    <div id="services"/><div id="process"/><div id="testimonials"/><div id="faq"/><div id="contact"/>
  </main>;
}
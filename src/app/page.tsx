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
        <div className="service-row">
          <div><b>◇</b><span>Webflow Design<br/>&amp; Development</span></div>
          <div><b>▤</b><span>Webflow CMS<br/>&amp; Content Setup</span></div>
          <div><b>↗</b><span>Webflow Redesign<br/>&amp; Optimization</span></div>
        </div>
        <div className="project-pill"><i className="dot"/> Available for new projects</div>
      </div>
      <div className="hero-visual">
        <div className="webflow-panel" aria-hidden="true"><div className="webflow-mark">W</div><span>Webflow</span></div>
        <img className="portrait" src={portrait} alt="Adeoye Emmanuel wearing a dark suit" fetchPriority="high"/>
        <div className="portrait-caption">ADEOYE EMMANUEL <span>·</span> WEBFLOW DEVELOPER</div>
      </div>
    </section>
    <footer className="hero-bottom"><span>WEBFLOW DESIGN · DEVELOPMENT · CMS</span><span>Thoughtful websites. Built to move brands forward.</span><a href="#about">SCROLL TO EXPLORE ↓</a></footer>
    <section className="below-fold" id="about"><span>01 / ABOUT</span><p>Good digital experiences begin with clarity, thoughtful design, and attention to detail.</p></section>
    <div id="services"/><div id="work"/><div id="process"/><div id="testimonials"/><div id="faq"/><div id="contact"/>
  </main>;
}
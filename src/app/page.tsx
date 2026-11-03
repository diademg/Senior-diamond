const Arrow = () => <span aria-hidden="true">↗</span>;
export default function Home() {
  return <main className="site-shell">
    <header className="nav">
      <a className="wordmark" href="#" aria-label="Adeoye Emmanuel home">ADEOYE<br/>EMMANUEL<span>WEBFLOW DEVELOPER</span></a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#work">Work</a><a href="#about">About</a><a href="#services">Services</a><a href="#process">Process</a><a href="#contact">Contact</a>
      </nav>
      <div className="availability"><i className="dot"/> Open to projects</div>
      <a className="nav-cta" href="#contact">Let’s talk <Arrow/></a>
    </header>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-left">
        <p className="eyebrow-serif">Hello, I’m</p>
        <h1 className="hero-title" id="hero-title">Adeoye<br/>Emmanuel<span className="period">.</span></h1>
        <p className="hero-kicker">WEBFLOW DEVELOPER &amp; WEBSITE DESIGNER</p>
        <p className="hero-copy">I design and build thoughtful Webflow websites that help businesses communicate clearly, earn trust, and turn more visitors into customers.</p>
        <div className="hero-actions"><a className="button-dark" href="#work">Explore my work <Arrow/></a><a className="text-link" href="#contact">Start a project</a></div>
        <div className="location"><i className="dot"/> BASED IN NIGERIA · WORKING WORLDWIDE</div>
      </div>
      <div className="hero-visual" aria-label="Portrait placeholder for Adeoye Emmanuel">
        <div className="visual-word">DESIGN</div>
        <div className="portrait-frame" role="img" aria-label="Portrait artwork placeholder with Adeoye Emmanuel monogram"/>
        <div className="visual-note">DESIGN WITH INTENTION</div>
      </div>
      <aside className="hero-right">
        <div className="side-intro">TURNING IDEAS INTO<br/>USEFUL, CONSIDERED<br/>DIGITAL EXPERIENCES.</div>
        <div className="specialty"><strong>Web<span>flow</span></strong><small>DESIGN &amp; DEVELOPMENT</small></div>
        <div className="specialty"><strong>Website<br/>Design</strong><small>STRATEGY · DESIGN · CMS</small></div>
        <div className="open-note"><small>CURRENTLY OPEN TO</small><p>Good people, thoughtful projects, and new ideas.</p></div>
      </aside>
    </section>
    <footer className="hero-bottom"><span>WEBFLOW · WEBSITE DESIGN · CMS</span><span>Design and development for useful digital experiences.</span><span className="scroll-hint">SCROLL TO EXPLORE ↓</span></footer>
    <div id="work"/><div id="about"/><div id="services"/><div id="process"/><div id="contact"/>
  </main>;
}
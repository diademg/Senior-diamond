"use client";

import { useState } from "react";

const portrait = "/images/ChatGPT_Image_Sep_12__2026__08_46_11_AM-removebg-preview-removebg-preview.png";
const Arrow = () => <span aria-hidden="true">↗</span>;

const testimonials = [
  { quote: "Emmanuel did an excellent job with my Webflow website design and CMS setup. Great communication, attention to detail, and quality delivery. I am very satisfied with the results. Highly recommended!", name: "tony", service: "WEBFLOW DESIGN & CMS" },
  { quote: "Emmanuel did a fantastic job redesigning my Webflow website and optimizing it for SEO. The results are clean, professional, and well-structured. Great communication and attention to detail. Highly recommended!", name: "michael", service: "WEBFLOW REDESIGN & SEO" },
  { quote: "Working with Emmanuel was a great experience. He understood my vision, created a beautiful Webflow design, and handled my social media professionally. I truly appreciate his creativity and dedication!", name: "cokemannch", service: "WEBFLOW DESIGN & SOCIAL MEDIA" },
  { quote: "Emmanuel was incredibly helpful throughout the Google AdSense approval process. He guided everything professionally, paid attention to the requirements, and delivered great results. I am very happy with his service!", name: "jakejohnson01", service: "GOOGLE ADSENSE SUPPORT" },
  { quote: "I have had a great experience working with Emmanuel on my digital marketing and social media management. He is consistent, creative, and understands how to keep my platforms active and engaging. Truly appreciate his ongoing support!", name: "shalin", service: "DIGITAL MARKETING & SOCIAL MEDIA" },
  { quote: "Emmanuel brought a thoughtful approach to our project, combining an attractive, user-friendly website design with effective SEO strategies. He focused on creating a strong online presence that makes it easier for potential customers to discover our business.", name: "christ", service: "WEBSITE DESIGN & SEO" },
  { quote: "Emmanuel did an amazing job improving our Webflow website. From fixing bugs and refining the CMS to optimizing performance, he handled everything with great expertise. The overall experience was smooth, and the results exceeded expectations!", name: "Client feedback", service: "WEBFLOW BUG FIXES, CMS & OPTIMIZATION" },
  { quote: "Emmanuel helped improve our Google Business Profile with great attention to detail. His work was professional, communication was excellent, and he made the whole process straightforward. Highly recommend his services!", name: "savannah", service: "GOOGLE BUSINESS PROFILE" },
  { quote: "I was sceptical at first, but he was genuinely interested in helping businesses to grow. He was very supportive, smart and knowledgeable about his work. Really good at what he does. Continue working with him!", name: "podlaaylsi", service: "ONGOING SUPPORT" }
];

export default function Home() {
  const [testimonialPage, setTestimonialPage] = useState(0);
  const testimonialPages = [0, 1, 2].map((page) => testimonials.slice(page * 3, page * 3 + 3));
  return <main className="site-shell">    <header className="nav">
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
            <iframe className="bokt-screenshot-frame" title="Bokt homepage screenshot preview" loading="lazy" tabIndex={-1} srcDoc={`<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"><style>*{box-sizing:border-box}html,body{margin:0;width:100%;height:100%;overflow:hidden;background:#fff}img{display:block;width:100%;height:100%;object-fit:cover;object-position:top center}</style></head><body><img src="https://raw.githubusercontent.com/diademg/Senior-diamond/main/Bokt%20Site.png" alt="Bokt website homepage preview"></body></html>`}/>
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
    <section className="services-section" id="services" aria-labelledby="services-title">
      <div className="services-heading">
        <div>
          <span className="section-eyebrow">WHAT I CAN DO FOR YOU</span>
          <h2 id="services-title">Services built around<br/><em>your next move.</em></h2>
        </div>
        <p>From the first impression to the final interaction, I help businesses create better digital experiences and turn more of the right visitors into customers.</p>
      </div>
      <div className="services-list">
        <article className="service-card"><span className="service-index">01</span><div><h3>Webflow Website Design</h3><p>Thoughtful, brand-led website design that gives your business a clear, confident online presence.</p></div><span className="service-symbol">↗</span></article>
        <article className="service-card"><span className="service-index">02</span><div><h3>Webflow Redesign</h3><p>Refresh an outdated website with a cleaner visual direction, clearer messaging and a smoother user experience.</p></div><span className="service-symbol">↗</span></article>
        <article className="service-card"><span className="service-index">03</span><div><h3>Webflow CMS &amp; Development</h3><p>Flexible Webflow builds and easy-to-manage CMS collections, developed to grow with your content and business.</p></div><span className="service-symbol">↗</span></article>
        <article className="service-card"><span className="service-index">04</span><div><h3>Responsive Web Design</h3><p>Consistent, intuitive experiences that look and work beautifully across desktop, tablet and mobile.</p></div><span className="service-symbol">↗</span></article>
        <article className="service-card"><span className="service-index">05</span><div><h3>Landing Page Development</h3><p>Focused landing pages with persuasive structure, clear calls to action and a journey designed to drive enquiries.</p></div><span className="service-symbol">↗</span></article>
        <article className="service-card"><span className="service-index">06</span><div><h3>Website Optimization</h3><p>Improve website speed, usability, structure and on-page experience to help visitors take the next step.</p></div><span className="service-symbol">↗</span></article>
        <article className="service-card"><span className="service-index">07</span><div><h3>Digital Marketing</h3><p>Support your online growth with stronger digital touchpoints, campaign-ready pages and a more consistent brand presence.</p></div><span className="service-symbol">↗</span></article>
        <article className="service-card"><span className="service-index">08</span><div><h3>Google AdSense</h3><p>AdSense setup and website integration, with thoughtful ad placement and guidance on creating a cleaner, policy-conscious monetization experience.</p></div><span className="service-symbol">↗</span></article>
      </div>
      <div className="services-footer"><span>DESIGN · DEVELOPMENT · DIGITAL GROWTH</span><a href="#contact">Have a project in mind? Let’s talk ↗</a></div>
    </section>
    
    <section className="process-section" id="process" aria-labelledby="process-title">
      <div className="process-heading">
        <div><span className="section-eyebrow">A CLEAR PATH FROM IDEA TO LAUNCH</span><h2 id="process-title">Good work happens<br/><em>one step at a time.</em></h2></div>
        <p>A thoughtful, collaborative process keeps every project focused — from understanding your goals to launching a website you’re proud to share.</p>
      </div>
      <div className="process-steps">
        <article className="process-step"><span className="process-number">01</span><div className="process-icon" aria-hidden="true">◎</div><h3>Discover</h3><p>We start with a conversation about your business, audience, goals and what success should look like.</p><span className="process-tag">LISTEN · ALIGN · PLAN</span></article>
        <article className="process-step"><span className="process-number">02</span><div className="process-icon" aria-hidden="true">✳</div><h3>Design</h3><p>I shape the structure and visual direction into a clear, engaging experience that feels right for your brand.</p><span className="process-tag">STRATEGY · STRUCTURE · UI</span></article>
        <article className="process-step"><span className="process-number">03</span><div className="process-icon" aria-hidden="true">⌘</div><h3>Build</h3><p>Your approved design becomes a responsive website, carefully developed and checked across screen sizes.</p><span className="process-tag">DEVELOP · REFINE · TEST</span></article>
        <article className="process-step"><span className="process-number">04</span><div className="process-icon" aria-hidden="true">↗</div><h3>Launch</h3><p>After final reviews, we get your website ready to go live — with a smooth handover for what comes next.</p><span className="process-tag">REVIEW · PUBLISH · GROW</span></article>
      </div>
      <div className="process-bottom"><span>COLLABORATIVE BY DESIGN</span><a href="#contact">Have a project in mind? Let’s make it happen ↗</a></div>
    </section>
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-visual">
        <div className="about-portrait-frame">
          <div className="about-portrait-glow" aria-hidden="true"/>
          <img src={portrait} alt="Adeoye Emmanuel, Webflow developer and website designer" loading="lazy"/>
          <div className="about-portrait-copy"><span>IDEAS · DESIGN · DEVELOPMENT</span><strong>ADEOYE<br/>EMMANUEL</strong><small>WEBFLOW DEVELOPER &amp; WEBSITE SPECIALIST</small></div>
        </div>
      </div>
      <div className="about-copy">
        <span className="section-eyebrow">A LITTLE ABOUT ME</span>
        <h2 id="about-title">More than a <em>Webflow</em> developer.</h2>
        <p className="about-lead">I’m Adeoye Emmanuel, a Webflow developer and website specialist who helps businesses build a stronger presence online.</p>
        <p>I design, build, redesign and improve Webflow websites — bringing together clear structure, thoughtful visuals and responsive development to create experiences that feel right for the brand and work for the people using them.</p>
        <p>My focus goes beyond making a website look good. I care about how clearly it communicates, how easily visitors find what they need, and how effectively it guides them towards taking action.</p>
        <p>Whether you’re starting from scratch or ready to improve an existing website, I bring a practical, detail-focused approach to turning your ideas into a polished digital experience.</p>
        <a className="about-cta" href="#contact">WORK WITH ME <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <section className="testimonial-section" id="testimonials" aria-labelledby="testimonial-title">
      <div className="testimonial-topline"><span className="section-eyebrow">KIND WORDS / CLIENT FEEDBACK</span><span>01 / TESTIMONIAL</span></div>
      <div className="testimonial-content">
        <div className="testimonial-heading"><h2 id="testimonial-title">The best part of the work is <em>earning trust.</em></h2><p>Good collaboration makes good websites. Here’s what a client shared after a Webflow redesign.</p></div>
        <div className="testimonial-quote">
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote> I especially appreciated the patience, communication, and willingness to listen to my ideas and make adjustments.</blockquote>
          <div className="testimonial-credit"><span className="testimonial-line"/><div><strong>Webflow redesign client</strong><span>HOMEPAGE &amp; PRODUCT PAGE IMPROVEMENTS</span></div></div>
        </div>
      </div>
      <div className="testimonial-footer"><span>BUILT ON COMMUNICATION &amp; COLLABORATION</span><a href="#contact">Let’s create something great together ↗</a></div>
    </section>

    <section className="testimonial-section" id="testimonials" aria-labelledby="testimonial-title">
      <div className="testimonial-topline"><span className="section-eyebrow">KIND WORDS</span><span>CLIENT FEEDBACK / 09 REVIEWS</span></div>
      <div className="testimonial-heading-row"><h2 id="testimonial-title">Built on trust.<br/><em>Backed by people.</em></h2><p>Good work is about more than what goes live. It’s about the people, collaboration, and care behind it.</p></div>
      <div className="testimonial-carousel" aria-live="polite"><div className="testimonial-track" style={{ transform: `translateX(-${testimonialPage * 100}%)` }}>
        {testimonialPages.map((page, pageIndex) => <div className="testimonial-page" key={pageIndex}>
          {page.map((item, itemIndex) => <article className={`testimonial-card ${itemIndex === 1 ? "testimonial-card-featured" : ""}`} key={item.name}>
            <div className="testimonial-card-top"><span className="testimonial-quote-mark">“</span><span>{String(pageIndex * 3 + itemIndex + 1).padStart(2, "0")} / 09</span></div>
            <blockquote>{item.quote}</blockquote>
            <div className="testimonial-card-credit"><span className="testimonial-avatar">{item.name === "Client feedback" ? "C" : item.name.charAt(0).toUpperCase()}</span><div><strong>{item.name}</strong><span>{item.service}</span></div><span className="testimonial-card-arrow">↗</span></div>
          </article>)}
        </div>)}
      </div></div>
      <div className="testimonial-controls"><span className="testimonial-count">TESTIMONIALS — SET {String(testimonialPage + 1).padStart(2, "0")} / 03</span>
        <div className="testimonial-dots" aria-label="Choose testimonial page">{testimonialPages.map((_, i) => <button key={i} type="button" className={testimonialPage === i ? "active" : ""} aria-label={`Show testimonial set ${i + 1}`} aria-pressed={testimonialPage === i} onClick={() => setTestimonialPage(i)}/>)}</div>
        <div className="testimonial-arrows"><button type="button" aria-label="Previous testimonials" onClick={() => setTestimonialPage((current) => (current + 2) % 3)}>←</button><button type="button" aria-label="Next testimonials" onClick={() => setTestimonialPage((current) => (current + 1) % 3)}>→</button></div>
      </div>
    </section>
    <div id="faq"/><div id="contact"/>
  </main>;
}
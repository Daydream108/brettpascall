const DATA = window.SITE_DATA;
const app = document.getElementById('app');
const publishedPosts = () => DATA.posts.filter(post => post.published === true);
const external = 'target="_blank" rel="noopener noreferrer"';

function externalIcon() { return '<span aria-hidden="true">↗</span>'; }
function arrowLink(label, href, attrs = '') {
  return `<a class="text-link" href="${href}" ${attrs}>${label} ${externalIcon()}</a>`;
}
function nav() {
  return `<a class="skip-link" href="#main">Skip to content</a>
    <header class="site-nav"><a class="brand" href="#/" aria-label="Brett Pascall home">Brett Pascall<span class="brand-dot">.</span></a>
    <nav aria-label="Primary navigation">
      <a href="#/?section=about">About</a><a href="#/?section=work">Work</a>
      <a href="#/?section=contact">Contact</a>
    </nav></header>`;
}
function footer() {
  return `<footer class="site-footer"><span>© ${new Date().getFullYear()} Brett Pascall</span><span>Austin, Texas</span><a href="#/resume">Résumé <span aria-hidden="true">↗</span></a></footer>`;
}
function homePage() {
  return `<main id="main" tabindex="-1">
    <section class="hero" aria-labelledby="intro-title">
      <div class="hero-copy"><p class="eyebrow">Hey, I’m Brett. / Austin, TX</p>
        <h1 id="intro-title">Brett<br>Pascall<span class="accent">.</span></h1>
        <p class="hero-intro">Customer success.<br class="desktop-break"> A creative background.</p>
        <p class="hero-note">I work in enterprise customer success at Optimizely. Previously at Datadog and Sprinklr.</p>
        <div class="hero-links">${arrowLink('A little about me', '#/?section=about')}${arrowLink('LinkedIn', 'https://www.linkedin.com/in/brett-pascall/', external)}</div>
      </div>
      <figure class="portrait"><img src="assets/brett-pascall.jpg" alt="Brett Pascall smiling in a charcoal jacket and white shirt" width="2500" height="1667" fetchpriority="high"><figcaption>Brett Pascall <span>Austin, TX</span></figcaption></figure>
    </section>
    <section id="about" class="section section-grid" aria-labelledby="about-title">
      <div><p class="eyebrow">About</p><h2 id="about-title">A bit about me.</h2></div>
      <div class="prose"><p class="lead">I’m based in Austin and work in customer success.</p>
      <p>I help teams get started with software, make it part of their day-to-day work, and figure out what they need next. I’ve worked with smaller businesses and enterprise customers.</p>
      <p>My background also includes media, interviews, and film. These days, you’ll find that work alongside my experience in tech here.</p></div>
    </section>
    <section id="work" class="section section-grid" aria-labelledby="work-title">
      <div><p class="eyebrow">My experience</p><h2 id="work-title">The day job.</h2>${arrowLink('View my résumé', '#/resume')}</div>
      <div class="experience-list">
        <article class="job"><div class="job-heading"><h3>Optimizely</h3><span>2025 — Present</span></div><p class="job-role">Enterprise Customer Success Manager</p><p>Helping customers adopt the platform, navigate renewals, and put new capabilities to use. I also contribute to the CS AI Cabinet.</p></article>
        <article class="job"><div class="job-heading"><h3>Datadog</h3><span>2023 — 2025</span></div><p class="job-role">Scaled Customer Success Manager</p><p>Supporting commercial customers through adoption, renewal, and growth.</p></article>
        <article class="job"><div class="job-heading"><h3>Sprinklr</h3><span>2022 — 2023</span></div><p class="job-role">Senior Enterprise Relationship Manager, Team Lead</p><p>Building enterprise relationships and helping new teammates get started.</p></article>
      </div>
    </section>
    ${DATA.projects.length ? `<section id="projects" class="section section-grid" aria-labelledby="project-title"><div class="project-copy"><p class="eyebrow">On the side / A personal project</p><h2 id="project-title">Bookcase</h2><p>A place to discover books, keep track of what you’re reading, and share recommendations.</p>${arrowLink('Explore Bookcase', 'https://bookcasehq.com/', external)}</div><a href="https://bookcasehq.com/" class="project-preview" ${external} aria-label="Visit Bookcase, my social reading project"><div class="browser-bar" aria-hidden="true"><span class="browser-dots">● ● ●</span><span>bookcasehq.com</span><span>↗</span></div><img src="assets/bookcase-preview.jpg" alt="Bookcase homepage with book covers and the headline Your books. Your people. Your Bookcase." width="1270" height="700" loading="lazy"></a></section>` : ''}
    <section id="media" class="section section-grid" aria-labelledby="media-title"><div><p class="eyebrow">A creative background</p><h2 id="media-title">Before tech, <br>there was film.</h2></div><div class="prose"><p>I spent time interviewing people about their creative work and working on film projects. My published work and film profile are here.</p><div class="profile-links">${arrowLink('Writing & interviews on Muck Rack', 'https://muckrack.com/brett-pascall/articles', external)}${arrowLink('My Sundance Collab profile', 'https://collab.sundance.org/people/Brett-Pascall-1617246437', external)}</div></div></section>
    ${publishedPosts().length ? `<section class="section section-grid"><div><p class="eyebrow">Writing</p><h2>Recent notes.</h2></div><div>${publishedPosts().slice(0,3).map(post => `<p>${arrowLink(post.title, '#/writing/' + post.slug)}</p>`).join('')}${arrowLink('All writing', '#/writing')}</div></section>` : ''}
    <section class="section section-grid outside" aria-labelledby="outside-title"><div><p class="eyebrow">Away from the screen</p><h2 id="outside-title">Off the clock.</h2></div><ul class="hobbies"><li class="hobby hobby--pool"><span class="pool-ball" aria-hidden="true"><span>8</span></span><span>Pool league</span></li><li class="hobby hobby--soccer"><svg class="soccer-mark" viewBox="0 0 100 80" fill="none" aria-hidden="true"><rect x="5" y="5" width="90" height="70" rx="2"/><path d="M50 5v70M5 22h17v36H5m90-36H78v36h17"/><circle cx="50" cy="40" r="15"/><circle cx="50" cy="40" r="2" fill="currentColor" stroke="none"/></svg><span>Soccer</span></li><li class="hobby hobby--fitness"><svg class="fitness-mark" viewBox="0 0 100 80" fill="none" aria-hidden="true"><path d="M28 40h44M12 29v22m12-31v40m52-40v40m12-31v22"/></svg><span>Fitness</span></li></ul></section>
    <section id="contact" class="contact" aria-labelledby="contact-title"><p class="eyebrow">Get in touch</p><h2 id="contact-title">Say hello.</h2><p>Email me or find me on LinkedIn.</p><div class="contact-links">${arrowLink('hello@brettpascall.com', 'mailto:hello@brettpascall.com')}${arrowLink('Find me on LinkedIn', 'https://www.linkedin.com/in/brett-pascall/', external)}</div></section>
  </main>`;
}
function writingPage(slug) {
  const posts = publishedPosts();
  const post = posts.find(item => item.slug === slug);
  if (post) {
    document.title = `${post.title} / Brett Pascall`;
    return `<main id="main" tabindex="-1" class="page page--post"><a href="#/writing" class="text-link">← All writing</a><h1>${post.title}</h1><article class="prose">${post.body.map(p=>`<p>${p}</p>`).join('')}</article></main>`;
  }
  document.title = 'Writing / Brett Pascall';
  return `<main id="main" tabindex="-1" class="page"><a href="#/" class="text-link">← Home</a><h1>Writing</h1>${posts.length ? posts.map(p=>`<article class="job"><h2>${arrowLink(p.title, '#/writing/'+p.slug)}</h2><p>${p.excerpt}</p></article>`).join('') : `<p class="lead">You can find my published writing and interviews on Muck Rack.</p>${arrowLink('Browse my published work', 'https://muckrack.com/brett-pascall/articles', external)}`}</main>`;
}

function resumePage() {
  document.title = "Resume / Brett Pascall";
  const experience = [
    {
      role: "Enterprise Customer Success Manager",
      company: "Optimizely",
      dates: "Feb 2025 - Present",
      location: "Austin, TX",
      bullets: [
        "Own a portfolio of 28 accounts representing $6.1M+ ARR; manage full lifecycle from onboarding through renewal and expansion, delivering 97% gross retention in 2025 and tracking 94% YTD in 2026.",
        "Selected to Optimizely's CS AI Cabinet; partner with Product and Engineering to shape the CS AI roadmap and prioritize LLM-powered features based on customer use cases.",
        "Lead customer onboarding and adoption for Opal, Optimizely's LLM-powered agent platform; run enablement workshops and pilot programs across enterprise CMS accounts.",
        "Drive fast time-to-value through technical integration guidance, best-practice activation, and trusted-advisor relationships with C-suite and developer champions.",
        "Monitor account health, usage signals, and engagement metrics in Gainsight and Salesforce to surface risk early and identify upsell and cross-sell opportunities."
      ]
    },
    {
      role: "Scaled Customer Success Manager",
      company: "Datadog",
      dates: "Nov 2023 - Feb 2025",
      location: "Austin, TX",
      bullets: [
        "Managed 150+ commercial accounts ranging from $10K to $250K+ ARR, balancing personalized engagement with scalable, programmatic outreach.",
        "Owned full renewal cycles and upsell negotiations in HubSpot and Salesforce; averaged 121% quota attainment across Q2-Q4 FY24, with a peak quarter of 150%.",
        "Built scalable success resources, guides, and reference implementations that accelerated time-to-value across the broader commercial segment.",
        "Served as voice of the customer to Product and GTM, feeding usage and product insights back to influence roadmap and self-serve experience."
      ]
    },
    {
      role: "Senior Enterprise Relationship Manager, Team Lead",
      company: "Sprinklr",
      dates: "Feb 2022 - Oct 2023",
      location: "Austin, TX",
      bullets: [
        "Sourced $8.2M+ in qualified pipeline in the large enterprise sector, consistently surpassing quota and leading discovery calls with C-suite executives.",
        "Mentored new SDR hires on discovery, value messaging, and cross-departmental execution."
      ]
    }
  ];

  const skills = [
    ["Customer Success", "Onboarding and activation, adoption, renewals, upsell and cross-sell, account health, voice of customer, lifecycle management"],
    ["Tools", "Salesforce, HubSpot, Gainsight, Zendesk, Clari, Tableau, Metabase, Jira, LinkedIn Sales Navigator, Slack, VS Code"],
    ["AI / Technical", "LLM-powered products, RAG, LangChain, API-first SaaS, ChatGPT, Claude, Gemini, Codex"]
  ];

  return `
    <main class="page page--resume">
      <header class="page__header resume-hero">
        <p class="page__crumb"><a href="#/">Home</a> / Resume</p>
        <h1>Brett Pascall</h1>
        <p>Enterprise Customer Success Manager in Austin, Texas, focused on SaaS adoption, renewals, AI-enabled customer workflows, and product feedback loops.</p>
        <div class="resume-contact" aria-label="Contact details">
          <span>Austin, TX</span>
          <a href="https://www.linkedin.com/in/brett-pascall/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </header>
      <section class="resume-section">
        <h2>Experience</h2>
        <div class="resume-timeline">
          ${experience.map((job) => `
            <article class="resume-job">
              <div>
                <h3>${job.role}</h3>
                <p>${job.company}</p>
              </div>
              <div class="resume-job__meta">
                <span>${job.dates}</span>
                <span>${job.location}</span>
              </div>
              <ul>
                ${job.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
              </ul>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="resume-section resume-grid">
        <div>
          <h2>Education</h2>
          <article class="resume-card">
            <h3>Bachelor of Business Administration, Management</h3>
            <p>Angelo State University / San Angelo, TX / 2021 / 3.72 GPA</p>
          </article>
        </div>
        <div>
          <h2>Certifications</h2>
          <article class="resume-card">
            <h3>Command of the Message</h3>
            <p>Force Management / Datadog / 2023</p>
          </article>
          <article class="resume-card">
            <h3>MEDDIC Certified</h3>
            <p>Force Management / Datadog / 2023</p>
          </article>
        </div>
      </section>
      <section class="resume-section">
        <h2>Skills</h2>
        <div class="resume-skills">
          ${skills.map(([label, value]) => `
            <article>
              <h3>${label}</h3>
              <p>${value}</p>
            </article>
          `).join("")}
        </div>
      </section>
    </main>
  `;
}



function render() {
  const route = window.location.hash || '#/';
  document.title = 'Brett Pascall — Customer Success & More';
  let content = route.startsWith('#/resume') ? resumePage() : route.startsWith('#/writing') ? writingPage(route.split('/')[2]) : homePage();
  content = content.replace('<main class="page page--resume">', '<main id="main" tabindex="-1" class="page page--resume">');
  app.innerHTML = nav() + content + footer();
  const section = new URLSearchParams(route.split('?')[1] || '').get('section');
  requestAnimationFrame(() => {
    const target = section && document.getElementById(section);
    if (target) target.scrollIntoView({block:'start'});
    else window.scrollTo(0,0);
  });
}
document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (link?.getAttribute('href') === '#main') {
    event.preventDefault();
    document.getElementById('main')?.focus();
  } else if (link?.getAttribute('href') === window.location.hash) {
    render();
  }
});
window.addEventListener('hashchange', render);
render();

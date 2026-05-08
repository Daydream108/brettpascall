const DATA = window.SITE_DATA;
const app = document.getElementById("app");
let activeCategory = "All";

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function getRoute() {
  return window.location.hash || "#/";
}

function sectionLabel(index, text) {
  return `
    <div class="section-label">
      <span class="section-label__index">${index}</span>
      <span class="section-label__rule"></span>
      <span class="section-label__text">${text}</span>
    </div>
  `;
}

function tag(label, tone = "") {
  return `<span class="tag ${tone ? `tag--${tone}` : ""}">${label}</span>`;
}

function externalIcon() {
  return `
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path d="M3 11L11 3M5 3h6v6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>
  `;
}

function arrowLink(label, href, attrs = "") {
  return `<a href="${href}" class="arrow-link" ${attrs}><span>${label}</span>${externalIcon()}</a>`;
}

function nav() {
  return `
    <header class="site-nav">
      <div class="site-nav__inner">
        <a href="#/" class="brand" aria-label="Brett Pascall home">
          <span class="brand__mark">BP</span>
          <span class="brand__name">Brett Pascall</span>
        </a>
        <nav class="site-nav__links" aria-label="Primary navigation">
          <a href="#/?section=about" data-section-link="about">About</a>
          <a href="#/?section=projects" data-section-link="projects">Projects</a>
          <a href="#/writing">Writing</a>
          <a href="#/?section=media" data-section-link="media">Media</a>
          <a href="#/?section=contact" data-section-link="contact">Contact</a>
        </nav>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div>
          <div class="site-footer__name">Brett Pascall</div>
          <p class="site-footer__role">Customer Success / Builder / Austin, TX</p>
        </div>
        <div class="site-footer__cols">
          <div class="site-footer__col">
            <span class="site-footer__label">Site</span>
            <a href="#/">Home</a>
            <a href="#/?section=projects" data-section-link="projects">Projects</a>
            <a href="#/writing">Writing</a>
            <a href="#/resume">Resume</a>
          </div>
          <div class="site-footer__col">
            <span class="site-footer__label">Elsewhere</span>
            <a href="https://www.linkedin.com/in/brett-pascall/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://muckrack.com/brett-pascall/articles" target="_blank" rel="noopener">Muck Rack</a>
            <a href="https://bookcasehq.com/" target="_blank" rel="noopener">Bookcase</a>
            <a href="https://collab.sundance.org/people/Brett-Pascall-1617246437" target="_blank" rel="noopener">Sundance Collab</a>
          </div>
          <div class="site-footer__col">
            <span class="site-footer__label">Contact</span>
            <a href="https://www.linkedin.com/in/brett-pascall/" target="_blank" rel="noopener">LinkedIn</a>
            <a href="#/resume">Resume</a>
          </div>
        </div>
      </div>
      <div class="site-footer__base">
        <span>&copy; 2026 Brett Pascall / SafeHaven Ventures</span>
        <span>Built in public.</span>
      </div>
    </footer>
  `;
}

function hero() {
  return `
    <section class="hero">
      <div class="hero__grid">
        <div class="hero__copy">
          <p class="hero__eyebrow"><span></span>Austin, Texas / Available for conversation</p>
          <h1>Building,<br>operating,<br>and thinking <em>out loud.</em></h1>
          <p class="hero__sub">
            I'm Brett Pascall, a Customer Success Manager based in Austin, Texas, building products under
            <strong>SafeHaven Ventures</strong> and writing about technology, product thinking, career growth,
            and long-term trends.
          </p>
          <div class="hero__cta">
            ${arrowLink("See what I'm building", "#/?section=projects", 'data-section-link="projects"')}
            ${arrowLink("Read the writing", "#/writing")}
          </div>
        </div>
        <figure class="portrait">
          <img src="assets/brett-portrait.jpg" alt="Brett Pascall">
          <figcaption>
            <span>Customer Success Manager</span>
            <span>/</span>
            <span>Builder</span>
          </figcaption>
        </figure>
      </div>
      <div class="hero__ticker" aria-label="Current focus">
        <span>SafeHaven Ventures</span>
        <span>Bookcase</span>
        <span>Verdict Trade Signals</span>
        <span>Writing</span>
        <span>HYROX Anaheim 2026</span>
        <span>Austin, TX</span>
      </div>
    </section>
  `;
}

function about() {
  return `
    <section class="section about" id="about">
      ${sectionLabel("01", "About")}
      <div class="about__grid">
        <div class="about__lede">
          <p>I work at the intersection of <em>technology, product, and business</em>, helping companies adopt and scale digital platforms in a way that actually drives outcomes.</p>
        </div>
        <div class="about__body">
          <p>My experience is in SaaS, where I've managed SMB to enterprise customer relationships, led renewals and strategic conversations, and partnered with stakeholders to turn product capabilities into measurable results.</p>
          <p>Today I sit on Optimizely's CS AI Cabinet, partnering with Product and Engineering to shape the AI roadmap and prioritize LLM-powered features against real customer use cases. Before that, Datadog and Sprinklr taught me how to scale trust at speed.</p>
          <p>Outside of my role, I'm building. SafeHaven Ventures is the personal holding company for the projects below, and this site is where I think out loud about what I'm learning along the way.</p>
          <dl class="about__meta">
            <div><dt>Role</dt><dd>Commercial Customer Success Manager</dd></div>
            <div><dt>Company</dt><dd>Optimizely</dd></div>
            <div><dt>Based in</dt><dd>Austin, Texas</dd></div>
            <div><dt>Previously</dt><dd>Datadog / Sprinklr</dd></div>
            <div><dt>Building</dt><dd>SafeHaven Ventures</dd></div>
          </dl>
        </div>
      </div>
    </section>
  `;
}

function projects() {
  return `
    <section class="section projects" id="projects">
      ${sectionLabel("02", "Projects")}
      <div class="section__head">
        <h2>What I'm building under SafeHaven.</h2>
        <p>A holding company is just a shelf. These are the things on it.</p>
      </div>
      <div class="projects__list">
        ${DATA.projects
          .map(
            (project, index) => `
              <article class="project">
                <div class="project__index">${String(index + 1).padStart(2, "0")}</div>
                <div class="project__main">
                  <div class="project__head">
                    <h3>${project.name}</h3>
                    ${tag(project.status, project.tone)}
                  </div>
                  <p class="project__tagline">${project.tagline}</p>
                  <p>${project.description}</p>
                  <div class="project__foot">
                    <span>${project.role}</span>
                    ${
                      project.url
                        ? arrowLink("Visit site", project.url, 'target="_blank" rel="noopener"')
                        : `<span class="project__soon">Details soon</span>`
                    }
                  </div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function postCard(post, large = false) {
  return `
    <a href="#/writing/${post.slug}" class="post-card ${large ? "post-card--large" : ""}">
      <div class="post-card__meta">
        <span>${post.category}</span>
        <span>${formatDate(post.date)}</span>
        <span>${post.readTime} min read</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <span class="post-card__cta">Read essay ${externalIcon()}</span>
    </a>
  `;
}

function writingPreview() {
  return `
    <section class="section writing" id="writing">
      ${sectionLabel("03", "Writing")}
      <div class="section__head section__head--row">
        <div>
          <h2>Notes from the desk.</h2>
          <p>Short essays on product, building, career, and long-term thinking.</p>
        </div>
        ${arrowLink("View all posts", "#/writing")}
      </div>
      <div class="writing__list">
        ${DATA.posts.slice(0, 3).map((post) => postCard(post)).join("")}
      </div>
    </section>
  `;
}

function media() {
  return `
    <section class="section media" id="media">
      ${sectionLabel("04", "Media and Creative Work")}
      <div class="media__intro">
        <span>Creative background</span>
        <p>Before focusing fully on SaaS and building, I spent time in media, conducting interviews and working on creative projects. That experience shaped how I think about <em>storytelling, audiences, and communication</em>, which still influences how I operate and build today.</p>
      </div>
      <div class="media__featured">
        <div class="media__featured-mark">Featured</div>
        <div>
          <p class="media__eyebrow">Film / Director</p>
          <h3>A short film through Sundance Collab.</h3>
          <p>I directed a short film through Sundance Institute's Collab program: a study in restraint, framing, and the discipline of cutting an idea down to its essential frame.</p>
          ${arrowLink("View on Sundance Collab", "https://collab.sundance.org/people/Brett-Pascall-1617246437", 'target="_blank" rel="noopener"')}
        </div>
      </div>
      <div class="media__interviews">
        <p class="media__sublabel">Selected interviews</p>
        <div class="media__grid">
          ${DATA.interviews
            .map(
              (item) => `
                <article class="interview">
                  <span>${item.year}</span>
                  <h4>${item.title}</h4>
                  <p class="interview__person">${item.person}</p>
                  <p>${item.description}</p>
                  <a href="https://muckrack.com/brett-pascall/articles" target="_blank" rel="noopener">Read interview</a>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function outside() {
  const items = [
    ["Pool league", "Weekly. Long game, narrow margins."],
    ["Soccer", "Watching and playing, perpetual student."],
    ["HYROX Anaheim", "Training block in progress."],
    ["Reading", "Dogfooding Bookcase, by definition."]
  ];

  return `
    <section class="section outside" id="outside">
      ${sectionLabel("05", "Outside of Work")}
      <div class="outside__grid">
        <div class="outside__lede">
          <p>Fitness and competition are part of how I stay <em>consistent, disciplined, and focused</em> outside of work. None of these are hobbies in the resume sense. They are practice for the work.</p>
        </div>
        <ul class="outside__list">
          ${items
            .map(
              ([label, note]) => `
                <li>
                  <span>${label}</span>
                  <span>${note}</span>
                </li>
              `
            )
            .join("")}
        </ul>
      </div>
    </section>
  `;
}

function contact() {
  return `
    <section class="section contact" id="contact">
      ${sectionLabel("06", "Contact")}
      <div class="contact__grid">
        <div>
          <h2>Reach out for <em>partnerships</em>, <em>writing</em>, or a <em>conversation</em>.</h2>
          <p>Best way to reach me publicly is LinkedIn. For anything specific, send context and make it worth both our calendars.</p>
        </div>
        <div class="contact__list">
          <a href="https://www.linkedin.com/in/brett-pascall/" target="_blank" rel="noopener">
            <span>LinkedIn</span>
            <strong>in/brett-pascall</strong>
            ${externalIcon()}
          </a>
          <a href="#/resume">
            <span>Resume</span>
            <strong>Experience</strong>
            ${externalIcon()}
          </a>
        </div>
      </div>
    </section>
  `;
}

function homePage() {
  return `<main class="home">${hero()}${about()}${projects()}${writingPreview()}${media()}${outside()}${contact()}</main>`;
}

function writingPage() {
  const posts = activeCategory === "All" ? DATA.posts : DATA.posts.filter((post) => post.category === activeCategory);
  return `
    <main class="page page--writing">
      <header class="page__header">
        <p class="page__crumb"><a href="#/">Home</a> / Writing</p>
        <h1>Writing</h1>
        <p>Short essays on product, customer success, building, career growth, and the long arc.</p>
        <div class="page__meta">
          <span>${DATA.posts.length} posts</span>
          <span>Updated regularly</span>
        </div>
      </header>
      <div class="filters" aria-label="Filter posts">
        ${DATA.categories
          .map(
            (category) => `
              <button type="button" class="filter ${activeCategory === category ? "is-active" : ""}" data-filter="${category}">
                ${category}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="post-list">
        ${posts
          .map(
            (post) => `
              <a href="#/writing/${post.slug}" class="post-row">
                <div class="post-row__date">${formatDate(post.date)}</div>
                <div class="post-row__main">
                  <span>${post.category}</span>
                  <h3>${post.title}</h3>
                  <p>${post.excerpt}</p>
                </div>
                <div class="post-row__time">${post.readTime} min</div>
                ${externalIcon()}
              </a>
            `
          )
          .join("")}
      </div>
    </main>
  `;
}

function postPage(slug) {
  const post = DATA.posts.find((item) => item.slug === slug);
  if (!post) {
    document.title = "Post not found / Brett Pascall";
    return `
      <main class="page">
        <header class="page__header">
          <h1>Post not found.</h1>
          <p>That essay isn't here. Try the <a href="#/writing">writing index</a>.</p>
        </header>
      </main>
    `;
  }

  document.title = `${post.title} / Brett Pascall`;
  const more = DATA.posts.filter((item) => item.slug !== slug).slice(0, 2);
  return `
    <main class="page page--post">
      <header class="post__header">
        <p class="page__crumb"><a href="#/">Home</a> / <a href="#/writing">Writing</a> / ${post.category}</p>
        <h1>${post.title}</h1>
        <div class="post__meta">
          <span>${formatDate(post.date)}</span>
          <span>${post.category}</span>
          <span>${post.readTime} min read</span>
        </div>
      </header>
      <article class="post__body">
        <p class="post__lede">${post.excerpt}</p>
        ${post.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        <div class="post__signoff">
          <span>Brett, writing from Austin</span>
        </div>
      </article>
      <section class="post__more">
        ${sectionLabel("Up next", "Keep reading")}
        <div class="writing__list">${more.map((item) => postCard(item)).join("")}</div>
      </section>
    </main>
  `;
}

function resumePage() {
  document.title = "Resume / Brett Pascall";
  const experience = [
    {
      role: "Commercial Customer Success Manager",
      company: "Optimizely",
      dates: "Feb 2025 - Present",
      location: "Austin, TX",
      bullets: [
        "Own a portfolio of 28 commercial accounts representing $6.1M+ ARR; manage full lifecycle from onboarding through renewal and expansion, delivering 97% gross retention in 2025 and tracking 94% YTD in 2026.",
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
    ["Tools", "Salesforce, HubSpot, Gainsight, Zendesk, Clari, Tableau, Metabase, Jira, LinkedIn Sales Navigator, Slack"],
    ["AI / Technical", "LLM-powered products, RAG, LangChain, API-first SaaS, ChatGPT, Claude, Gemini"]
  ];

  return `
    <main class="page page--resume">
      <header class="page__header resume-hero">
        <p class="page__crumb"><a href="#/">Home</a> / Resume</p>
        <h1>Brett Pascall</h1>
        <p>Commercial Customer Success Manager in Austin, Texas, focused on SaaS adoption, renewals, AI-enabled customer workflows, and product feedback loops.</p>
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

function pageForRoute(route) {
  document.title = "Brett Pascall";
  if (route.startsWith("#/resume")) {
    return resumePage();
  }
  if (route.startsWith("#/writing/")) {
    return postPage(route.replace("#/writing/", "").split("?")[0]);
  }
  if (route.startsWith("#/writing")) {
    return writingPage();
  }
  return homePage();
}

function scrollToSection(section) {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function render({ preserveScroll = false } = {}) {
  const route = getRoute();
  const params = new URLSearchParams(route.split("?")[1] || "");
  const section = params.get("section");

  app.innerHTML = `${nav()}${pageForRoute(route)}${footer()}`;

  if (section) {
    requestAnimationFrame(() => scrollToSection(section));
  } else if (!preserveScroll) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}

document.addEventListener("click", (event) => {
  const sectionLink = event.target.closest("[data-section-link]");
  if (sectionLink) {
    event.preventDefault();
    const section = sectionLink.getAttribute("data-section-link");
    const route = getRoute();
    if (route === "#/" || route.startsWith("#/?")) {
      window.location.hash = `#/?section=${section}`;
      scrollToSection(section);
    } else {
      window.location.hash = `#/?section=${section}`;
    }
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    activeCategory = filter.getAttribute("data-filter");
    render({ preserveScroll: true });
  }
});

window.addEventListener("hashchange", () => render());
render();

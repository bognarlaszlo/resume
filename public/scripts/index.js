// resources/templates/item.js
var item_default = (template, label, data) => `
    <div class="grid gap-md margin-bottom-lg">
        <h5 class="title col-2 color-contrast-medium">${label}</h5>
        <div class="data col-10 font-primary text-justify">${template(data)}</div>
    </div>
`;

// resources/templates/header.js
var header_default = ({ name, title, profiles }) => `
    <header class="flex justify-between items-center">
        <section>
            <h1 class="display-1">${name}</h1>
            <p class="text-lg color-contrast-low">${title}</p>
        </section>
        
        <aside class="flex flex-column">
            ${profiles.map(({ icon, url, label }) => `
                <a class="flex items-center" href="${url}">
                    <i class="icon icon--md ${icon}"></i> ${label}
                </a>
            `).join("")}
        </aside>
    </header>
`;

// resources/templates/partials/awards.js
var awards_default = (data) => data.map(({ name, date, award }) => `
    <article class="margin-bottom-sm">
        <h5 class="font-secondary"><strong>${name}</strong> / ${award} <span class="color-contrast-low">(${date})</span></h5>
    </article>
`).join("");

// resources/templates/partials/bio.js
var bio_default = (data) => `<p>${data}</p>`;

// resources/templates/partials/interests.js
var interests_default = (data) => `<p>${data.map(({ name }) => `${name}`).join(" / ")}</p>`;

// resources/templates/partials/languages.js
var languages_default = (data) => `<p>${data.map(({ language, fluency }) => `
    <article class="margin-bottom-sm">
        <h5 class="font-secondary"><strong>${language}</strong> / ${fluency}</h5>
    </article>
`).join("")}</p>`;

// resources/templates/partials/skills.js
var skills_default = (data) => data.map(({ name, keywords }) => `
    <div class="grid gap-sm">
        <div class="col-2 color-contrast-low">${name}</div>
        <div class="col">${keywords}</div>
    </div>
`).join("");

// resources/templates/partials/work.js
var work_default = (data) => data.map(({ company, position, startDate, endDate, summary, highlights }) => `
    <article class="margin-bottom-lg">
        <header>
            <h5 class="font-secondary"><strong>${position}</strong> / ${company}</h5>
            <small>${startDate} - ${endDate}</small>
        </header>
        <p>${summary}</p>
        <ul class="highlights">
            ${highlights.map((highlight) => `
                <li>${highlight}</li>
            `).join("")}
        </ul>
    </article>
`).join("");

// data.json
var basics = {
  name: "L\xE1szl\xF3 Bogn\xE1r",
  title: "Front-End Developer",
  summary: "I'm a Front-End Developer with 10 years industry experience. I specialize in vanilla JavaScript but have hands-on experience with Angular, Lit, Vue, React and Svelte.",
  profiles: [
    { icon: "fas fa-at", url: "mailto:blaszlo89@gmail.com", label: "blaszlo89@gmail.com" },
    { icon: "fas fa-phone", url: "tel:+36705348770", label: "+36-70/534-8770" },
    { icon: "fab fa-github", url: "https://github.com/bognarlaszlo", label: "bognarlaszlo" }
  ]
};
var skills = [
  { name: "Languages", keywords: "JavaScript, SASS, CSS, PHP, Bash, AppleScript" },
  { name: "Frameworks", keywords: "Node, LitElement, Svelte, React, Vue.js, Wordpress, Yii2, Laravel" },
  { name: "Tools", keywords: "Git, Github Actions, ESBuild, Webpack, Docker, CircleCI, Jenkins, Sketch, Adobe CC" }
];
var work = [
  {
    company: "Dialogue Creatives Kft. (Index.hu - formerly IndaLabs Zrt.)",
    position: "Senior Front-End Developer",
    startDate: "2017 november",
    endDate: "",
    summary: "",
    highlights: [
      "Come up with and realize ideas for big events (e.g. Parliamentary Election, World Cup, Winter Olympics)",
      "Developing a back-end to work with data for the Parliamentary Election",
      "Improving sites performance",
      "Creating reusable, cross-site banner types",
      "Plan and make new ad serving mechanism for Index.hu related sites",
      "Leading the front-end development team",
      "Actively collaborate with the Journalists, Project Managers, Art Director & Designers"
    ]
  },
  {
    company: "GRANTIS Zrt.",
    position: "Senior Web Developer",
    website: "https://grantis.hu/",
    startDate: "2016 november",
    endDate: "2017 november",
    summary: "",
    highlights: [
      "Create high performance informational websites for the company",
      "Developing online calculators based on Excel spreadsheets",
      "Creating a Core API for cross-site information sharing, better user experience and monitoring",
      "Integrating MiniCRM to the Core API",
      "Leading the development team",
      "Actively collaborate with the Financial Professionals, Art Director & Designers"
    ]
  },
  {
    company: "Blog.hu (Inda-Labs Zrt.)",
    position: "Front-End Developer",
    website: "https://blog.hu/",
    startDate: "2015 november",
    endDate: "2016 november",
    summary: "",
    highlights: [
      "Optimizing & Maintaining performance of our own blogging platform",
      "Creating & Maintaining themes for the platform",
      "Actively collaborate with the Art Director & Designers",
      "Communication with premium bloggers"
    ]
  },
  {
    company: "UP Advertising",
    position: "Senior Web Developer",
    website: "https://up.hu/",
    startDate: "2014 january",
    endDate: "2015 november",
    summary: "",
    highlights: [
      "Creating a wide variety of promotional and company websites",
      "Creating promotional tablet games for offline events (e.g. Slot Machine, Quiz)",
      "Leading the development team",
      "Actively collaborate with the Art Director & Designers",
      "Present ideas and finished products to the clients"
    ]
  },
  {
    company: "Sebastiano Scarpa Kft.",
    position: "Web Developer, Marketing Assistant",
    website: "https://www.sebastiano.hu/",
    startDate: "2012 october",
    endDate: "2014 january",
    summary: "",
    highlights: [
      "Creating and maintaining the company website",
      "Making Facebook apps",
      "Come up with web-based ideas to increase engagement with possible and existing customers."
    ]
  }
];
var volunteer = [
  {
    organization: "AppArt Egyes\xFClet",
    position: "Volunteer",
    website: "http://appart.hu/",
    startDate: "2019 january",
    endDate: "2019 december"
  }
];
var awards = [
  {
    name: "M\xE1traszentistv\xE1ni S\xEDpark",
    date: "2015 december",
    award: "Az \xC9v Honlapja - Special Prize"
  },
  {
    name: "Berentzen Liqueur",
    date: "2014 december",
    award: "Az \xC9v Honlapja - Special Prize"
  },
  {
    name: "Berentzen Liqueur",
    date: "2014 december",
    award: "Media Design - Golden Award"
  },
  {
    name: "Peppers! Restaurant",
    date: "2014 m\xE1jus",
    award: "Hipn\xF3zis - Bronze Award"
  }
];
var languages = [
  {
    language: "Hungarian",
    fluency: "Native"
  },
  {
    language: "English",
    fluency: "B2"
  }
];
var interests = [
  {
    name: "IoT"
  },
  {
    name: "Machine Learning"
  },
  {
    name: "Open Source"
  },
  {
    name: "Travel"
  },
  {
    name: "Gastronomy"
  },
  {
    name: "Music"
  }
];
var data_default = {
  basics,
  skills,
  work,
  volunteer,
  awards,
  languages,
  interests
};

// resources/scripts/index.js
document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
            <main class="max-width-adaptive-md margin-auto">
                ${header_default(data_default.basics)}
                <section class="padding-y-xl">
                
                    ${item_default(bio_default, "Bio", data_default.basics.summary)}
                    ${item_default(skills_default, "Skills", data_default.skills)}
                    ${item_default(work_default, "Experience", data_default.work)}
                    ${item_default(awards_default, "Awards", data_default.awards)}
                    ${item_default(languages_default, "Languages", data_default.languages)}
                    ${item_default(interests_default, "Interests", data_default.interests)}

                </section>
            </main>
        `;
});
//# sourceMappingURL=index.js.map

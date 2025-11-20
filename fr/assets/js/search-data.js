// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-a-propos",
    title: "A propos",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-enseignement",
          title: "Enseignement",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "An overview of the current projects I am currently involved in.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-conjointement-avec-une-équipe-du-centre-de-recherche-en-neurosciences-de-lyon-nous-venons-de-publier-une-note-présentant-une-expérimentation-sur-le-report-d-horaire-de-début-des-cours-vous-pouvez-en-savoir-plus-en-lisant-cette-note-sur-le-site-du-conseil-scientifique-de-l-education-nationale-csen",
          title: 'Conjointement avec une équipe du Centre de Recherche en Neurosciences de Lyon, nous...',
          description: "",
          section: "News",},{id: "projects-reading-with-ai-can-technology-foster-reading-acquisition-and-promote-educational-equity",
          title: 'Reading with AI. Can Technology Foster Reading Acquisition and Promote Educational Equity?',
          description: "Exploring the use of ML-based platforms to improve reading skills in first-grade",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en/Lalilo/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%65%78%61%6E%64%72%65.%67%72%65%6C%6C%65%74@%73%63%69%65%6E%63%65%73%70%6F.%66%72", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=lW9DwbwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

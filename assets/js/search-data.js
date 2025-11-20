// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-teaching",
          title: "teaching",
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
        },{id: "news-with-a-pluridisciplinary-team-from-university-of-lyon-1-and-paris-school-of-econonomics-we-released-the-results-of-a-research-about-delaying-school-start-in-high-school-in-france-you-can-check-it-out-here",
          title: 'With a pluridisciplinary team from University of Lyon 1 and Paris School of...',
          description: "",
          section: "News",},{id: "projects-reading-with-ai-can-technology-foster-reading-acquisition-and-promote-educational-equity",
          title: 'Reading with AI. Can Technology Foster Reading Acquisition and Promote Educational Equity?',
          description: "Co-authors: Carlo Barone, Marc Gurgand, Elise Huillery, Thomas Villemonteix",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Lalilo_en/";
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

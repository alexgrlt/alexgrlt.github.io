// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "An overview of my projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-with-a-multidisciplinary-team-from-university-of-lyon-1-and-paris-school-of-economics-we-released-the-results-of-a-study-on-delaying-school-start-in-french-lower-secondary-schools-collège-you-can-check-it-out-here",
          title: 'With a multidisciplinary team from University of Lyon 1 and Paris School of...',
          description: "",
          section: "News",},{id: "news-the-results-from-our-sleep-experiment-were-published-in-scientific-reports-we-showed-that-delaying-school-start-by-1-hour-can-meaningfully-improve-cognitive-performance-in-adolescents",
          title: 'The results from our sleep experiment were published in Scientific Reports. We showed...',
          description: "",
          section: "News",},{id: "news-we-presented-the-preliminary-results-of-our-rct-evaluating-the-effectiveness-of-lalilo-an-edtech-aiming-to-improve-first-grade-students-reading-skills-during-the-conference-celebrating-the-achievements-of-the-idee-program-you-can-find-a-summary-of-the-results-on-the-idee-website-as-well-as-an-accompanying-blog-post-by-lalilo-our-next-steps-explain-in-greater-depth-the-use-of-lalilo-and-explore-heterogeneous-effects",
          title: 'We presented the preliminary results of our RCT evaluating the effectiveness of Lalilo,...',
          description: "",
          section: "News",},{id: "projects-delaying-school-start-in-adolescence-dessa",
          title: 'Delaying School Start in Adolescence (DESSA)',
          description: "Co-authors: [Stéphanie Mazza](https://inspe.univ-lyon1.fr/recherche/annuaire-des-chercheurs-ses/stephanie-mazza), Eve Reynaud, Amandine Rey, Lucie Malevergne, Adrien Pawlik, [Marc Gurgand](https://www.povertyactionlab.org/person/gurgand)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DESSA/";
            },},{id: "projects-reading-with-ai-can-technology-foster-reading-acquisition-and-promote-educational-equity",
          title: 'Reading with AI. Can Technology Foster Reading Acquisition and Promote Educational Equity?',
          description: "Co-authors: [Carlo Barone](https://www.sciencespo.fr/liepp/en/directory/barone-carlo/), [Marc Gurgand](https://www.parisschoolofeconomics.eu/en/gurgand-marc/), [Elise Huillery](https://sites.google.com/site/elisehuillery), [Thomas Villemonteix](https://ufr-psycho.univ-paris8.fr/VILLEMONTEIX-Thomas)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Lalilo/";
            },},{id: "projects-too-hot-to-succeed-heat-waves-exam-performance-and-noisy-signals-in-college-admissions",
          title: 'Too Hot to Succeed? Heat Waves, Exam Performance, and Noisy Signals in College...',
          description: "Co-author: [Leïla Costil](https://leilacstl.github.io/)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/heat_waves/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%65%78%61%6E%64%72%65.%67%72%65%6C%6C%65%74@%73%63%69%65%6E%63%65%73%70%6F.%66%72", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alexandre-grellet", "_blank");
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

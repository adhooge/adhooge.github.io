
const currentUrl = window.location.href;
const siteUrl = "https://adhooge.github.io"; 
let updatedUrl = currentUrl.replace("https://adhooge.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fr".length > 0) {
  updatedUrl = updatedUrl.replace("/fr", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-bio",
    title: "bio",
    section: "menu de navigation",
    handler: () => {
      window.location.href = "/fr/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications par catégories en ordre chronologique inversé.  page générée par jekyll-scholar. tous les articles devraient être disponibles sur HAL.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/publications/";
          },
        },{id: "nav-enseignement",
          title: "enseignement",
          description: "Contactez-moi pour davantage d&#39;informations sur ces différents enseignements.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/teaching/";
          },
        },{id: "nav-recherche",
          title: "recherche",
          description: "Autres informations sur ma recherche. Vous trouverez mes publications à l&#39;onglet correspondant.",
          section: "menu de navigation",
          handler: () => {
            window.location.href = "/fr/research/";
          },
        },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "actualités",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "actualités",handler: () => {
              window.location.href = "/fr/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "actualités",},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/9_project/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "projets",handler: () => {
              window.location.href = "/fr/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'envoyer un courriel',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("mailto:%61%6C%65%78%61%6E%64%72%65.%64%68%6F%6F%67%65@%75%6E%69%76-%6C%69%6C%6C%65.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://github.com/adhooge", "_blank");
        },
      },{
        id: 'social-gitlab',
        title: 'GitLab',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://gitlab.com/adhooge1", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://www.linkedin.com/in/alexandre-d-hooge-a5117a156", "_blank");
        },
      },{
        id: 'social-mastodon',
        title: 'Mastodon',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://mastodon.zaclys.com/@soubaboy", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://orcid.org/0000-0003-1634-3406", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=aWrwV9IAAAAJ", "_blank");
        },
      },{
        id: 'social-wikipedia',
        title: 'Wikipedia',
        section: 'réseaux sociaux',
        handler: () => {
          window.open("https://wikipedia.org/wiki/User:Soubaboy", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: 'langues',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'changer le thème en clair',
      description: 'changer le thème du site en clair',
      section: 'thème',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'changer le thème en sombre',
      description: 'changer le thème du site en sombre',
      section: 'thème',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'utiliser le thème par défaut du système',
      description: 'changer le thème du site selon le système par défaut',
      section: 'thème',
      handler: () => {
        setThemeSetting("system");
      },
    },];

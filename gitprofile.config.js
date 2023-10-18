// gitprofile.config.js

const config = {
  github: {
    username: 'nairad42', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      // projects: ['Pokedex95'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'darian-purry',
    instagram: 'nairad42',
    email: 'dpurry23@gmail.com',
    dev: '@nairad42',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1fYx7OqpRAhE32Hf3ZJteA7kYvHQya3cE/view?usp=share_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Elixir',
    'Phoenix',
    'JavaScript',
    'React.js',
    'Node.js',
    'Kubernetes',
    'PostgreSQL',
    'Google Cloud Platform',
    'Next.js',
    'Docker',
    'Angular',
    'Electron',
    'Express',
    'CSS',
  ],
  experiences: [
    {
      company: 'Vendorful',
      position: 'Software Engineer',
      from: 'Nov 2021',
      to: 'May 2023',
    },
    {
      company: 'Believable Creations',
      position: 'Software Engineer',
      from: 'Mar 2019',
      to: 'Sept 2020',
    },
    {
      company: 'California Resources Corporation',
      position: 'Software Engineer Intern - Application Development',
      from: 'Mar 2019',
      to: 'Sept 2020',
    },
    {
      company: 'Self Employed',
      position: 'Freelance Web Developer',
      from: 'Jan 2016',
      to: 'Sept 2021',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'El Camino College',
      from: '2016',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  //  {TODO : Thumbnail for project}

  externalProjects: [
    {
      title: 'Pokedex95',
      description: 'Original 151 Pokémon with styling inspired by Windows 95',
      imageUrl:
        'https://raw.githubusercontent.com/nairad42/Pokedex95/master/src/assets/windowslogo.png',
      link: 'https://nairad42.github.io/Pokedex95/',
    },
    // {
    //   title: 'Project Name',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    // },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'nairad42', // to hide blog section, keep it empty
    limit: 10, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-61V9VWZEVJ', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;

// gitprofile.config.js

const config = {
  github: {
    username: 'jpegpink', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: true, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'darian-purry',
    twitter: 'jpegpinkk',
    instagram: 'nairadjs',
    phone: '3108484799',
    email: 'dpurry23@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/13DeLSrOsq0SLZUPmSN5_F09-wlgP1cKb/view?usp=share_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Elixir',
    'Phoenix',
    'JavaScript',
    'React.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Angular',
    'Electron',
    'Express',
  ],
  experiences: [
    {
      company: 'Vendorful',
      position: 'Software Engineer',
      from: 'Jan 2021',
      to: 'Jan 2022',
    },
    {
      company: 'Vendorful',
      position: 'Support Engineer',
      from: 'Nov 2021',
      to: 'Jan 2022',
    },{
      company: 'Believable Creations',
      position: 'Software Engineer',
      from: 'Mar 2019',
      to: 'Sept 2020',
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
      degree: 'AA Computer Science',
      from: '2016',
      to: '2018',
    }
  ],

  // To hide the `My Projects` section, keep it empty.
  //  {TODO : Thumbnail for project} 

  externalProjects: [
    {
      title: 'Pokedex95',
      description:
        'Original 151 Pokémon with styling inspired by Windows 95',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
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
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

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
};

export default config;

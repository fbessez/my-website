module.exports = {
  siteTitle: 'Fabien Bessez | Software Engineer',
  siteDescription:
    'Fabien Bessez is a backend engineer based in New York, NY specializing in backend development for services and products that he believes in.',
  siteKeywords:
    'Fabien Bessez, Fabien, Bessez, fbessez, software engineer, back-end engineer, rails, grpc, web developer, juvo, wesleyan',
  siteUrl: 'https://fabien.bessez.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2', // TODO
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk', // TODO
  name: 'Fabien Bessez',
  location: 'New York, NY',
  email: 'fabien.bessez@gmail.com',
  github: 'https://github.com/fbessez',
  twitterHandle: '@b16fabien',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/fbessez',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/fabien-bessez',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/b16fabien',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/b16fabien',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

const LISTING_TYPES = {
  FULL_TIME: 'Full Time',
  PART_TIME: 'Part Time',
  CONTRACT: 'Contract'
};

const ROLES = {
  FRONTEND: 'frontend',
  FULL_STACK: 'Fullstack',
};

const LEVELS = {
  SENIOR: 'senior',
  MID_WEIGHT: 'MidWeight',
  JUNIOR: 'Junior'
};

const LANGUAGES = {
  HTML: 'html',
  CSS: 'css',
  JS: 'javascript',
  PYTHON: 'python',
};

const TOOLS = {
  REACT: 'React',
  SASS: 'Sass',
};

module.exports = [
  {
    isFeatured: true,
    listingTitle: "Senior Frontend Developer",
    listedCompany: "Photosnap",
    listingLocation: "USA only",
    timeRegistered: "02/10/2021",
    listingType: LISTING_TYPES.FULL_TIME,
    role: ROLES.FRONTEND,
    level: LEVELS.SENIOR,
    languages: [LANGUAGES.HTML, LANGUAGES.CSS, LANGUAGES.JS]
  },
  {
    isFeatured: true,
    listingTitle: "Fullstack Developer",
    listedCompany: "Manage",
    listingLocation: "Remote",
    timeRegistered: "02/10/2021",
    listingType: LISTING_TYPES.PART_TIME,
    role: ROLES.FULL_STACK,
    level: LEVELS.MID_WEIGHT,
    languages: [LANGUAGES.PYTHON, languages.JS],
    tools: [TOOLS.REACT]
  },
  {
    isFeatured: false,
    listingTitle: "Junior Frontend Developer",
    listedCompany: "Account",
    listingLocation: "USA only",
    timeRegistered: "02/10/2021",
    listingType: LISTING_TYPES.PART_TIME,
    role: ROLES.FRONTEND,
    level: LEVELS.JUNIOR,
    languages: [LANGUAGES.JS],
    tools: [TOOLS.REACT, TOOLS.SASS]
  },
  {
    isFeatured: false,
    listingTitle: "Junior Frontend Developer",
    listedCompany: "MyHome",
    listingLocation: "USA only",
    timeRegistered: "02/10/2021",
    listingType: LISTING_TYPES.CONTRACT,
    role: ROLES.FRONTEND,
    level: LEVELS.JUNIOR,
    languages: [LANGUAGES.JS, LANGUAGES.CSS, LANGUAGES.HTML],
  },
];
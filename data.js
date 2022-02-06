/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "Tedium",
  email: "design.tedium@gmail.com",
  about:
    "Hey! I'm <b>Tedium</b>, a 17 years old <b>Apparel</b> and <b>Graphic Designer</b> currently based in <b>Montreal</b>.",

  // intro
  accomplishments: {
    name: "Recent Accomplishments",
    value: [
      "Enrolled in a graphic design program",
      "Building my portfolio with my works",
      "Learning and growing as a designer everyday!",
    ],
  },
  socialLink: {
    name: "Social Links",
    value: [
      { name: "Behance", link: "behance.net/tedium" },
      { name: "Dribbble", link: "/" },
      { name: "Twitter", link: "https://twitter.com/txdium" },
      { name: "Github", link: "/" },
      { name: "Youtube", link: "/" },
      { name: "Spotify", link: "/" },
    ],
  },
  currentProfession: {
    name: "Currently",
	  value: [
		  "Looking for freelance work",
		  "Available for new projects"
	  ],
  },

  // Footer
  contactDetails: {
    name: "Let's get to work!",
    value: [
      {
        name: "Gmail",
        value: "design.tedium@gmail.com",
      },
      {
        name: "Twitter",
        value: "@txdium",
      },
    ],
  },
  currentStatus: {
    name: "What am I upto right now",
    value: [
      "Building my portfolio",
      "Studying Graphic Design in College",
    ],
  },

  // work
  // image min-dimensions: 1640x600
  // image format: jpg, png, webp
  // if image is from an external source then add the domain in next.config.js
  workExperience: [
    {
      info: {
        "Test": ["TESTING"],
        "Description": [
          "Testing tested test to be tested.",
        ],
	      "My Objectives": [
	        "Having clients weekly",
	        "Developing and experimenting on my craft"
	      ],
      },

      link: "/",
      image: "/images/apple.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing",
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/spiderman.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing", 
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/microsoft.png",
    },
  ],

  // available options:- light, dark, auto
  theme: "light",
};

const settings = {
  "name": "nikolas-frontend",
  "state": {
    "frontity": {
      "url": "https://alexander.nikolasreuber.de",
      "title": "Alexander Nikolas Reuber",
      "description": "My personal homepage and blog"
    }
  },
  "packages": [
    {
      name: "nikolas-real-frontend"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://backend.nikolasreuber.de/",
          homepage: "/home",
          postsPage: "/blog"
        },
        "wpSource": {
          "prefix": "/api"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

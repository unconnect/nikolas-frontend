const settings = {
  "name": "nikolas-frontend",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
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
          "url": "https://backend.nikolasreuber.de/"
        },
        wpSource: {
          prefix: "/api"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;

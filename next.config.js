const BASE_PATH = process.env.BASE_PATH || "";

module.exports = {
  env: {
    BASE_PATH
  },
  basePath: BASE_PATH,
  poweredByHeader: false,
  images: {
    domains: [
      "avatars.githubusercontent.com", //GitHub profile images
      "abs.twimg.com", //Twitter default profile images
      "pbs.twimg.com" // Twitter profile images
    ]
  }
};

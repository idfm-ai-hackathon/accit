module.exports = {
  "*.{sh,js,jsx,ts,tsx,css,scss,md,htm,package.json}": [
    "prettier --write",
    "eslint --fix",
    "git add",
  ],
};

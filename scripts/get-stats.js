const https = require('https');
const path = require('path');
const fs = require('fs');

const GITHUB_API_URL = 'https://api.github.com/repos/wbkd/react-flow';
const NPM_API_URL = 'https://api.npmjs.org/downloads/point/last-year/react-flow-renderer';
const OUTPUT_PATH = path.resolve(__dirname, '../static/data/stats.json');

const defaultStats = {
  stars: 9400,
  downloads: 2890000,
};

const fetchJSON = async function (url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'webkid' } }, (response) => {
      let json = '';
      response.on('data', (chunk) => (json += chunk));
      response.on('error', reject);
      response.on('end', () => resolve(JSON.parse(json)));
    });
  });
};

(async () => {
  const { stargazers_count: stars } = await fetchJSON(GITHUB_API_URL);
  const { downloads } = await fetchJSON(NPM_API_URL);
  const stats = {
    stars: stars || defaultStats.stars,
    downloads: downloads || defaultStats.downloads,
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(stats));
})();

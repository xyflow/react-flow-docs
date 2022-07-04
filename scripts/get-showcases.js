require('dotenv').config();
const { Client } = require('@notionhq/client');
const path = require('path');
const fs = require('fs');

const SHOWCASES_DATABASE_ID = '979e1cdba1fa44469101c163c5b8a88c';
const notion = new Client({ auth: process.env.NOTION_API_SECRET });
const OUTPUT_PATH = path.resolve(__dirname, '../static/data/showcases.json');

(async () => {
  const { results } = await notion.databases.query({
    database_id: SHOWCASES_DATABASE_ID,
    filter: {
      property: 'publish',
      checkbox: {
        equals: true,
      },
    },
  });

  const showcases = results.map((result) => {
    const id = result.id;
    const title = result.properties.title.title[0].plain_text;
    const url = result.properties.url.url;
    const description = result.properties.description.rich_text[0].plain_text;
    const image = result.properties.image.files[0].file.url;

    return {
      id,
      title,
      url,
      description,
      image,
    };
  });

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(showcases.reverse()));
})();

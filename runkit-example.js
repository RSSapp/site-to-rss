// Load the RssApp SDK
const RssApp = require('site-to-rss');
// Create RssApp service object
const rssApp = new RssApp({
  apiKey: 'c_05ZRCU3EuVX9ga',
  apiSecret: 's_5umGAwCuP8Ys97nyqZQ8JS',
});

// Call RssApp to create the feed
rssApp.feed
  .create({ url: 'https://bbc.com' })
  .then((feed) => {
    console.log('Success', feed);
  })
  .catch((err) => {
    console.log('Error', err);
  });
const axios = require('axios');
const path = require('path');

module.exports = async function () {
  return axios
    .get('https://pietvanzoen.github.io/updates/updates.json')
    .then(function (response) {
      return filterTweetLinkData(response.data.updates);
    })
    .catch(function (error) {
      console.log(error);
    });
};

function filterTweetLinkData(updates = []) {
  return updates.map((update) => {
    const inputPath = path.join('./updates', update.path);
    const fileSlug = path.basename(inputPath);
    return {
      inputPath,
      fileSlug,
      outputPath: path.join('./_site/updates/', fileSlug, '/index.html'),
      url: path.join('/updates', fileSlug, '/'),
      date: new Date(update.data.date),
      data: {},
      templateContent: update.html,
      // ...update,
      // alsoOn: [first(update.data.twitter), first(update.data.mastodon)].filter(
      //   Boolean
      // ),
      // slug: path.parse(update.path).name,
      // linkData: (update.linkData || [])
      //   .filter((link) => link && link.ogSiteName !== 'Twitter')
      //   .map((link) => {
      //     let imageUrl = link?.ogImage[0]?.url;
      //     if (imageUrl && !imageUrl.startsWith('http')) {
      //       imageUrl = new URL(imageUrl, link.url).href;
      //     }
      //     return {
      //       ...link,
      //       imageUrl,
      //     };
      //   }),
    };
  });
}

function first(arr = []) {
  return arr[0];
}

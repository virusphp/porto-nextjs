// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    handleImages: ['jpeg'],
    images: {
    disableStaticImages: true
  }
  }],
  

  // your other plugins here

]);

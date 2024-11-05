module.exports = function(eleventyConfig) {
  eleventyConfig.addCollection("exhibitions", function(collectionApi) {
    return collectionApi.getAll().filter(function(item) {
      return item.data.exhibitions;
    });
  });
  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("*.js");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};

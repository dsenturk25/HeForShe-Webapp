
module.exports = (req, res) => {
  return res.render("index/index", {
    meta: "included",
    title: "UAA HeForShe Club",
    page: 'index/index',
    includes: {
      external: {
        css: ["page","header"],
        js: ["page", "header"]
      }
    }
  })
}
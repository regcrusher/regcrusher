const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rgranados/projects/regcrusher/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/rgranados/projects/regcrusher/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/rgranados/projects/regcrusher/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/rgranados/projects/regcrusher/src/pages/page-2.js")))
}


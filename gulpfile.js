const { src, dest, watch, parallel } = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;

function scripts() {
  return src(["node_modules/jquery/dist/jquery.js", "src/js/script.js"])
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(dest("src/js"))
    .pipe(browserSync.stream());
}

function server() {
  browserSync.init({
    server: {
      baseDir: "src",
    },
  });
}

function styles() {
  return (
    src("src/sass/**/*.+(scss|sass)")
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(rename({ suffix: ".min", prefix: "" }))
      /*      .pipe(concat("style.min.css")) */
      .pipe(autoprefixer())
      .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(dest("src/css"))
      .pipe(browserSync.stream())
  );
}

function watching() {
  watch(["src/sass/**/*.+(scss|sass)"], styles);
  watch(["src/js/*.js", "!src/js/script.min.js"], scripts);
  watch(["src/*.html"]).on("change", browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.server = server;
exports.scripts = scripts;

exports.default = parallel(watching, server, styles, scripts);

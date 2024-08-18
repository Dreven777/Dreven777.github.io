const { src, dest, watch, task, series, parallel } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create()
const cssnano = require('cssnano')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss')
const csscomb = require('gulp-csscomb')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const sortCSSmq = require('sort-css-media-queries')

const PATH = {
  scssRootFile: './src/scss/styles.scss',
  scssAllFiles: './src/scss/**/*.scss',
  scssFolder: './src/scss/',
  cssFolder: './src/css/',
  htmlFolder: './',
  htmlAllFiles: './*.html'
}

const PLUGINS = [
  autoprefixer({
    overrideBrowserslist: ['last 5 versions'],
    cascade: true
  }),
  mqpacker({ sort: sortCSSmq })
]

function compileScss() {
  return src(PATH.scssRootFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(PLUGINS))
    .pipe(csscomb())
    .pipe(dest(PATH.cssFolder))
    .pipe(browserSync.stream())
}


function compileScssMin() {
  const pluginsForMinify = [...PLUGINS, cssnano({ preset: 'default' })]

  return src(PATH.scssRootFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(pluginsForMinify))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(PATH.cssFolder))
}

function comb() {
  return src(PATH.scssAllFiles).pipe(csscomb()).pipe(dest(PATH.scssFolder))
}


function syncInit() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

async function sync() {
  browserSync.reload()
}

function watchFiles() {
  syncInit()
  watch(PATH.scssAllFiles, series(compileScss, compileScssMin))
  watch(PATH.htmlAllFiles, sync)
}

task('min', compileScssMin)
task('scss', series(compileScss, compileScssMin))
task('comb', comb)
task('watch', watchFiles)
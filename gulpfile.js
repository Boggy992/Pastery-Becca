const gulp = require('gulp');
const { src, series, parallel, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const del = require('del');

function copyHTML() {
    return src('app/*.html')
        .pipe(dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
}

function style() {
    return src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssnano())
        .pipe(rename('styles.min.css'))
        .pipe(dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
}

function js() {
    return src('app/js/**/*.js')
        .pipe(concat('all.js'))
        .pipe(terser())
        .pipe(dest('dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
}

function imgTask() {
    return src('app/images/**/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'))
}

function fontTask() {
    return src('app/fonts/**/*.+(ttf|woff|woff2|eot|svg)')
        .pipe(dest('dist/fonts'))
}

function clean() {
    return del([ 'dist' ]);
}

function watching() {
    browserSyncfunc()
    
    watch('app/*.html', copyHTML); 
    watch('app/scss/**/*.scss', style); 
    watch('app/js/**/*.js', js);    
}

function browserSyncfunc() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
}

const build = series(clean, parallel(copyHTML, style, js, imgTask, fontTask));

exports.build = build; 
exports.default = watching;
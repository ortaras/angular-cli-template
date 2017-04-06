"use strict";
let cleanCSS, gulp, less, prefixer, sourcemaps, path, del, tsc, tsProject;

cleanCSS = require('gulp-clean-css');
gulp = require("gulp");
less = require('gulp-less');
sourcemaps = require('gulp-sourcemaps');
prefixer = require('gulp-autoprefixer');
del = require("del");
tsc = require("gulp-typescript");
tsProject = tsc.createProject("tsconfig.json");

path = {
    build: {
        images: './build/assets/images',
        fonts: './build/assets/fonts',
        views: './build',
        style: './build/assets/styles',
        compStyles: './build',
        root: './build',
        libs: './build/lib',
    },
    src: {
        images: './app/assets/images/**/*.png',
        fonts: './app/assets/fonts/**/*.*',
        views: './app/**/*.html',
        style: './app/assets/styles/style.less',
        compStyles: ['./app/**/*.less', '!./app/assets/**/*.less']
    },
    watch: {
        views: './app/**/*.html',
        style: './app/assets/styles/**/*.less',
        compStyles: ['./app/**/*.less', '!./app/assets/**/*.less']
    }
};

gulp.task('build', [
    'systemjs:config',
    'general:favicon',
    'general:images',
    'general:fonts',
    'components:views',
    'general:style',
    'components:style',
    'components:compile',
    'general:libs'
], () => { });

gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

gulp.task('watch', function () {
    gulp.watch(["app/**/*.ts"], ['compile']);
    gulp.watch(["app/**/*.html"], ['components:views']);
    gulp.watch(path.watch.style, ['general:style']);
    gulp.watch(path.watch.compStyles, ['components:style']);

});

gulp.task("components:compile", () => {
    let tsResult = gulp.src("./app/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(path.build.root));
});

gulp.task("general:libs", () => {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**/*.js',
        'zone.js/dist/**',
        '@angular/**/bundles/**',
    ], { cwd: "node_modules/**" })
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(path.build.libs));
});

gulp.task('systemjs:config', () => {
    return gulp.src("./app/systemjs.config.js")
        .pipe(gulp.dest("build"));
});

gulp.task('general:favicon', () => {
    return gulp.src("./favicon.png")
        .pipe(gulp.dest(path.build.root));
});

gulp.task('general:images', () => {
    return gulp.src(path.src.images)
        .pipe(gulp.dest(path.build.images));
});

gulp.task('general:fonts', () => {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('components:views', () => {
    return gulp.src(path.src.views)
        .pipe(gulp.dest(path.build.views));
});

gulp.task('general:style', () => {
    return gulp.src(path.src.style)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(prefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style));
});

gulp.task('components:style', () => {
    return gulp.src(path.src.compStyles)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(prefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.compStyles));
});

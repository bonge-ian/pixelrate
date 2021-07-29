const mix = require('laravel-mix');
const path = require('path');

// set an alias for uikit-util
mix.webpackConfig({
    resolve: {
        alias: {
            "uikit-util": path.resolve(
                __dirname,
                "node_modules/uikit/src/js/util/"
            ),
        },
    },
});

mix.js("resources/js/site.js", "public/js");

mix.sass("resources/scss/site.scss", "public/css");


if (mix.inProduction()) {
   mix.version();
}

/*
 |--------------------------------------------------------------------------
 | Statamic Control Panel
 |--------------------------------------------------------------------------
 |
 | Feel free to add your own JS or CSS to the Statamic Control Panel.
 | https://statamic.dev/extending/control-panel#adding-css-and-js-assets
 |
 */

// mix.js('resources/js/cp.js', 'public/vendor/app/js')
//    .postCss('resources/css/cp.css', 'public/vendor/app/css', [
//     require('postcss-import'),
//     require('tailwindcss'),
//     require('postcss-nested'),
//     require('postcss-preset-env')({stage: 0})
// ])

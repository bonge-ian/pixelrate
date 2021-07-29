import UIkit from "uikit/dist/js/uikit-core";
// import Countdown from "uikit/dist/js/components/countdown";
import Filter from "uikit/dist/js/components/filter";
import Lightbox from "uikit/dist/js/components/lightbox";
import LightboxPanel from "uikit/dist/js/components/lightbox-panel";
// import Notification from 'uikit/dist/js/components/notification';
import Parallax from "uikit/dist/js/components/parallax";
import Slider from "uikit/dist/js/components/slider";
import SliderParallax from "uikit/dist/js/components/slider-parallax";
import Slideshow from "uikit/dist/js/components/slideshow";
import SlideshowParallax from "uikit/dist/js/components/slideshow-parallax";
import Sortable from "uikit/dist/js/components/sortable";
// import Tooltip from "uikit/dist/js/components/tooltip";
// // import Upload from 'uikit/dist/js/components/upload';

import Icons from "uikit/dist/js/uikit-icons";

UIkit.use(Icons);
UIkit.icon.add({
    pixelrate: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26.667 26.667" width="26.67" height="26.67"><defs><path d="M9.75 22.21L24.92 13L9.75 3.79L9.75 22.21Z" id="ao8sZKNQg"></path><path d="M10.31 2.87C9.98 2.66 9.56 2.66 9.22 2.85C8.88 3.04 8.67 3.4 8.67 3.79C8.67 4.71 8.67 12.08 8.67 13C8.67 13.6 9.15 14.08 9.75 14.08C10.35 14.08 10.83 13.6 10.83 13C10.83 12.51 10.83 10.09 10.83 5.72L22.83 13L10.83 20.28C10.83 18.51 10.83 17.53 10.83 17.33C10.83 16.74 10.35 16.25 9.75 16.25C9.15 16.25 8.67 16.74 8.67 17.33C8.67 17.82 8.67 21.72 8.67 22.21C8.67 22.6 8.88 22.96 9.22 23.15C9.38 23.25 9.57 23.29 9.75 23.29C9.94 23.29 10.14 23.24 10.31 23.13C11.83 22.21 23.96 14.85 25.48 13.93C25.8 13.73 26 13.38 26 13C26 12.62 25.8 12.27 25.48 12.07C22.45 10.23 11.83 3.79 10.31 2.87Z" id="asm45Mtg7"></path><path d="M5.96 21.22C6.56 21.22 7.04 20.74 7.04 20.14C7.04 19.54 6.56 19.06 5.96 19.06C5.47 19.06 1.57 19.06 1.08 19.06C0.49 19.06 0 19.54 0 20.14C0 20.74 0.49 21.22 1.08 21.22C2.06 21.22 5.47 21.22 5.96 21.22Z" id="j2qVwtpixV"></path><path d="M3.79 7.04C4.39 7.04 4.88 6.56 4.88 5.96C4.88 5.36 4.39 4.87 3.79 4.87C3.52 4.87 1.35 4.87 1.08 4.87C0.49 4.87 0 5.36 0 5.96C0 6.56 0.49 7.04 1.08 7.04C1.63 7.04 3.52 7.04 3.79 7.04Z" id="c9lski4pb"></path><path d="M5.96 9.21C5.9 9.21 5.47 9.21 5.42 9.21C4.82 9.21 4.33 9.69 4.33 10.29C4.33 10.89 4.82 11.37 5.42 11.37C5.47 11.37 5.9 11.37 5.96 11.37C6.56 11.37 7.04 10.89 7.04 10.29C7.04 9.69 6.56 9.21 5.96 9.21Z" id="eFmY1WjX5"></path><path d="M2.17 15.17C2.17 15.76 2.65 16.25 3.25 16.25C3.41 16.25 4.71 16.25 4.88 16.25C5.47 16.25 5.96 15.76 5.96 15.17C5.96 14.57 5.47 14.08 4.88 14.08C4.77 14.08 4.22 14.08 3.25 14.08C2.53 14.41 2.17 14.77 2.17 15.17Z" id="aXnqzn1QZ"></path></defs><g><g><g><use xlink:href="#ao8sZKNQg" opacity="1" fill="#1f2833" fill-opacity="1"></use><g><use xlink:href="#ao8sZKNQg" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#asm45Mtg7" opacity="1" fill="#66fcf1" fill-opacity="1"></use><g><use xlink:href="#asm45Mtg7" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#j2qVwtpixV" opacity="1" fill="#66fcf1" fill-opacity="1"></use><g><use xlink:href="#j2qVwtpixV" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#c9lski4pb" opacity="1" fill="#66fcf1" fill-opacity="1"></use><g><use xlink:href="#c9lski4pb" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#eFmY1WjX5" opacity="1" fill="#66fcf1" fill-opacity="1"></use><g><use xlink:href="#eFmY1WjX5" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g><g><use xlink:href="#aXnqzn1QZ" opacity="1" fill="#66fcf1" fill-opacity="1"></use><g><use xlink:href="#aXnqzn1QZ" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>`,

    videoplay: `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26.667 26.667" width="26.67" height="26.67"><defs><path d="M5.65 26C3.69 25.99 2.1 24.38 2.1 22.4C2.1 20.52 2.1 5.44 2.1 3.56C2.1 2.25 2.78 1.09 3.92 0.46C5.06 -0.18 6.41 -0.15 7.52 0.53C9.05 1.48 21.34 9.05 22.87 10C23.93 10.65 24.56 11.79 24.56 13.03C24.56 14.28 23.92 15.41 22.86 16.05C21.75 16.73 12.87 22.17 11.76 22.85C11.28 23.14 10.66 22.99 10.37 22.52C10.07 22.04 10.22 21.41 10.7 21.12C11.81 20.44 20.69 15 21.8 14.32C22.27 14.04 22.53 13.57 22.53 13.03C22.54 12.48 22.27 12.01 21.81 11.73C20.27 10.78 7.99 3.21 6.45 2.26C5.98 1.97 5.4 1.96 4.91 2.23C4.42 2.5 4.13 3 4.13 3.56C4.13 5.44 4.13 20.52 4.13 22.4C4.13 23.34 4.92 23.97 5.66 23.97C5.9 23.97 6.17 23.88 6.45 23.72C6.93 23.42 7.55 23.57 7.84 24.05C8.13 24.53 7.98 25.15 7.5 25.45C6.91 25.81 6.27 26 5.66 26C5.66 26 5.65 26 5.65 26Z" id="adfdQT3Fw"></path><linearGradient id="gradientbKsoW1N8" gradientUnits="userSpaceOnUse" x1="2.1" y1="13" x2="24.56" y2="13"><stop style="stop-color: #00f2fe;stop-opacity: 1" offset="0%"></stop><stop style="stop-color: #03effe;stop-opacity: 1" offset="2.1%"></stop><stop style="stop-color: #24d2fe;stop-opacity: 1" offset="29.299999999999997%"></stop><stop style="stop-color: #3cbdfe;stop-opacity: 1" offset="55.400000000000006%"></stop><stop style="stop-color: #4ab0fe;stop-opacity: 1" offset="79.60000000000001%"></stop><stop style="stop-color: #4facfe;stop-opacity: 1" offset="100%"></stop></linearGradient></defs><g><g><g><use xlink:href="#adfdQT3Fw" opacity="1" fill="url(#gradientbKsoW1N8)"></use><g><use xlink:href="#adfdQT3Fw" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="0"></use></g></g></g></g></svg>`,
});

// UIkit.component("countdown", Countdown);
UIkit.component("filter", Filter);
UIkit.component("lightbox", Lightbox);
UIkit.component("lightboxPanel", LightboxPanel);
// UIkit.component('notification', Notification);
UIkit.component("parallax", Parallax);
UIkit.component("slider", Slider);
UIkit.component("sliderParallax", SliderParallax);
UIkit.component("slideshow", Slideshow);
UIkit.component("slideshowParallax", SlideshowParallax);
UIkit.component("sortable", Sortable);
// UIkit.component("tooltip", Tooltip);
// UIkit.component('upload', Upload);

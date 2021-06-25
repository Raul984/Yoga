window.addEventListener('DOMContentLoaded', function() {

"use strict";

let calc = require('./parts/calc'),
    form = require('./parts/form'),
    slider = require('./parts/slider'),
    tabs = require('./parts/tabs'),
    timer = require('./parts/timer'),
    getModal = require('./parts/modal');

    calc();
    form();
    slider();
    tabs();
    timer();
    getModal('.more', '.overlay', '.popup-close');
    getModal('.description-btn', '.overlay', '.popup-close');
});
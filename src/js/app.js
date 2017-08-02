let d3 = require("d3");

import makeCartogram from "./cartogram";

var setupVisualsGoogleAnalytics = require('./analytics.js').setupVisualsGoogleAnalytics;
var trackEvent = require('./analytics.js').trackEvent;

var pym = require('pym.js');

var pymChild = null;

document.addEventListener("DOMContentLoaded", main());

function main() {
    var pymChild = new pym.Child();

    var carto = new makeCartogram({
        element: document.querySelector(`.chart.cartogram`),
        onReady: function() {
            console.log("ready");
        }
    });

    d3.select(window).on("resize", d => {
        carto.update();
    })


}
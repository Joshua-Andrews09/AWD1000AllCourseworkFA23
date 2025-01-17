"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    var image1 = $("#image1");
    var image2 = $("#image2");
let image = null;
    // preload images
    var links = $("#image_list").querySelectorAll("a");

    // attach mouseover and mouseout events for each image
    for ( let link of links) {
image = new Image ();
image.src = link.href; 
image.alt = link.title;

        image1.addEventListener("mouseover", () => {
            image1.src = links[0].href;
            image1.alt = links[0].title; 

        });
        image1.addEventListener("mouseout", () => {
            image1.src = links[2].href;
            image1.alt = links[2].title; 



        });
        image2.addEventListener("mouseover", () => {
            image2.src = links[1].href;
            image2.alt = links[1].title; 

        });
        image2.addEventListener("mouseout", () => {
            image2.src = links[3].href;
            image2.alt = links[3].title; 

        });           
    }

});

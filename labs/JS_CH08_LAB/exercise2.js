"use strict"

$(document).ready(() => {
$("#image_list a").each( (index, element) => {

const imageURL = $(element).attr("href");
const caption = $(element).attr("title");

//prelaod the image for each link
const galleryImage = new Image(); 
galleryImage.src = imageURL;

$(element).click( evt => {
$("#image").attr("src", imageURL);
$("#caption").text(caption);



//cancel default action of each link 
evt.preventDefault();

});//end click

}); //end each 

// move the focus the first link 
$("li:first-child a").focus();







});
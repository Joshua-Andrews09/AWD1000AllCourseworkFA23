$(document).ready( () => {

    $("#jdom a").click(evt => {
        evt.preventDefault();
        const link = evt.currentTarget;


        $(link).prev().toggleClass("hide");

        if ($(link).prev().attr("class") != "hide"){
            $(link).text("show less");
        }
        else{
            $(link).text("Show more");
        }
    });

});
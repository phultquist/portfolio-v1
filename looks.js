$(document).ready(() => {
    $("#learnmore").click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projectstop").offset().top
        }, 500);
    });

    $("#addemoji").click(() => {
        instance.addEmoji();
    });


})

window.onscroll = function () { scrollBot() };

var header = document.getElementById("projectstop");
var sticky = header.offsetTop;

function scrollBot() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        // header.classList.remove("bgwhite");
    } else {
        header.classList.remove("sticky");
        // header.classList.remove("bgwhite");
    }
}
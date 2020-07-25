let startingOffset;

$(document).ready(() => {
    $("#learnmore").click(() => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projectstop").offset().top + 1 // i really wanted the shadow to take affect, hence the +1
        }, 500);
    });

    $("#addemoji").click(() => {
        instance.addEmoji();
    });

    scrollBot();
    $(window).scroll(() => scrollBot());
    startingOffset = $(".card:eq(0)").offset().left

    $('#right').click( () => scroll())
})

$(".projectlist").children().prepend("<span class='projbpoint'>&#9679;</span>")

var header = document.getElementById("projectstop");
var sticky = header.offsetTop;

function scrollBot() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

let currentCard = 0;

function scroll(right) {
    let offset = $(".card:eq("+ ++currentCard +")").offset().left
    console.log(offset);
    $(".scrolling-wrapper").animate({
        scrollLeft: (offset) - startingOffset
        // scrollLeft: 500
    }, 500);
}
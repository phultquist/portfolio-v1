let currentCard = 0;

let startingOffset,
    numCards;

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

    $('#right').click( () => scroll(true))
    $('#left').click( () => scroll(false))

    numCards = $(".scrolling-wrapper").children().length - 2;
})

var header = document.getElementById("projectstop");
var sticky = header.offsetTop;

function scrollBot() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function scroll(right) {
    let left = !right;
    let maxscroll = $(".scrolling-wrapper")[0].scrollWidth - $(".scrolling-wrapper").width(),
        scrollLeft = $(".scrolling-wrapper").scrollLeft();
    if ((scrollLeft >= maxscroll && right) || (scrollLeft <= 0 && left) ) {
        return;
    }

    $(".scrolling-wrapper").animate({
        scrollLeft: (right ? ++currentCard : --currentCard) * 335
    }, 500);
}
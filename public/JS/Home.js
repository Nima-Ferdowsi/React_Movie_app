var html = new noise()
let ajax = new Ajax();
/* var ajax=new Ajax()
 */
html.resize();
window.onresize = html.resize;

// Creating animation effect 
var toggle = true;
(function loop() {
    toggle = !toggle;
    if (toggle) {

        // Loop function is called each time 
        // before next repaint. 
        requestAnimationFrame(loop);
        return;
    }
    html.generate_noise(ctx);
    requestAnimationFrame(loop);
})();

$(document).ready(function() {

    var owl = $('.owl-carousel');

    owl.owlCarousel({

        loop: false,

        margin: 10,

        navRewind: false,

        responsive: {

            0: {

                items: 2

            },

            550: {

                items: 2

            },

            900: {

                items: 3

            },

            1200: {

                items: 4

            }

        }

    })

})

eventListener();

function eventListener() {
    document.addEventListener("DOMContentLoaded", function() {
        let imdb = document.querySelectorAll(".carousel-item img[data-imdb-id]")
        ajax.getinfo(imdb)
        let cardid = document.querySelectorAll(".overview a[data-imdb-id]")
        ajax.cardinfo(cardid);
    })


}
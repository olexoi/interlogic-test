$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1400: {
            items: 4
        }
    }
})


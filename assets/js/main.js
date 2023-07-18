'scrict'


$('.lookBox__card').css({
    'overflow-y': 'scroll',
});

$('#look-open').click(function() {
    $('.overlay').addClass("active");
    $('.lookBox').addClass("active");
    $('.lookBox__card').scrollTop(-60);

    setTimeout(() => {
        $('.lookBox__card').css({
            'overflow-y': 'initial',
        });
    }, 300)
});

$('#look-close').click(function() {
    $('.overlay').removeClass("active")
    $('.lookBox').removeClass("active")
    $('.lookBox__card').css({
        'overflow-y': 'scroll',
    });

});

$('.look-close').click(function() {
    $('.overlay').removeClass("active")
    $('.lookBox').removeClass("active")
    $('.lookBox__card').css({
        'overflow-y': 'scroll',
    });

});
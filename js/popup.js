var popupOpen = $('#popup_open'),
    popupClose = $('#popup_close')
    ;

popupOpen.click(function () {
    $('#popup-wrap').fadeIn();
});

popupClose.click(function () {
    $('#popup-wrap').fadeOut();
});

$(document).ready(function () {
    $(".fancybox").fancybox();
});

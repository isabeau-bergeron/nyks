function resizeHeader() {
    $('header, .title-c, .title-d, .title-e').css('height', window.innerHeight + 'px');
}

$(function() {
    resizeHeader();
});

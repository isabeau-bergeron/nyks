function resizeHeader() {
    // $('header, .title-c, .title-d, .title-e').css('height', window.innerHeight + 'px');
    const header = document.getElementsByTagName('header')[0];
    header.style.height = window.innerHeight + 'px'; 
}

window.onload = function() {
    resizeHeader();
};
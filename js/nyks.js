function resizeHeader() {
    // $('header, .title-c, .title-d, .title-e').css('height', window.innerHeight + 'px');
    const header = document.getElementsByTagName('header')[0];
    header.style.height = window.innerHeight + 'px'; 

    const titleC = document.getElementsByClassName('title-c')[0];
    titleC.style.height = window.innerHeight + 'px'; 

    const titleD = document.getElementsByClassName('title-d')[0];
    titleD.style.height = window.innerHeight + 'px'; 

    const titleE = document.getElementsByClassName('title-e')[0];
    titleE.style.height = window.innerHeight + 'px'; 
}

window.onload = function() {
    resizeHeader();
};
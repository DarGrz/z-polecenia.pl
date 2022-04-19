/* Scroll reveal */
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    delay: 300,
    origin: 'left',
    duration: 1500,
    distance: '25rem',

});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1500,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1500,
    distance: '25rem',
    delay: 600,
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1500,
    distance: '25rem',
    delay: 600,
});
window.addEventListener('scroll', function() {
    var contentContainer = document.querySelector('.content-container');
    if (window.scrollY > 50) {
        contentContainer.classList.add('scrolled');
    } 
    else 
    {
        contentContainer.classList.remove('scrolled');
    }
});



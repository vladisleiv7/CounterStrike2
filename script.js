const scrollToTopBtn = document.getElementById('scrollToTopBtn');
let scrollInterval;


function scrollUp() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -10);
    } else {
        clearInterval(scrollInterval); 
    }
}


window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
};


scrollToTopBtn.addEventListener('mousedown', function() {
    scrollInterval = setInterval(scrollUp, 10); 
});


scrollToTopBtn.addEventListener('mouseup', function() {
    clearInterval(scrollInterval); 
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    clearInterval(scrollInterval); 
});
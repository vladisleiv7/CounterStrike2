const scrollToTopBtn = document.getElementById('scrollToTopBtn');
let scrollInterval;


function scrollUp() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -15);
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


   
    const questions = document.querySelectorAll('.voprosi a'); 
    questions.forEach(question => {
        question.addEventListener('click', function(event) {
            event.preventDefault(); 

            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId); 

            
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        });
    });


    
    document.querySelectorAll('.voprosi a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); 
    
            
            const answerId = this.getAttribute('href');
    
            
            const answerElement = document.querySelector(answerId);
    
            
            document.querySelectorAll('.highlight').forEach(element => {
                element.classList.remove('highlight');
            });
    
            
            answerElement.classList.add('highlight');
        });
    });
    
    
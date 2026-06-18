// For hover mouse cursor effect in blog section

const hover = () => {

    var column = document.querySelectorAll(".column");
    
    column.forEach((elem) => {
        elem.addEventListener('mouseenter', () => {
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1,
            });
        });
    
        elem.addEventListener('mouseleave', () => {
           gsap.to(elem.childNodes[5], {
            opacity: 0,
            scale: 0
           });
        });
    
        elem.addEventListener('mousemove', (dets) => {
            gsap.to(elem.childNodes[5], {
               x:dets.x-50 - elem.getBoundingClientRect().x-20,
               y:dets.y-30 - elem.getBoundingClientRect().y,
            });
            
        });
    });
}

hover();